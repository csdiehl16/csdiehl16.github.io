import React from "react"
import { Cloudinary } from "@cloudinary/url-gen"
import { AdvancedImage } from "@cloudinary/react"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import classes from "./Image.module.css"

const cld = new Cloudinary({
  cloud: {
    cloudName: "dwacjn0s3",
  },
})

const Image = ({ tag, type }) => {
  // Create a Cloudinary instance and set your cloud name.

  // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
  const myImage = cld.image(tag).delivery(format(auto()))

  return <AdvancedImage className={classes[type]} cldImg={myImage} />
}

export default Image
