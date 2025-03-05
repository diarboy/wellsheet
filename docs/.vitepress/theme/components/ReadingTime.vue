<script setup>
import { ref, onMounted } from 'vue';
import { useData } from 'vitepress';

const wordsPerMinute = 200;
const { page } = useData();
const wordCount = ref(0);
const readingTime = ref("0 menit 0 detik");

onMounted(() => {
  if (page.value.content) {
    const words = page.value.content.trim().split(/\s+/).length;
    wordCount.value = words;
    const totalSeconds = (words / wordsPerMinute) * 60;
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = Math.round(totalSeconds % 60);
    readingTime.value = `${minutes} menit ${seconds} detik`;
  }
});
</script>

<template>
  <p>⏳ Waktu baca: {{ readingTime }}</p>
</template>
