import React, {Component} from "react";
import {withStyles} from "@material-ui/styles";

const styles = {
    MovieDisplay: {
        // border: "1px solid green",
        height: "99%",
        width: "15em",
        display: "flex",
        flexDirection: "column",
        marginRight: "0.5em",
        textDecoration: "none",
        color: "white",
        "& img": {
            width: "auto",
            height: "80%",
            marginBottom: "0.5em",
        },

    }
}

class MovieDisplay extends Component {
    render() {
        const {classes, title, url} = this.props;
        return (
            <a href={url} className={classes.MovieDisplay}>
                <img src="https://d32qys9a6wm9no.cloudfront.net/images/movies/poster/500x735.png"></img>
                <p>{title}</p>
            </a>
        )
    }
}

export default withStyles(styles)(MovieDisplay);