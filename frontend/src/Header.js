import React, {Component} from "react";
import {withStyles} from "@material-ui/styles";

const styles = {
    navbar: {
        // border: "1px solid yellow",
        width: "80%",
        margin: "0 auto",
        padding: "0 1em",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },
    logo: {
        textDecoration: "none",
        color: "white",
    },
    navlinks: {
        // border: "1px solid red",
        listStyle: "none",
        display: "flex",
        "& li": {
            margin: "0 0.5em",
            "& a": {
                textDecoration: "none",
                color: "white",
                margin: "0.5em 1em",
                padding: "0.5em 1em",
            }
        }
    },
    login: {
        border: "1px solid red",
        borderRadius: "0.5em",
    }
}


class Header extends Component{ 
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.navbar}>
                <a className={classes.logo} href="#"><h1>FullMoviesOnYouTube</h1></a>
                <ul className={classes.navlinks}>
                    <li><a href="#">Sign In</a></li>
                    <li><a href="#" className={classes.login}>Log In</a></li>
                </ul>
                
            </div>
        )
    }
}

export default withStyles(styles)(Header);