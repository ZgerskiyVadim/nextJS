import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as postsActionCreators from './../actions/action_creators/posts';

import Header from '../components/Header'
import Button from '../components/Button'

class Index extends React.Component {
    static getInitialProps ({ reduxStore, req }) {
        const isServer = !!req
        // reduxStore.dispatch();
        return {}
    }

    componentDidMount () {
        this.props.actions.getPostsRequest();
    }

    render () {
        console.log('state', this.props.posts);
        return (
            <div>
                <Header />
                {this.props.posts ? this.props.posts : 'null'}
                <Button
                    href={'/'}
                    title={'some title'}
                />
                <style jsx global>{`
                    body {
                        margin: 0;
                    }
                `}</style>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    posts: state.Posts.posts.data.comment_status
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        ...postsActionCreators
    }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Index)
