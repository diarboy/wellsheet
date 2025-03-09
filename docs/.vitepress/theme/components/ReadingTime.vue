<script setup>
import { ref, onMounted } from 'vue';
import { useData } from 'vitepress'

const { frontmatter, page } = useData()

const wordsPerMinute = 200;
const wordCount = ref(0);
const readingTime = ref("0 menit 0 detik");

const formattedDate = ref("");

onMounted(() => {

// Format tanggal agar lebih terbaca
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' });
};

if (frontmatter.value.date) {
  formattedDate.value = formatDate(frontmatter.value.date);
} else if (page.value.lastUpdated) {
  formattedDate.value = formatDate(page.value.lastUpdated);
}

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
      readingTime.value = `${minutes} min ${seconds} sec`;
    }
  }, 500); // Tunggu 500ms agar DOM selesai dimuat
});
</script>

<template>
 
 <!--  <p>⏳ {{ readingTime }} read</p> // normal buat backup --> 

  <div class="meta">
  <span>✍️ {{ frontmatter.author }}</span> |
  <span>📅 {{ formattedDate }}</span> <br>
  <span>🕛 {{ readingTime }} read</span> | ⏳ {{ wordCount }} words </br>

</div>
</template>

<style scoped>
.meta {
  font-size: 14px;
  color: gray;
}
</style>
