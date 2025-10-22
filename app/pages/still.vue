<script lang="ts" setup>
const { data } = await useFetch('https://picsum.photos/v2/list?page=2&limit=100')

const selectedImage = ref('')

const lightboxOpen = ref(false)
function openLightbox(url) {
  selectedImage.value = url
  lightboxOpen.value = true
}

// async function preloadImages(urls: string[]): Promise<void> {
//   await Promise.all(
//     urls.map(
//       src =>
//         new Promise<void>((resolve) => {
//           const img = new Image()
//           img.src = src
//           img.onload = img.onerror = () => resolve()
//         }),
//     ),
//   )
// }

// await preloadImages(data.value.map(d => d.download_url))
</script>

<template>
  <div>
    <UPageSection>
      <UPageColumns class="xl:columns-5">
        <Motion
          v-for="index in 40" :key="index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.05 * index }"
          :in-view-options="{ once: true }"
        >
          <img :src="data[index].download_url" @click="openLightbox(data[index].download_url)">
        </Motion>
      </UPageColumns>
    </UPageSection>

    <UModal v-model:open="lightboxOpen" class="dark bg-transparent" fullscreen :ui="{ overlay: 'bg-black/95', body: 'flex justify-center', header: 'sm:p-0 min-h-0' }">
      <template #body>
        <NuxtImg class="h-full object-contain" :src="selectedImage" />
      </template>
    </UModal>
  </div>
</template>

<style>

</style>
