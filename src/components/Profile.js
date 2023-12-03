import classes from "./Profile.module.css"
import Image from "./Image"

const Profile = () => {
  return (
    <div className={classes.container}>
      <Image
        tag={"profile_transparent_dae5gq"}
        classes={classes["profile-img"]}
      />
      <div className={classes.description}>
        <h1 className={classes.header}>Hi, I'm Caleb Diehl</h1>
        <h2 className={classes.subhead}>Data Visualization Developer</h2>
        <div style={{ display: "flex", gap: "8px" }}>
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
    </div>
  )
}

export default Profile

/**
 *   <div>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/caleb-diehl-a93a6984"
            target="_blank"
          >
            <img
              height="48px"
              width="48px"
              alt="linkedin"
              className="contact-img"
              src="./linkedin.png"
            />
          </a>

          <a rel="noreferrer" href="https://github.com/csdiehl" target="_blank">
            <img
              height="48px"
              width="48px"
              alt="github"
              className="contact-img"
              src="./github.png"
            />
          </a>
        </div>
 */
