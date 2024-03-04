---
title: Mysterious missing weather stations and other lessons from tracking global heat
excerpt: In recent years, the way we work has undergone a significant transformation, largely due to advancements in technology and changing attitudes toward work-life balance. One of the most notable changes has been the rise of remote work, allowing employees to work from the comfort of their own homes.
publishDate: "March 4 2023"
isFeatured: true
tags:
  - Python
  - Climate data
seo:
  image:
    src: "/heat_tracker.png"
    alt: An application to track extreme heat throughout the world
---

![Global heat tracker](/heat_tracker.png)

How can we show how much hotter it is than normal, in every part of the world?

A colleague and I on the data team at The Associated Press built an interactive tracker to help readers answer this very question, every single day. In the process, I wrestled with other, more trying, questions like — what is “normal”? What does “nearest” even mean? And why is nobody measuring the weather in Africa?

<iframe src="https://interactives.ap.org/heat-tracker/" scrolling="no" frameborder="0" width="100%" height="900"></iframe>

## Mysterious missing weather stations

Two main devices track global temperature — satellites and weather stations. In this post, I’m going to focus on the latter.

Reading the weather report each day, you can easily take for granted that we can know the temperature of any point on Earth at any given time. But finding this information on a reliable basis over a 30-year period is more complicated than you might think.

First, a myriad of public agencies manage weather stations. In the U.S., NOAA, the military and other scattered agencies all have stations. Fortunately, one agency, the World Meteorological Organization manages a global network of stations that more or less report the same data.

When I first plotted this network on a map, I thought I had inadvertently dropped some data. Almost nothing showed up in Africa or South America. Then, I realized I had stumbled upon a massive equity issue.

<img width="100%" src="https://e360.yale.edu/assets/site/_1500x1500_fit_center-center_80/Weather-Radar-Stations.png" />

The climate threat to populations in the Global South even is more dire because they can’t see what’s coming. Africa, a continent with 1.2 billion people, [has just 37 WMO weather stations](https://e360.yale.edu/features/africa-weather-stations-climate-change) . Meanwhile, the U.S. and E.U. combined have 636 weather radar stations for a population of 1.1 billion. Because of this disparity, US citizens were able to evacuate disasters like Hurricane Ida without major loss of life, while Cyclone Idai hit Africa without warning.

Even among stations that exist, we couldn’t collect enough data to depend on them for our heat tracker. Many have fallen into disrepair. In Africa, only 1 in 5 stations met the WMO reporting standards in 2019. Among the many [reasons for this](https://www.washingtonpost.com/world/2021/09/24/africa-climate-weather-data/) are a lack of government support, staffing and technological infrastructure.

We filtered out hundreds of stations worldwide that hadn’t recorded a blip of data in at least three years. Even the most reliable stations have a 3-5 day time lag between when the data is transmitted, and when it is processed and made available to the APIs we consume.

## Matching stations with cities

Originally, we envisioned listing a sort of Billboard top 100 of hottest cities in the world right now. We found a dataset of the world’s 1,000 or so most populous cities. I wrote a Python script that matched each one to its nearest weather station. We would then filter out any cities that didn’t have a station within 5 miles. Seemed simple enough.

But not really.

“Nearest” is not as straightforward a concept as it seems in spatial analysis. To measure distance, we need to calculate it across a flat surface. Because the world is a sphere, and our books and screens are flat, we need projections to squish the sphere into something flat. There are hundreds of projection functions ranging from basic rectangles (Mercator) to encapsulating the world in a twenty-sided dice and unrolling it (Dymaxion). In any projection there will be distortion, depending on what area you choose to focus. Certain projections are optimized for certain places.

There’s not one projection for the whole world. So it’s difficult to compare distance from points all over the world, without using many projections. The best solution I could find is called Great Circle, or “Haversine” distance (here’s a Python implementation), which is measured in degrees as the distance around a sphere. It looks like the flight path of a plane.

<img width="350px" src="https://media.licdn.com/dms/image/C4D12AQE0QbVF-y7cNg/article-cover_image-shrink_600_2000/0/1531928404478?e=2147483647&v=beta&t=_J31oxVLse5Ujz54gN10QVrzC44j66tccB-84ZP6uTA"/>

This led to more problems, however. We had to establish a cutoff in degrees, which seemed nonsensical, or arbitrary at best. And anyway, who decides where the “city center” is? City hall? The Central Business District? One paper identifies no less than 5 valid ways of deciding what is the “center.”

It turns out that nearly all WMO weather stations occupy an airport. Makes sense for how critical weather is to piloting. But the distance of the center to the airport varies widely for most cities.

In the end, we decided it didn’t make sense to assign one arbitrary cutoff. Instead we let the stations stand on their own, and improved the map labeling and orientation with user controls like a search bar and geolocator.

What is a “normal” temperature?
After we were confident in what stations we could find, we got down to the business of measuring the temperature. When measuring the impacts of climate change, absolute temperatures matter little. What matters is the deviation from average, or “normal” temperatures.

What is “normal?” Scientists have largely agreed it is the average of temperatures over a 30-year period. Technically, it’s not just an average — there is some complex math to interpolate missing data points. You also have to consider different time resolutions. You can average temperatures year by year, or month by month, or day by day. You can take the average of all the high temperatures or all the low temperatures, or work with all values recorded in each day.

## So, which “normal” should we use?

Ideally, we would use a 30-year period from way back in the past, before anthropogenic warming took hold. Unfortunately, this was not possible at a global scale with the existing data. The best the WMO provides for its global network is 1991-2020 normals. So what we are showing you in the heat tracker, which still shows quite a bit of deviation from normal, is warming after much of human-caused climate change has occurred.

I spoke with a climate scientist at NOAA to learn how to use their weather station data. Refreshingly, they thought their data was as confusing to work with as I did. They also reassured us that we could compare the average temperature for a single day to the monthly normal. It wasn’t exact, but was good enough.

We started with this, but then we realized — for tracking heat, we cared about the hottest temperatures. We envisioned users checking this to see the impacts of recent heatwaves. So we took the high temperature for the day and subtracted it from the “normal” — the average of high temperatures for that month over the 30-year baseline.

However, we needed one more step. Some days are going to be quite hotter than others, and that doesn’t necessarily mean there is an abnormal heat wave going on. Any time series will seasonal peaks and valleys in the overall trend line. To smooth out some of this daily noise, we took the average high temperature from the past week and compared it to the average high temperature for the month.

## How do we update the temperature every day?

If you don’t care about data visualization or web development, you can stop reading here. But I think most people who got this far will want to know the technical details of how a team of two people pulls in all this station data and updates it every day. So, here we go.

Our Python scripts query the National Center for Environmental Information’s common access API. Their normals endpoint returns monthly temperature normals given a list of stations. We have a pre-filtered station list that we made, using another Python script. It contains reliable stations with long-term normals that also exist on a list of stations with reliable daily results from Common Access. We loop through all of our stations and get the latest temperature readings. We compare these to the normals we have stored for these stations.

Every day, we run these scripts via Gitlab actions. We create a virtual environment for our scripts that has a requirements.txt file, specifying which packages to install. In our Gitlab repo, we store a .yml file that sets up the environment and runs the scripts each day. After the script runs, it pushes the output to a publicly readable S3 bucket.

The frontend is a React / Typescript app. We simply fetch the data from S3 and display it on a map. The caching policy is set to no cache, so that we are always pulling in the latest data. Most users are only going to pull up the page once, usually as they read an article, so this doesn’t impact performance too much. For the visualization, the map is built with Maplibre, and the line chart is rendered using SVG and D3.

## Conclusion

Like all data viz projects, this one turned out to have many intricate considerations that I couldn’t have foreseen. But that’s what makes a project like this so fascinating.

The most important insight was the lack of attention to measuring climate and weather in the Global South. The biggest question I get about the project is “why isn’t x country on the map?” A host of political and historical reasons are behind this question. To ensure a safe and equitable climate future, it’s imperative that we focus more resources and attention on weather stations in underserved areas.
