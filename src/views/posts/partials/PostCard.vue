<template>
  <article class="post-card">
    <a href="">
      <div class="post-card__inner">
        <div class="post-card__media">
          <img src="images/placeholder.gif" alt="image">
        </div>
        <div class="post-card__content">
          <h2 class="post-card__title">Test</h2>
          <div class="post-card__description">
            <p>test test test</p>
          </div>
        </div>
      </div>
    </a>
  </article>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    posts: Array,
  },
  data() {
    return {
      postsHolder: Array,
    };
  },
  mounted() {
    this.postsHolder = this.posts;
  },
};
</script>
