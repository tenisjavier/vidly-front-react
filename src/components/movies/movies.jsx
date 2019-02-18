// @desc   MainParent    Movie component that gets data from the store
// returns  A <MovieTable> Component
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import MovieTable from "./movieTable";
import ListGroup from "../common/listGroup";
import {
    getMovies,
    getMoviesByGenre,
    orderMovies
} from "../../store/actions/movieActions";
import { getGenres } from "../../store/actions/genresActions";

class Movies extends Component {
    state = {
        selectedGenre: { _id: "", name: "All Genres" },
        dataReceived: false
    };

    componentDidMount = async () => {
        await this.props.getMovies();
        await this.props.getGenres();
        this.setState({ dataReceived: true });
    };

    handleGenreSelect = genre => {
        genre._id && genre._id !== ""
            ? this.props.getMoviesByGenre(genre._id)
            : this.props.getMovies();
        this.setState({ selectedGenre: genre });
    };

    handleSort = column => {
        this.props.orderMovies(column);
    };

    renderLoader() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <img
                        src="https://loading.io/spinners/eclipse/lg.ring-loading-gif.gif"
                        alt="loader"
                    />
                </div>
            </div>
        );
    }

    render() {
        if (!this.state.dataReceived) return this.renderLoader();

        let { genres } = this.props;
        return (
            <div className="row">
                <div className="col-md-3">
                    {
                        <ListGroup
                            items={genres}
                            selectedItem={this.state.selectedGenre}
                            onItemSelect={this.handleGenreSelect}
                        />
                    }
                </div>
                <div className="col-md-9">
                    <MovieTable onSort={this.handleSort} />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    let genres = [];
    if (!_.isEmpty(state.genres)) {
        genres = [{ _id: "", name: "All Genres" }, ...state.genres];
    }
    return {
        genres: genres
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getMovies: () => dispatch(getMovies()),
        getMoviesByGenre: genreId => dispatch(getMoviesByGenre(genreId)),
        orderMovies: column => dispatch(orderMovies(column)),
        getGenres: () => dispatch(getGenres())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies);
