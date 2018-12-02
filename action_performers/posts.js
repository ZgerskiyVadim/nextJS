import {
    getPosts
} from '../services/api/postsAPI';

import { dispatcher } from '../store/index';

export function performGetPostsData() {
    dispatcher.dispatchPromise(getPosts, 'GET_POSTS_DATA', state => state.Posts.posts.loading);
}
