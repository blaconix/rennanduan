<template>
  <UPageSection>
    <UPageGrid class="lg:grid-cols-2 lg:gap-8">
      <div class="flex flex-col items-center text-center">
        <NuxtImg
          src="https://placehold.co/400x400"
          alt="Your Name"
          class="mb-8"
        />
        <h1 class="text-3xl font-bold">
          Your Name
        </h1>
        <p class="text-gray-500 dark:text-gray-400">
          Filmmaker & Photographer
        </p>
      </div>

      <UCard>
        <template #header>
          <h2 class="text-xl font-semibold">
            About Me
          </h2>
        </template>

        <p class="mb-4">
          This is a placeholder for your bio. You can write a short introduction about yourself here. Talk about your passion for filmmaking and photography, your experience, and what drives you to create.
        </p>
        <p>
          Feel free to replace this text with your own personal story.
        </p>

        <template #footer>
          <div class="flex justify-center space-x-4">
            <UButton
              icon="i-simple-icons-x"
              to="https://x.com/your-profile"
              target="_blank"
              color="neutral"
              variant="ghost"
              aria-label="X"
            />
            <UButton
              icon="i-simple-icons-instagram"
              to="https://instagram.com/your-profile"
              target="_blank"
              color="neutral"
              variant="ghost"
              aria-label="Instagram"
            />
            <UButton
              icon="i-simple-icons-vimeo"
              to="https://vimeo.com/your-profile"
              target="_blank"
              color="neutral"
              variant="ghost"
              aria-label="Vimeo"
            />
            <UButton
              icon="i-heroicons-envelope"
              to="mailto:your-email@example.com"
              color="neutral"
              variant="ghost"
              aria-label="Email"
            />
          </div>
        </template>
      </UCard>
    </UPageGrid>
  </UPageSection>
</template>
