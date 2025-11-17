<script lang="ts" setup>
const { locale } = useI18n()
const { data: page } = await useAsyncData('blog-page', async () => queryCollection(`pages_${locale.value}`).first(), {
  watch: [locale],
})

const { data } = await useAsyncData('blog', async () => queryCollection(`blog_${locale.value}`).order('date', 'DESC').all(), {
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
  <div>
    <UPageSection>
      <UBlogPosts orientation="vertical">
        <Motion
          v-for="(motion, index) in data" :key="index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <UBlogPost :title="motion.title" :to="$localePath(motion.path.replace('/en', ''))" :date="motion.date" :description="motion.description" />
        </Motion>
      </UBlogPosts>
    </UPageSection>
  </div>
</template>
