<script setup>
import { ref, onMounted } from 'vue';

const wordsPerMinute = 200;
const wordCount = ref(0);
const readingTime = ref("0 menit 0 detik");

onMounted(() => {
  setTimeout(() => {
    // Ambil semua teks dari halaman artikel
    const content = document.querySelector('.VPDoc')?.innerText || "";

    console.log("Konten halaman (dari DOM):", content); // Debugging log

    if (content) {
      const words = content.trim().split(/\s+/).length;
      wordCount.value = words;
      const totalSeconds = (words / wordsPerMinute) * 60;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = Math.round(totalSeconds % 60);
      readingTime.value = `${minutes} menit ${seconds} detik`;
    }
  }, 500); // Tunggu 500ms agar DOM selesai dimuat
});
</script>

<template>
  <p>⏳ Waktu baca: {{ readingTime }}</p>
</template>
