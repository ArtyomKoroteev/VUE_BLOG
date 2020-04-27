<template>
  <nav class="pagination">
    <ul class="pagination__list">
      <li class="pagination__item"
          v-for="page in total"
          :key="page">
        <a class="pagination__link"
           :class="{ 'pagination__item-current' : current === page }"
           href="#">{{page}}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'PostsPagination',
  props: {
    metaData: Object,
  },
  data() {
    return {
      total: this.metaData.totalPages,
      current: this.metaData.currentPage,
    };
  },
  watch: {
    metaData(newValue) {
      if (newValue) {
        this.total = this.metaData.totalPages;
        this.current = this.metaData.currentPage;
      }
    },
  },
};
</script>
