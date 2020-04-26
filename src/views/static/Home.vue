<template>
  <div class="page page__overflow">
    <Header></Header>
    <HomePageInfo></HomePageInfo>
  </div>
</template>

<script>
import Header from '@/views/partials/Header.vue';
import HomePageInfo from '@/views/partials/HomePageInfo.vue';

export default {
  name: 'Home',
  components: {
    Header,
    HomePageInfo,
  },
  data() {
    return {
      dataImg: '/images/home-image.jpg',
    };
  },
};
</script>
