<script setup lang="ts">
const { locale, setLocale } = useI18n()
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
  <UPageHero v-if="page" class="dark" :ui="{ container: 'py-12 sm:py-16', links: 'gap-16 lg:gap-24' }">
    <template #links>
      <div class="flex flex-col group">
        <UPageCard class="motion overflow-hidden" square variant="naked" :to="$localePath('/motion')">
          <img :width="500" class="max-w-[80vw] lg:max-w-md transition-transform group-hover:scale-110" :src="page.hero.motion.src" :alt="page.hero.motion.alt">
        </UPageCard>
        <NuxtLink :to="$localePath('/motion')" class="mt-4 uppercase text-lg tracking-wider font-medium">
          {{ $t('motion') }}
        </NuxtLink>
      </div>
      <!-- <div class="absolute -top-4 -left-4 w-4 h-4 bg-black" /> -->
      <!-- <div class="absolute -bottom-4 -right-4 w-4 h-4 bg-black" /> -->
      <!-- <div class="absolute -top-4 -left-4 w-full h-full border-t-2 border-l border-dashed border-default" /> -->
      <!-- <div class="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-black" /> -->
      <!-- <div class="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-black" /> -->
      <!-- <div class="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-dashed border-default" /> -->
      <div class="flex flex-col transition-transform hover:scale-105">
        <UPageCard square variant="naked" :to="$localePath('/still')">
          <NuxtImg :width="500" class="max-w-[80vw] lg:max-w-md" :src="page.hero.still.src" :alt="page.hero.still.alt" />
        </UPageCard>
        <NuxtLink :to="$localePath('/still')" class="mt-4 uppercase text-lg tracking-wider font-medium">
          {{ $t('still') }}
        </NuxtLink>
      </div>
    </template>

    <template #bottom>
      <div class="flex justify-center mt-4">
        <UButton
          class="tracking-wider font-cn"
          color="neutral"
          variant="outline"
          :label="$t('lang')"
          size="sm"
          @click="setLocale(locale === 'en' ? 'zh_cn' : 'en')"
        />
      </div>
    </template>
  </UPageHero>
</template>
