import classes from "./Profile.module.css"

const Profile = (props) => {
  const scroll = () => {
    props.scroll()
  }

  return (
    <div className={classes.container}>
      <div className={classes.description}>
        <h1 className={classes.header}>
          Hi I'm<br></br> Caleb Diehl
        </h1>
        <h2 className={classes.subhead}>
          Data Visualization<br></br> Developer
        </h2>
      </div>

      <div className={classes["image-container"]}>
        <img
          className={classes["profile-img"]}
          src="/profile_transparent.png"
        />
      </div>
    </div>
  )
}

export default Profile
