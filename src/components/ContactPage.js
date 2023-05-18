import "./contactPage.css"

const ContactPage = () => {
  return (
    <div style={{ maxWidth: "50ch", textAlign: "left", margin: "0 auto" }}>
      <h2>About Me</h2>
      <p>
        Data visualization combines my two passions: design and statistics. I
        currently work at the Associated Press as a JavaScript and Python
        developer building visualizations about climate change.
      </p>
      <p>
        I earned a Master's in Urban Planning from the University of Washington,
        with a specialization in Urban Informatics. With my planning background,
        I focus on geospatial analyses, using QGIS, Python, and R.
      </p>
      <p>
        I started my career as a text reporter. I wrote for Portland Monthly,
        Oregon Business, and USA Today, and won a 2018 Excellence in Journalism
        Award from the Society of Professional Journalists Northwest for long
        form feature news writing.
      </p>
      <h2>Udemy Course</h2>
      <p>
        I offer a Udemy Course in Data Visualization, which you can{" "}
        <a
          style={{ textDecoration: "underline" }}
          href="https://www.udemy.com/course/data-visualization-react-d3/?referralCode=A669D6D959CBDEDD134A"
        >
          find here.
        </a>
      </p>
    </div>
  )
}

export default ContactPage
