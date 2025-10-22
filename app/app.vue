<template>
  <UApp>
    <!-- <UHeader title="">
      <div class="flex items-center gap-16">
        <div class="flex flex-1 justify-end">
          <UButton
            class="tracking-wider"
            color="neutral"
            variant="ghost"
            to="/about"
            label="about"
            size="sm"
          />
        </div>

        <NuxtLink to="/" class="tracking-wide font-medium font-headings uppercase text-lg mb-0.5">
          Chance Trusfall
        </NuxtLink>

        <div class="flex flex-1">
          <UButton
            class="tracking-wider font-cn"
            color="neutral"
            variant="ghost"
            to="/about"
            label="简体中文 lelelelelelelele"
            size="sm"
          />
        </div>
      </div>
    </UHeader> -->

    <UHeader :ui="{ left: 'justify-end', right: 'justify-start', container: 'gap-16' }">
      <template #left>
        <UButton
          class="tracking-wider"
          color="neutral"
          variant="ghost"
          to="/about"
          label="about"
          size="sm"
        />
      </template>

      <NuxtLink to="/" class="tracking-wide font-medium font-headings uppercase text-lg mb-0.5">
        Chance Trusfall
      </NuxtLink>
      <template #right>
        <UButton
          class="tracking-wider font-cn"
          color="neutral"
          variant="ghost"
          to="/about"
          label="简体中文"
          size="sm"
        />
      </template>
    </UHeader>

    <UMain>
      <NuxtPage />
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
