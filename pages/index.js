import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import Head from 'next/head'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as postsActionCreators from './../actions/action_creators/posts';

import Header from '../components/Header'
import Button from '../components/Button'
import '../styles/pages/styleIndex.scss';

class Index extends React.Component {

    static getInitialProps ({ reduxStore, req }) {
        const isServer = !!req
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => (resolve({hey: "ssssasd"})), 5000);
        });
        // reduxStore.dispatch();
        return promise
    }

    componentDidMount () {
        this.props.actions.getPostsRequest();
    }

    render () {
        console.log('heY', this.props.hey);
        console.log('state', this.props.posts);
        return (
            <div>
                <Head>
                    <title>Lition</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Header />
                <section className='section'>
                    <span>{this.props.hey}</span>
                    <div className="container">
                        <div className="row">
                            <div className="column head-top-text">
                                <div className="content-wrapper">

                                    <div className="column-content">
                                        <h1>
                                            <span>
                                                Kunden und Erzeuger.
                                                <br/>
                                                Direkt verbunden.
                                            </span>
                                        </h1>
                                    </div>

                                    <div className="column-content">
                                        <h3>
                                            <span>
                                                Direktstrom durch Blockchain*.
                                            </span>
                                        </h3>
                                    </div>

                                    <div className="column-content head-h4-text">
                                        {
                                            ReactHtmlParser(this.props.posts.content && this.props.posts.content.rendered)
                                        }
                                        {/*<div>*/}
                                            {/*<h4>*/}
                                                {/*<span>*/}
                                                    {/*100% Ökostrom&nbsp;zu günstigen Preisen. Die Lition&nbsp;Energiebörse vernetzt Konsumenten und Erzeuger auf direktem Wege.*/}
                                                {/*</span>*/}
                                            {/*</h4>*/}
                                            {/*<h4>*/}
                                                {/*<span>*/}
                                                    {/*Dein Strom - Dein Kraftwerk - Du hast die Wahl!*/}
                                                    {/*<br/>*/}
                                                    {/*Revolutioniere mit uns den Energiemarkt!*/}
                                                {/*</span>*/}
                                            {/*</h4>*/}
                                        {/*</div>*/}
                                    </div>

                                    <div className="column-content content-button">
                                        <Button
                                            href={'http://www.lition.de/tarif'}
                                            title={'Unser Tarif'}
                                        />
                                    </div>

                                </div>
                            </div>

                            <div className="ce-image" data-align="left">
                                <img className="is-content" src="https://www.lition.de/wp-content/uploads/2018/03/180327-den-stage-illusration@3x.png" alt="180327-den-stage-illusration@3x"/>
                            </div>
                        </div>
                    </div>
                </section>
                {/*<section className={'section'}>*/}
                {/*{this.props.posts ? this.props.posts : 'null'}*/}
                {/*<Button*/}
                {/*href={'/'}*/}
                {/*title={'some title'}*/}
                {/*/>*/}
                {/*</section>*/}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.Posts.posts.data
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        ...postsActionCreators
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)
