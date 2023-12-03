import classes from "./Profile.module.css"
import Image from "./Image"

const Profile = () => {
  return (
    <div className={classes.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Image
          tag={"profile_transparent_dae5gq"}
          classes={classes["profile-img"]}
        />
        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "center",
          }}
        >
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/caleb-diehl-a93a6984"
            target="_blank"
          >
            <img
              height="32px"
              width="32px"
              alt="linkedin"
              className="contact-img"
              src="./linkedin-logo.svg"
            />
          </a>

          <a rel="noreferrer" href="https://github.com/csdiehl" target="_blank">
            <img
              height="32px"
              width="32px"
              alt="github"
              className="contact-img"
              src="./github-mark.svg"
            />
          </a>
        </div>
      </div>
      <div className={classes.description}>
        <h1 className={classes.header}>Hi, I'm Caleb Diehl</h1>
        <h2 className={classes.subhead}>Front-end Developer</h2>
        <p
          style={{
            margin: 0,
            fontSize: ".875rem",
            color: "#555",
            lineHeight: "1rem",
            marginTop: "16px",
          }}
        >
          I'm a front-end developer with expertise in{" "}
          <strong>data visualization</strong> and{" "}
          <strong>geospatial analysis.</strong> Currently, I visualize climate
          change for The Associated Press.
        </p>
      </div>
    </div>
  )
}

export default Profile
