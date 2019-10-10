import React from "react";
import TVPresenter from "./TVPresenter";

export default class TVContainer extends React.Component {
    state = {
        loading: true
    };
    render() {
        const { loading } = this.state;
        return <TVPresenter loading={loading} />;
    }
}
