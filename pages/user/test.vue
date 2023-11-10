<template>
  <up-input
    placeholder="请输入内容"
    border="surround"
    v-model="value"
    @change="change"
  ></up-input>
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');

const change = (e) => {
  console.log('change', e);
};
</script>