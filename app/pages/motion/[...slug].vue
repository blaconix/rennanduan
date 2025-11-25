<script setup>
const route = useRoute()

const { locale } = useI18n()
const { data: project } = await useAsyncData(`motion-post-${route.path}`, () => queryCollection(`motion_${locale.value}`).path(locale.value === 'en' ? `/en/${route.path.substring(1)}` : route.path).first(), {
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

      <div class="space-y-8">
        <div class="aspect-video">
          <iframe
            :src="`${project.directPlayUrl}?autoplay=false&loop=false&muted=false&preload=true&responsive=true`"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
          />
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-2">
            {{ $t('synopsis') }}
          </h2>
          <p>{{ project.synopsis }}</p>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2">
            {{ $t('credits') }}
          </h2>
          <ul>
            <li v-for="credit in project.credits" :key="credit.role">
              <strong>{{ credit.role }}:</strong> {{ credit.name }}
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-2">
            {{ $t('info') }}
          </h2>
          <div class="space-y-4">
            <div v-for="info in project.info" :key="info.title">
              <h3 class="font-semibold">
                {{ info.title }}
              </h3>
              <p>{{ info.text }}</p>
            </div>
            <div class="flex gap-2">
              <UButton v-for="(link, index) in project.links" :key="index" v-bind="link" />
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
