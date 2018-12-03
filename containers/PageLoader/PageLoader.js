import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Loader } from '../../components';
import './PageLoader.scss';
import Router from "next/router";
import { performSetupLoaderVisibility } from '../../action_performers/app';

const pageLoading = Symbol('page-loading');

export class PageLoader extends Component {
    static mapStateToProps({ App }) {
        const pageLoaders = App.loader.data;
        return {
            shouldShowLoader: [...Object.getOwnPropertySymbols(pageLoaders), ...Object.keys(pageLoaders)]
                .map(key => pageLoaders[key])
                .reduce((loading, next) => loading || next, false)
        };
    }

    constructor() {
        super();
        this.pageLoading = pageLoading;

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange() {
        Router.events.on('routeChangeStart', () => performSetupLoaderVisibility(this.pageLoading, true));
        Router.events.on('routeChangeComplete', () => performSetupLoaderVisibility(this.pageLoading, false));
    }

    render() {
        this.handlePageChange();

        const { shouldShowLoader } = this.props;
        console.log('shouldShowLoader', shouldShowLoader);
        return (
            <div className="page-loader">
                <Loader show={shouldShowLoader} />
            </div>
        );
    }
}

PageLoader.propTypes = {
    shouldShowLoader: PropTypes.bool
};
PageLoader.defaultProps = {
    shouldShowLoader: false
};

export default connect(PageLoader.mapStateToProps)(PageLoader);
