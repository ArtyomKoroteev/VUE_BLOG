<template>
  <article class="post-card">
    <a href="">
      <div class="post-card__inner">
        <div class="post-card__media">
          <img src="images/placeholder.gif" alt="image">
        </div>
        <div class="post-card__content">
          <h2 class="post-card__title">{{postsHolder.title}}</h2>
          <div class="post-card__description">
            <p>{{postsHolder.body}}</p>
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
    post: Object,
  },
  data() {
    return {
      postsHolder: Object,
    };
  },
  mounted() {
    this.postsHolder = this.post;
  },
};
</script>
