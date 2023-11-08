<template>
  <div class="pagination">
    <button @click="prev" :disabled="currentPage === 1">上一页</button>
    <span>第 {{ currentPage }} 页，共 {{ totalPages }} 页</span>
    <button @click="next" :disabled="currentPage === totalPages">下一页</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  props: {
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    }
  },
  setup(props) {
    const currentPage = ref(1);
    const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

    const next = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    const prev = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    return {
      currentPage,
      totalPages,
      next,
      prev
    };
  }
};
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.pagination button {
  margin: 0 10px;
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
}

.pagination button:disabled {
  background-color: #ccc;
}
</style>