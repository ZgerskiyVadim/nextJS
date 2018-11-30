import axios from 'axios/index';
import { mainUrl } from '../../../constants';

export const getPosts = () => {
    return axios.get(`${mainUrl}/wp-json/wp/v2/posts`)
};