<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale, setLocale, finalizePendingLocaleChange } = useI18n()

const i18nHead = useLocaleHead()

useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs!.lang,
  },
  link: [...(i18nHead.value.link || [])],
  meta: [...(i18nHead.value.meta || [])],
}))

useSeoMeta({
  titleTemplate: '%s - Rennan Duan',
})

async function onBeforeEnter() {
  await finalizePendingLocaleChange()
}
</script>

<template>
  <UApp :locale="locales[locale]">
    <UHeader :ui="{ left: 'justify-end flex-1', center: 'flex', right: 'justify-start flex-1', container: 'gap-16' }" :toggle="false">
      <template #left>
        <UButton
          class="tracking-wider"
          color="neutral"
          variant="ghost"
          :to="$localePath('/about')"
          :label="$t('about')"
          size="sm"
        />
      </template>

      <NuxtLinkLocale to="/" class="tracking-wide font-medium font-headings uppercase text-lg mb-0.5">
        Rennan Duan
      </NuxtLinkLocale>
      <template #right>
        <UButton
          class="tracking-wider font-cn"
          color="neutral"
          variant="ghost"
          :label="$t('lang')"
          size="sm"
          @click=" setLocale(locale === 'en' ? 'zh_cn' : 'en')"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage
        :transition="{
          name: 'page',
          mode: 'out-in',
          onBeforeEnter,
        }"
      />
    </UMain>
  </UApp>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all cubic-bezier(0.4, 0, 0.2, 1) 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  /* filter: blur(1rem); */
}
</style>
