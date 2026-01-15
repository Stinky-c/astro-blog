<script setup>
import { ref } from "vue";
let value = ref(0);
</script>
<template>
  <button class="btn" @click="value++">{{ value }}</button>
</template>
