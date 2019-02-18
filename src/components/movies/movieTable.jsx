// @desc    parent  Defines the columns for the movie data and returns a <Table>
import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { Link } from "react-router-dom";
import Table from "../common/table";
import { deleteMovie } from "../../store/actions/movieActions";

class MovieTable extends Component {
    // define columns and content overwrites the data of the cell. Key must be unique.
    state = {
        columns: [
            { key: "title", label: "Title" },
            { key: "genre.name", label: "Genre" },
            { key: "numberInStock", label: "number In Stock" }
        ]
    };

    deleteColumn = {
        key: "delete",
        content: movie => (
            <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => this.props.deleteMovie(movie)}
            >
                Delete
            </button>
        )
    };

    renderNewMovieButton() {
        if (this.props.auth._id) {
            return (
                <Link
                    to="/movies/new"
                    className="btn btn-primary"
                    style={{ marginBottom: 20 }}
                >
                    New Movie
                </Link>
            );
        } else {
            return (
                <div className="alert alert-danger" role="alert">
                    "To create a New Movie please Login. Only Admins can delete
                    a movie."
                </div>
            );
        }
    }

    renderTable(movies, columns) {
        const user = this.props.auth;
        let finalColumns = [...columns];

        if (user && user.isAdmin === true) {
            finalColumns.push(this.deleteColumn);
        }

        if (_.isEmpty(movies))
            return (
                <div id="movieTable">
                    {this.renderNewMovieButton()}
                    <h4>No hay Pelis :(</h4>
                </div>
            );
        return (
            <div id="movieTable">
                {this.renderNewMovieButton()}
                <Table
                    columns={finalColumns}
                    data={movies}
                    onSort={this.props.onSort}
                />
            </div>
        );
    }

    render() {
        const { movies } = this.props;
        const { columns } = this.state;
        return this.renderTable(movies, columns);
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies,
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        deleteMovie: movie => dispatch(deleteMovie(movie))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieTable);
