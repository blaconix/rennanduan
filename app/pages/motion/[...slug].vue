<script setup>
const route = useRoute()

const { locale } = useI18n()
const { data: project } = await useAsyncData(`motion-post-${route.path}`, () => queryCollection(`motion_${locale.value}`).path(locale.value === 'en' ? `/en/${route.path.substring(1).replace('en/', '')}` : route.path).first(), {
  watch: [locale, route],
})

useSeoMeta({
  title: project.value?.title,
  ogTitle: project.value?.title,
  description: project.value?.synopsis,
  ogDescription: project.value?.synopsis,
})
</script>

<template>
  <UContainer>
    <UCard v-if="project">
      <template #header>
        <h1 class="text-2xl font-bold">
          {{ project.title }}
        </h1>
      </template>

      <div>
        <div class="aspect-video">
          <iframe
            :src="`${project.directPlayUrl}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
          />
        </div>

        <ContentRenderer
          v-if="project.body"
          :value="project"
        />
      </div>
    </UCard>
  </UContainer>
</template>
