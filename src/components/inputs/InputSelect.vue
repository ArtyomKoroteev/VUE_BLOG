<template>
<div class="filter__wrapper">
  <VueSelect
      :id="attributes.id"
      :name="attributes.name"
      :options="attributes.options"
      :searchable="true"
      :placeholder="attributes.placeholder"
      @input="changeHandler"
  ></VueSelect>
</div>
</template>

<script>
import VueSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  name: 'InputSelect',
  props: {
    options: Array,
    id: String,
    name: String,
    label: String,
    placeholder: String,
  },
  components: {
    VueSelect,
  },
  data() {
    return {
      attributes: {
        id: '',
        name: '',
        label: '',
        placeholder: '',
        options: [],
      },
    };
  },
  methods: {
    changeHandler() {
      this.$emit('inputSelect');
    },
  },
  created() {
    this.attributes = {
      id: this.id || this.name || '',
      name: this.name || '',
      label: this.label || '',
      options: this.options || [],
      placeholder: this.placeholder || '',
    };
  },
};
</script>
