<script setup>
import { useData } from 'vitepress'
import { computed } from 'vue'

const { frontmatter, page } = useData()

// Estimasi waktu baca (250 kata per menit)
const estimatedReadingTime = computed(() => {
  const wordsPerMinute = 250
  const words = page.value.content?.split(/\s+/).length || 0
  return Math.ceil(words / wordsPerMinute)
})

// URL untuk share
const shareUrl = encodeURIComponent(window.location.href)
const shareTitle = encodeURIComponent(frontmatter.value.title)
</script>

<template>
  <div class="blog">
    <h1>{{ frontmatter.title }}</h1>
    
    <div class="meta">
      <span>📅 {{ frontmatter.date }}</span> |  
      <span>✍️ {{ frontmatter.author }}</span> |  
      <span>⏳ {{ estimatedReadingTime }} min read</span>
    </div>

    <div v-if="frontmatter.badge" class="badge">
      {{ frontmatter.badge }}
    </div>

    <img :src="frontmatter.image" :alt="frontmatter.title" class="cover-image" v-if="frontmatter.image" />

    <p class="description">{{ frontmatter.description }}</p>

    <div class="tags">
      <span v-for="tag in frontmatter.tags" :key="tag" class="tag">#{{ tag }}</span>
    </div>

    <slot />

    <div class="share">
      <p>Bagikan artikel ini:</p>
      <a :href="`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`" target="_blank">Facebook</a>
      <a :href="`https://twitter.com/intent/tweet?text=${shareTitle}&url=${shareUrl}`" target="_blank">Twitter</a>
      <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&title=${shareTitle}`" target="_blank">LinkedIn</a>
      <button @click="navigator.clipboard.writeText(window.location.href)">Copy Link</button>
    </div>
  </div>
</template>

<style scoped>
.blog {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}
.meta {
  font-size: 14px;
  color: gray;
}
.badge {
  background: orange;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  display: inline-block;
  margin-top: 5px;
}
.cover-image {
  width: 100%;
  border-radius: 8px;
  margin: 20px 0;
}
.description {
  font-size: 18px;
  font-weight: 500;
}
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
.share {
  margin-top: 20px;
}
.share a, .share button {
  margin-right: 10px;
  text-decoration: none;
  background: #0073e6;
  color: white;
  padding: 5px 10px;
  border-radius: 5px;
  display: inline-block;
  font-size: 14px;
}
.share button {
  border: none;
  cursor: pointer;
}
</style>
