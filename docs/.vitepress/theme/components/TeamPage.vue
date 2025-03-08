<template>
  <div class="team-page">
    <h1>{{ title }}</h1>
    <p class="description">{{ description }}</p>

    <!-- Core Team Section -->
    <section v-if="coreTeam.length" class="team-section">
      <h2>Core Team</h2>
      <div class="team-grid">
        <TeamMember
          v-for="(member, index) in coreTeam"
          :key="index"
          :name="member.name"
          :role="member.role"
          :avatar="member.avatar"
          :socials="member.socials"
          :sponsor="member.sponsor"
        />
      </div>
    </section>

    <!-- Members Section -->
    <section v-if="members.length" class="team-section">
      <h2>Members</h2>
      <div class="team-grid">
        <TeamMember
          v-for="(member, index) in members"
          :key="index"
          :name="member.name"
          :role="member.role"
          :avatar="member.avatar"
          :socials="member.socials"
          :sponsor="member.sponsor"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TeamMember from './TeamMember.vue';

const title = ref('Our Team');
const description = ref('Meet the people behind this project.');

const coreTeam = ref([
  {
    name: 'John Doe',
    role: 'Project Lead',
    avatar: 'https://via.placeholder.com/150',
    socials: [
      { icon: 'github', url: 'https://github.com/johndoe' },
      { icon: 'twitter', url: 'https://twitter.com/johndoe' },
    ],
    sponsor: { name: 'Sponsor A', url: 'https://sponsor-a.com' },
  },
]);

const members = ref([
  {
    name: 'Alice Johnson',
    role: 'Developer',
    avatar: 'https://via.placeholder.com/150',
    socials: [
      { icon: 'github', url: 'https://github.com/alicejohnson' },
    ],
    sponsor: null,
  },
]);
</script>

<style scoped>
.team-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.team-page h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 2rem;
}

.team-section {
  margin-top: 3rem;
}

.team-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}
</style>