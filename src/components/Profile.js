import classes from "./Profile.module.css"

const Profile = ({ scroll, setActivePage, activePage }) => {
  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <h1 className={classes.header}>
          Hi, I'm<br></br> Caleb Diehl
        </h1>
        <h2 className={classes.subhead}>
          Data Visualization<br></br> Developer
        </h2>

        <div>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/caleb-diehl-a93a6984"
            target="_blank"
          >
            <img
              height="48px"
              width="48px"
              alt="linkedin"
              class="contact-img"
              src="./linkedin.png"
            />
          </a>

          <a rel="noreferrer" href="https://github.com/csdiehl" target="_blank">
            <img
              height="48px"
              width="48px"
              alt="github"
              class="contact-img"
              src="./github.png"
            />
          </a>
        </div>
      </div>

      <div className={classes["image-container"]}>
        <img
          alt="profile"
          className={classes["profile-img"]}
          src="/profile_transparent.png"
        />
      </div>
    </div>
  )
}

export default Profile
