import App, {Container} from 'next/app'
import Head from 'next/head'
import React from 'react'
import withReduxStore from '../lib/with-redux-store'
import { Provider } from 'react-redux'
import { PageLoader } from '../containers'
import '../index.scss';

class MyApp extends App {
    render () {
        const {Component, pageProps, reduxStore} = this.props;
        return <Container>
            <Head>
                <title>Lition</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <PageLoader store={reduxStore} />
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        </Container>
    }
}

export default withReduxStore(MyApp)