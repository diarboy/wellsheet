<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';

// Rata-rata kecepatan membaca (200 kata per menit)
const wordsPerMinute = 200;
const { page } = useData();

// Menghitung jumlah kata dalam artikel
const wordCount = computed(() => {
  if (!page.value.content) return 0;
  return page.value.content.split(/\s+/).filter(word => word.length > 0).length;
});

// Menghitung waktu baca dalam menit dan detik
const readingTime = computed(() => {
  const totalSeconds = (wordCount.value / wordsPerMinute) * 60;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.round(totalSeconds % 60);
  return `${minutes} menit ${seconds} detik`;
});
</script>

<template>
  <p>⏳ Waktu baca: {{ readingTime }}</p>
</template>
