import { baseURL } from '@/api/api';
import { POSTS_URL } from '@/api/constants';

export default {
  fetchPosts(context) {
    fetch(`${baseURL}${POSTS_URL}`, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((posts) => {
        context.commit('setPosts', posts);
      })
      .catch((errors) => {
        throw new Error(errors);
      });
  },
};
