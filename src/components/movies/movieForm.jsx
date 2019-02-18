import React from "react";
import { connect } from "react-redux";
import Joi from "joi-browser";
import _ from "lodash";
import Form from "../common/form";
import { getGenres } from "../../store/actions/genresActions";
import { saveMovie } from "../../store/actions/movieActions";

class MovieForm extends Form {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        },
        genres: [],
        errors: {}
    };

    schema = {
        _id: Joi.string(),
        title: Joi.string()
            .required()
            .label("Title"),
        genreId: Joi.string()
            .required()
            .label("Genre"),
        numberInStock: Joi.number()
            .required()
            .min(0)
            .max(100)
            .label("Name"),
        dailyRentalRate: Joi.number()
            .required()
            .min(1)
            .max(10)
    };

    componentDidMount() {
        this.props.getGenres();
    }

    doSubmit = () => {
        this.props.saveMovie(this.state.data);
        this.props.history.push("/");
    };

    render() {
        //const genres = this.props.genres;
        return (
            <div>
                <h1>Movies Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("title", "Title")}
                    {this.renderSelect("genreId", "Genre", this.props.genres)}
                    {this.renderInput("numberInStock", "Number in Stock")}
                    {this.renderInput("dailyRentalRate", "Rate")}
                    {this.renderButton("Save")}
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    let genres = [];
    if (!_.isEmpty(state.genres)) {
        genres = [...state.genres];
    }
    return {
        genres: genres,
        auth: state.auth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getGenres: () => dispatch(getGenres()),
        saveMovie: movie => dispatch(saveMovie(movie))
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MovieForm);
