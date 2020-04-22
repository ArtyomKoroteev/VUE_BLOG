<template>
<Header></Header>
</template>

<script>
import Header from '../partials/Header.vue';

export default {
  name: 'Home',
  components: {
    Header,
  },
  data() {
    return {
      dataImg: '/images/home-image.jpg',
    };
  },
};
</script>
