<script setup>
import { useData } from 'vitepress'
import { computed, onMounted, ref } from 'vue'

// Mengambil data dari VitePress
const { frontmatter } = useData()

// Estimasi waktu baca dalam menit & detik
const readingTime = ref({ minutes: 0, seconds: 0 })

onMounted(() => {
  const content = document.querySelector('.VPContent')?.innerText || ''
  const wordCount = content.split(/\s+/).length

  const wordsPerMinute = 250
  const totalMinutes = wordCount / wordsPerMinute
  const minutes = Math.floor(totalMinutes)
  const seconds = Math.round((totalMinutes - minutes) * 60)

  readingTime.value = { minutes, seconds }
})

// Membuat URL share yang valid
const shareUrl = computed(() =>
  typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''
)
const shareTitle = computed(() => encodeURIComponent(frontmatter.value.title || ''))
</script>

<template>
  <article class="blog">
    <!-- Judul Artikel -->
    <h1>{{ frontmatter.title }}</h1>

    <!-- Informasi Metadata -->
    <div class="meta">
      <span>📅 {{ frontmatter.date }}</span> |
      <span>✍️ {{ frontmatter.author }}</span> |
      <span>⏳ {{ readingTime.minutes }} min {{ readingTime.seconds }} sec read</span>
    </div>

    <!-- Badge (opsional) -->
    <div v-if="frontmatter.badge" class="badge">
      {{ frontmatter.badge }}
    </div>

    <!-- Gambar Cover (opsional) -->
    <img
      v-if="frontmatter.image"
      :src="frontmatter.image"
      :alt="frontmatter.title"
      class="cover-image"
    />

    <!-- Deskripsi Artikel -->
    <p class="description">{{ frontmatter.description }}</p>

    <!-- Tag Artikel -->
    <div v-if="frontmatter.tags" class="tags">
      <span v-for="tag in frontmatter.tags" :key="tag" class="tag">#{{ tag }}</span>
    </div>

    <!-- Konten Markdown -->
    <Content />

    <!-- Share Section -->
    <div class="share">
      <p>Bagikan artikel ini:</p>
      <a
        :href="`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`"
        target="_blank"
        aria-label="Bagikan ke Facebook"
      >
        Facebook
      </a>
      <a
        :href="`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`"
        target="_blank"
        aria-label="Bagikan ke Twitter"
      >
        Twitter
      </a>
      <a
        :href="`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`"
        target="_blank"
        aria-label="Bagikan ke LinkedIn"
      >
        LinkedIn
      </a>
      <button
        @click="navigator.clipboard.writeText(window.location.href)"
        aria-label="Salin tautan"
      >
        Copy Link
      </button>
    </div>
  </article>
</template>

<style scoped>
.blog {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

/* Metadata */
.meta {
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
}

/* Badge */
.badge {
  background: orange;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  display: inline-block;
  margin-bottom: 10px;
}

/* Cover Image */
.cover-image {
  width: 100%;
  border-radius: 8px;
  margin: 20px 0;
}

/* Deskripsi */
.description {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
}

/* Tags */
.tags {
  margin-top: 10px;
}
.tag {
  background: #f0f0f0;
  padding: 5px 10px;
  border-radius: 4px;
  margin-right: 5px;
  font-size: 14px;
}

/* Share Section */
.share {
  margin-top: 30px;
}
.share a, .share button {
  margin-right: 10px;
  text-decoration: none;
  background: #0073e6;
  color: white;
  padding: 6px 12px;
  border-radius: 5px;
  display: inline-block;
  font-size: 14px;
}
.share button {
  border: none;
  cursor: pointer;
}

/* Gunakan CSS bawaan untuk Markdown */
h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
}

p {
  line-height: 1.6;
}

a {
  color: #0073e6;
}
</style>
