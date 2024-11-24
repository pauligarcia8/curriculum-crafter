import cvIcon from "../assets/tie.png";
import classes from "./NavBar.module.css";

const NavBar = () => {
    return (
        <nav className={classes.navContainer}>
            <div className={classes.title}>
                <img className={classes.icon} src={cvIcon} />
                <h1>Curriculum Crafter</h1>
            </div>
            <p>Navigation Bar</p>
        </nav>
    )
}

export default NavBar;