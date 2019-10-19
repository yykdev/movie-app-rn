import React from "react";
import PropTypes from "prop-types";
import { Text } from "react-native";
import DetailPresenter from "./DetailPresenter";
import { movies, tv } from "../../api";

export default class DetailContainer extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam("title")
        };
    };

    constructor(props) {
        super(props);
        const {
            navigation: {
                state: {
                    params: {
                        isMovie,
                        id,
                        posterPhoto,
                        backgroundPhoto,
                        title,
                        voteAvg,
                        overview
                    }
                }
            }
        } = props;
        this.state = {
            isMovie,
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            loading: true
        };
    }

    async componentDidMount() {
        const { isMovie, id } = this.state;
        let error, genres, overview, status, date, backgroundPhoto;
        try {
            if (isMovie) {
                ({
                    data: {
                        overview,
                        status,
                        genres,
                        release_date: date,
                        backdrop_path: backgroundPhoto
                    }
                } = await movies.getMovie(id));
            } else {
                ({
                    data: {
                        overview,
                        status,
                        genres,
                        first_air_date: date,
                        backdrop_path: backgroundPhoto
                    }
                } = await tv.getShow(id));
            }
        } catch {
        } finally {
            this.setState({
                loading: false,
                genres,
                backgroundPhoto,
                overview,
                status,
                date
            });
        }
    }

    render() {
        const {
            isMovie,
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            loading,
            status,
            date,
            genres
        } = this.state;
        return (
            <DetailPresenter
                isMovie={isMovie}
                id={id}
                posterPhoto={posterPhoto}
                backgroundPhoto={backgroundPhoto}
                title={title}
                voteAvg={voteAvg}
                overview={overview}
                loading={loading}
                status={status}
                date={date}
                genres={genres}
            />
        );
    }
}
