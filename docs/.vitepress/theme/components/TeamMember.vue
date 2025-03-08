<template>
  <div class="team-member-card">
    <div class="avatar-container">
      <img :src="avatar" :alt="name" class="avatar" />
    </div>
    <h3 class="name">{{ name }}</h3>
    <p class="role">{{ role }}</p>
    
    <!-- Social Icons -->
    <div v-if="socials.length" class="socials">
      <a
        v-for="(social, index) in socials"
        :key="index"
        :href="social.url"
        target="_blank"
        rel="noopener"
        class="social-link"
      >
        <span :class="`icon-${social.icon}`"></span>
      </a>
    </div>

    <!-- Sponsor Link -->
    <div v-if="sponsor" class="sponsor">
      <a :href="sponsor.url" target="_blank" class="sponsor-link">
        {{ sponsor.name }}
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: { type: String, required: true },
  role: { type: String, required: true },
  avatar: { type: String, required: true },
  socials: { type: Array, default: () => [] },
  sponsor: { type: Object, default: null },
});
</script>

<style scoped>
.team-member-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.team-member-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.avatar-container {
  margin-bottom: 1.5rem;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #f0f0f0;
}

.name {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

.role {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.socials {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.social-link {
  font-size: 1.2rem;
  color: #333;
  transition: color 0.2s;
}

.social-link:hover {
  color: #007bff;
}

.sponsor {
  margin-top: 1rem;
  font-size: 0.9rem;
}

.sponsor-link {
  color: #007bff;
  text-decoration: none;
}

/* Icon styles (replace with actual icons) */
.icon-github::before { content: 'GitHub'; }
.icon-twitter::before { content: 'Twitter'; }
.icon-linkedin::before { content: 'LinkedIn'; }
</style>