<script setup>
import { useStore } from "@nanostores/vue";
import { $counter } from "../../stores/blog";

const counter = useStore($counter);
</script>
<template>
  <button class="btn" @click="$counter.set(counter++)">{{ counter }}</button>
</template>
