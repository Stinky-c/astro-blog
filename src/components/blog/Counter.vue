<script setup>
import { useStore } from "@nanostores/vue";
import { $counter } from "../../stores/blog";

const counter = useStore($counter);
</script>
<template>
  <button class="btn" @click="$counter.set($counter.get() + 1)">
    {{ counter }}
  </button>
</template>
