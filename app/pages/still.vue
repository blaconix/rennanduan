<script lang="ts" setup>
const { locale } = useI18n()
const { data: page } = await useAsyncData(`still-${locale.value}`, () => queryCollection(`still_${locale.value}`).first(), {
  watch: [locale],
})

useSeoMeta({
  title: page.value?.seo.title,
  ogTitle: page.value?.seo.title,
  description: page.value?.seo.description,
  ogDescription: page.value?.seo.description,
})

const selectedImage = ref(page.value?.stills[0])
const imageIndex = computed(() => page.value?.stills.findIndex(s => s.src === selectedImage.value?.src) ?? 0)
const lightboxOpen = ref(false)
function openLightbox(image: any) {
  selectedImage.value = image
  lightboxOpen.value = true
}
</script>

<template>
  <div>
    <UPageSection>
      <div v-if="page" class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 auto-rows-[250px_150px] gap-8">
        <Motion
          v-for="(still, index) in page.stills"
          :key="index"
          :class="[still.cols, still.rows]"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.05 * index }"
          :in-view-options="{ once: true }"
        >
          <NuxtImg class="w-full h-full hover:scale-105 transition-transform object-cover" :width="400" :src="still.src" :alt="still.alt" preload @click="openLightbox(still)" />
        </Motion>
      </div>
    </UPageSection>

    <UModal v-model:open="lightboxOpen" class="dark h-full sm:max-h-[calc(100dvh-2rem)] max-w-full bg-transparent ring-0" :ui="{ overlay: 'bg-black/95' }">
      <template #content>
        <UCarousel v-slot="{ item }" :start-index="imageIndex" :items="page?.stills" class="h-full px-8" :ui="{ viewport: 'h-full', container: 'h-full', item: 'h-full' }">
          <img :src="item.src" :alt="item.alt" class="object-contain h-full mx-auto">
        </UCarousel>
        <UButton variant="ghost" color="neutral" class="absolute top-0 right-0" icon="i-lucide-x" @click="lightboxOpen = false" />
      </template>
    </UModal>
  </div>
</template>
