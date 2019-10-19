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

    render() {
        const {
            id,
            posterPhoto,
            backgroundPhoto,
            title,
            voteAvg,
            overview,
            loading
        } = this.state;
        return (
            <DetailPresenter
                id={id}
                posterPhoto={posterPhoto}
                backgroundPhoto={backgroundPhoto}
                title={title}
                voteAvg={voteAvg}
                overview={overview}
                loading={loading}
            />
        );
    }
}
