<template>
  <header class="header">
    <div class="header__wrapper">
      <div class="header__logo">
        <a href="/">
          <img src="images/CoolBlog.svg" alt="cool blog">
        </a>
      </div>
      <Auth></Auth>
    </div>
  </header>
</template>

<script>
import Auth from '../auth/Auth.vue';

export default {
  name: 'Header',
  components: {
    Auth,
  },
};
</script>
