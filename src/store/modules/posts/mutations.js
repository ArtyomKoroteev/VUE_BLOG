export default {
  setPosts(state, posts) {
    state.posts = posts.data;
    state.meta = posts.meta;
  },
};
