<script setup lang="ts">
import { withBase, useData } from 'vitepress'

const { theme } = useData() // Tetap gunakan useData() dari VitePress
</script>

<template>
  <div class="NotFound">
    <p class="code code-small">{{ theme.notFound?.code ?? 'Ooops!' }}</p>
    <p class="code code-large">{{ theme.notFound?.code ?? "Sorry" }}</p>
    <p class="code code-small">{{ theme.notFound?.code ?? "We're" }}</p>
    <h1 class="title">{{ theme.notFound?.title ?? 'UNDER DEVELOPMENT' }}</h1>
    <div class="divider" />
    <blockquote class="quote">
      {{
        theme.notFound?.quote ??
        "But if you don't change your direction, and if you keep looking, you may end up where you are heading."
      }}
    </blockquote>

    <div class="action">
      <a
        class="link"
        :href="withBase('/')"
        :aria-label="theme.notFound?.linkLabel ?? 'Go to home'"
      >
        {{ theme.notFound?.linkText ?? 'Take me home' }}
      </a>
    </div>
  </div>
</template>

<style scoped>
.NotFound {
  padding: 20px 24px 40px;
  text-align: center;
}

@media (min-width: 768px) {
  .NotFound {
    padding: 40px 32px 90px;
  }
}

.code {
  line-height: 64px;
  font-size: 64px;
  font-weight: 600;
}

.code-large {
    font-size: 64px;
    line-height: 44px;
}

.code-small {
    font-size: 32px;
    line-height: 20px;
    letter-spacing: 2px;
    color: var(--vp-c-text-1);
}

.title {
  padding-top: 12px;
  letter-spacing: 2px;
  line-height: 20px;
  font-size: 20px;
  font-weight: 700;
}

.divider {
  margin: 24px auto 18px;
  width: 64px;
  height: 1px;
  background-color: var(--vp-c-divider);
}

.quote {
  margin: 0 auto;
  max-width: 256px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.action {
  padding-top: 20px;
}

.link {
  display: inline-block;
  border: 1px solid var(--vp-c-brand-1);
  border-radius: 16px;
  padding: 3px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition:
    border-color 0.25s,
    color 0.25s;
}

.link:hover {
  border-color: var(--vp-c-brand-2);
  color: var(--vp-c-brand-2);
}
</style>
