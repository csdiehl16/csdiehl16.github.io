import classes from "./Profile.module.css"

const Profile = ({ scroll, setActivePage, activePage }) => {
  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <div>
          <h1 className={classes.header}>
            Hi, I'm<br></br> Caleb Diehl
          </h1>
          <h2 className={classes.subhead}>
            Data Visualization<br></br> Developer
          </h2>
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
