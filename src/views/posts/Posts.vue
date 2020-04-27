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
        <div class="filter__container">
          <InputSelect
            :id="'posts_quantity'"
            :name="'posts_quantity'"
            :placeholder="'Posts quantity to show'"
            :options="[10, 15, 20, 25]"
            @inputSelect="postsQuantityHandler"
          ></InputSelect>
        </div>
        <div class="post-container">
          <PostCard v-for="post in allPosts" :post="post" :key="post.id"></PostCard>
        </div>
        <div class="pagination__container">
          <PostsPagination :metaData="meta"></PostsPagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/views/partials/Header.vue';
import PostCard from '@/views/posts/partials/PostCard.vue';
import InputSelect from '@/components/inputs/InputSelect.vue';
import PostsPagination from '@/views/posts/partials/PostsPagination.vue';

export default {
  name: 'Posts',
  components: {
    Header,
    PostCard,
    InputSelect,
    PostsPagination,
  },
  methods: {
    postsQuantityHandler() {
      console.log('test');
    },
  },
  computed: {
    allPosts() {
      return this.$store.getters['posts/getAllPosts'];
    },
    meta() {
      return this.$store.getters['posts/getMeta'];
    },
    // defaultMeta() {
    //   return this.$store.getters['posts/getDefaultMeta'];
    // },
  },
  mounted() {
    this.$store.dispatch('posts/fetchPosts');
  },
};
</script>
