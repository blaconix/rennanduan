<script lang="ts" setup>
const { data: page } = await useAsyncData('still', () => queryCollection('still').first())

useSeoMeta({
  title: page.value?.seo.title,
  ogTitle: page.value?.seo.title,
  description: page.value?.seo.description,
  ogDescription: page.value?.seo.description,
})

const selectedImage = ref('')

const lightboxOpen = ref(false)
function openLightbox(url: string) {
  selectedImage.value = url
  lightboxOpen.value = true
}
</script>

<template>
  <div>
    <UPageSection>
      <UPageColumns v-if="page" class="xl:columns-5">
        <Motion
          v-for="(still, index) in page.stills" :key="index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.05 * index }"
          :in-view-options="{ once: true }"
        >
          <NuxtImg class="w-full" :width="400" :src="still.src" :alt="still.alt" preload @click="openLightbox(still.src)" />
        </Motion>
      </UPageColumns>
    </UPageSection>

    <UModal v-model:open="lightboxOpen" class="dark bg-transparent" fullscreen :ui="{ overlay: 'bg-black/95', body: 'flex justify-center', header: 'sm:p-0 min-h-0' }">
      <template #body>
        <img class="h-full object-contain" :src="selectedImage">
      </template>
    </UModal>
  </div>
</template>
