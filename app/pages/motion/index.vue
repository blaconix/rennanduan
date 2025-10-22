<script lang="ts" setup>
const { data } = await useFetch('https://dummyjson.com/products/category/home-decoration', {
  transform: (data) => {
    return data.products.map(d => ({ title: d.title }))
  },
})
</script>

<template>
  <div>
    <UPageSection>
      <UBlogPosts>
        <Motion
          v-for="index in 4" :key="index"
          :initial="{ opacity: 0, transform: 'translateY(10px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.2 * index }"
          :in-view-options="{ once: true }"
        >
          <UBlogPost :title="data[index].title" to="/motion/test" :image="`https://picsum.photos/480/270?random=${index}`" />
        </Motion>
      </UBlogPosts>
    </UPageSection>
  </div>
</template>

<style>

</style>
