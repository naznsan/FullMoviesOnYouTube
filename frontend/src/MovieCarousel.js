import React, {Component} from "react";
import {withStyles} from "@material-ui/styles";
import axios from "axios";
import MovieDisplay from "./MovieDisplay";

const styles = {
    MovieCarousel: {
        // backgroundColor: "white",
        width: "80%",
        margin: "2em auto",
        padding: "1em 2em",
        display: "flex",
        flexDirection: "column",
    },
    carouselTitle: {
        alignSelf: "flex-start",
        color: "white",
    },
    carousel: {
        // border: "1px solid blue",
        alignSelf: "center",
        width: "100%",
        height: "25em",
        display: "flex",
        overflow: "auto",
        justifyContent: "flex-start",
        alignItems: "center",
    }
}

class MovieCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
        }
    }
    render() {
        const {classes, title} = this.props;
        const {movies} = this.state;
        return (
            <div className={classes.MovieCarousel}>
                <h2 className={classes.carouselTitle}>{title}</h2>
                <div className={classes.carousel}>
                    {movies.map(movie => (
                        <MovieDisplay title={movie.title} url={movie.url} />
                    ))}
                </div>
            </div>
        )
    }

    componentDidMount() {
        axios.get("http://localhost:3001/movies")
            .then(res => {
                this.setState({
                    movies: res.data,
                })
            })
                .catch(err => {
                    console.log("Error during GET: " + err.message);
                })
    }
}

export default withStyles(styles)(MovieCarousel);