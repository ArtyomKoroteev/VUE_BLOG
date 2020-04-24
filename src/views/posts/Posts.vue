<template>
  <div class="page">
    <Header></Header>
    <div class="container container__middle">
      <div class="head__wrapper">
        <div class="head__container">
          <strong class="head__sub-text">JOURNAL</strong>
          <h1 class="head__text head__text-fullwidth">
            Stay tuned to our articles and meet our new projects.</h1>
        </div>
        <div class="head__container-image head__container-image--fullwidth">
          <div class="fullwidth">
            <picture>
              <img src="images/post-image.jpg" alt="#">
            </picture>
          </div>
        </div>
        <div class="post-container">
          <PostCard v-for="item in items" :posts="item" :key="item"></PostCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../partials/Header.vue';
import PostCard from './partials/PostCard.vue';

export default {
  name: 'Posts',
  components: {
    Header,
    PostCard,
  },
  data() {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
  },
};
</script>
