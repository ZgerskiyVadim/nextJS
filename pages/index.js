import React from 'react'
import ReactHtmlParser from 'react-html-parser';
import {connect} from 'react-redux'
import { performGetPostsData } from '../action_performers/posts';
import { performSetupLoaderVisibility } from '../action_performers/app';

import { Header, Button } from '../components'
import '../styles/pages/styleIndex.scss';

class Index extends React.Component {

    static getInitialProps ({ reduxStore, req }) {
        const isServer = !!req
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => (resolve({hey: "ssssasd"})), 0);
        });
        // reduxStore.dispatch();
        return promise
    }

    componentDidMount () {
        performGetPostsData();
    }

    componentDidUpdate(prevProps) {
        const { loading } = this.props;

        if (prevProps.loading !== loading) {
            performSetupLoaderVisibility('posts', loading);
        }
    }

    render () {
        console.log('posts', this.props.posts);
        return (
            <div>
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
                                            ReactHtmlParser(this.props.error ? this.props.error.status : this.props.posts && this.props.posts.content && this.props.posts.content.rendered)
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
    static mapStateToProps = (state) => ({
        posts: state.Posts.posts.data,
        error: state.Posts.posts.error,
        loading: state.Posts.posts.loading
    })
}

export default connect(Index.mapStateToProps)(Index)
