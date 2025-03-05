<script setup>
import { computed, watch } from 'vue';
import { useData } from 'vitepress';

const wordsPerMinute = 200;
const { page } = useData();

// Debug: Cetak isi halaman di console browser
watch(() => page.value.content, (newContent) => {
  console.log("Konten halaman:", newContent);
});

// Menghitung jumlah kata
const wordCount = computed(() => {
  if (!page.value.content) return 0;
  return page.value.content.trim().split(/\s+/).length;
});

// Menghitung waktu baca
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
