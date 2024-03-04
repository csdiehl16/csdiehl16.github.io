import classes from './ProjectTile.module.css';
import { useInView } from 'react-intersection-observer';

const ProjectTile = (props) => {
    const { ref, inView } = useInView({ threshold: 0.6 });

    return (
        <div ref={ref} className={inView ? classes.tile : `${classes.tile} ${classes['tile-hidden']}`}>
            <div>
                <h2 className={classes['project-title']}>{props.title}</h2>
                <p className={classes['description']}>{props.description}</p>
                <p className={classes['language-tag']}>{props.languageTag.join(' / ')}</p>
                <a className={classes['project-link']} href={props.link}>
                    <span>View Project</span>
                    <img alt="right-arrow" src="./arrow-right.svg"></img>
                </a>
            </div>
            <a href={props.link}>
                <img className={classes['tile-img']} src={props?.image} alt={props.title}></img>
            </a>
            {props.badge && <img className={classes['badge']} alt="information is beautiful awards badge" src={props.badge}></img>}
        </div>
    );
};

export default ProjectTile;
