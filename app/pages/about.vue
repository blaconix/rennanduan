<script setup lang="ts">
const { locale } = useI18n()
const { data: page } = await useAsyncData(`about-${locale.value}`, async () => queryCollection(`about_${locale.value}`).first(), {
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
  <UPageSection>
    <UPageGrid v-if="page" class="lg:grid-cols-2 lg:gap-8">
      <div class="flex flex-col items-center text-center">
        <NuxtImg
          :src="page.portrait.src"
          :alt="page.portrait.alt"
          class="mb-8"
          :width="250"
        />

        <p class="text-gray-500 dark:text-gray-400 whitespace-break-spaces">
          {{ page.subtitle }}
        </p>
      </div>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            {{ page.title }}
          </h2>
        </template>

        <p class="mb-4 whitespace-break-spaces">
          {{ page.bio }}
        </p>

        <template #footer>
          <div class="flex justify-center space-x-4">
            <UButton v-for="(link, index) in page.links" :key="index" v-bind="link" />
          </div>
        </template>
      </UCard>
    </UPageGrid>
  </UPageSection>
</template>
