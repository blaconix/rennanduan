<script setup lang="ts">
const { locale } = useI18n()
const { data: page } = await useAsyncData('index', async () => queryCollection(`index_${locale.value}`).first(), {
  watch: [locale],
})

useSeoMeta({
  title: page.value?.seo.title,
  ogTitle: page.value?.seo.title,
  description: page.value?.seo.description,
  ogDescription: page.value?.seo.description,
})
</script>

<template>
  <UPageHero v-if="page" :ui="{ links: 'gap-24' }">
    <template #links>
      <UButton square class="dark transition-all hover:scale-105 group flex-col text-lg tracking-wider" :to="$localePath('/motion')">
        <div class="relative">
          <img class="max-w-md" :src="page.hero.motion.src" :alt="page.hero.motion.alt">
          <div class="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-default" />
          <!-- <div class="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-black" /> -->
          <!-- <div class="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-black" /> -->
          <div class="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-default" />
        </div>
        <span class="mt-4 uppercase">{{ $t('motion') }}</span>
      </UButton>
      <UButton square class="dark transition-all hover:scale-105 group flex-col text-lg tracking-wider" :to="$localePath('/still')">
        <div class="relative">
          <img class="max-w-md" :src="page.hero.still.src" :alt="page.hero.still.alt">
          <div class="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-default" />
          <!-- <div class="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-black" /> -->
          <!-- <div class="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-black" /> -->
          <div class="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-default" />
        </div>
        <span class="mt-4 uppercase">{{ $t('still') }}</span>
      </UButton>
    </template>
  </UPageHero>
</template>
