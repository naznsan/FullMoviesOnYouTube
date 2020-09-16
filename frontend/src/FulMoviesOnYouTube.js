import React, {Component} from "react";
import Header from "./Header";
import MovieCarousel from "./MovieCarousel";
import {withStyles} from "@material-ui/styles";

const styles = {
    root: {
        backgroundColor: "black",
        height: "100vh",
        width: "100vw",
        paddingTop: "2em"
    }
}

class FullMoviesOnYouTube extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
                <Header />
                <MovieCarousel />
            </div>
        )
    }
}

export default withStyles(styles)(FullMoviesOnYouTube);