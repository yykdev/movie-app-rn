import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({
    id,
    posterPhoto,
    backgroundPhoto,
    title,
    voteAvg,
    overview
}) => null;

DetailPresenter.propTypes = {
    id: PropTypes.number.isRequired,
    posterPhoto: PropTypes.string.isRequired,
    backgroundPhoto: PropTypes.string,
    title: PropTypes.string.isRequired,
    voteAvg: PropTypes.string,
    overview: PropTypes.string
};

export default DetailPresenter;
