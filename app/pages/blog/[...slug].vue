<script setup lang="ts">
const route = useRoute()

const { locale, localeProperties } = useI18n()
const { data: page } = await useAsyncData(`blog-post-${route.path}`, () => queryCollection(`blog_${locale.value}`).path(locale.value === 'en' ? `/en/${route.path.substring(1).replace('en/', '')}` : route.path).first(), {
  watch: [locale, route],
})

useSeoMeta({
  title: page.value?.title,
  ogTitle: page.value?.title,
  description: page.value?.description,
  ogDescription: page.value?.description,
})

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString(localeProperties.value.language, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
  <UContainer class="relative min-h-screen">
    <UPage v-if="page">
      <div class="flex flex-col gap-3 mt-8">
        <div class="flex text-xs text-muted items-center justify-center gap-2">
          <span v-if="page.date">
            {{ formatDate(page.date) }}
          </span>
        </div>

        <h1 class="text-4xl text-center font-medium max-w-3xl mx-auto mt-4">
          {{ page.title }}
        </h1>
        <p class="text-muted text-center max-w-2xl mx-auto">
          {{ page.description }}
        </p>
      </div>
      <UPageBody class="max-w-3xl mx-auto">
        <ContentRenderer
          v-if="page.body"
          :value="page"
        />
      </UPageBody>
    </UPage>
  </UContainer>
</template>
