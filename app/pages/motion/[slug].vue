<script setup>
const project = {
  title: 'Project Title',
  trailerUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  synopsis: 'This is a short synopsis of the motion project. It describes the main plot and themes.',
  credits: [
    { role: 'Director', name: 'John Doe' },
    { role: 'Producer', name: 'Jane Smith' },
    { role: 'Writer', name: 'Peter Jones' },
  ],
  festivals: ['Sundance Film Festival', 'Cannes Film Festival'],
  awards: ['Best Picture', 'Best Director'],
}
</script>

<template>
  <UContainer>
    <UCard>
      <template #header>
        <h1 class="text-2xl font-bold">
          {{ project.title }}
        </h1>
      </template>

      <div class="space-y-8">
        <div class="aspect-video">
          <iframe
            :src="project.trailerUrl"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            class="w-full h-full"
          />
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-2">
            Synopsis
          </h2>
          <p>{{ project.synopsis }}</p>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-2">
            Credits
          </h2>
          <ul>
            <li v-for="credit in project.credits" :key="credit.role">
              <strong>{{ credit.role }}:</strong> {{ credit.name }}
            </li>
          </ul>
        </div>

        <div>
          <h2 class="text-xl font-semibold mb-2">
            More Info
          </h2>
          <div class="space-y-4">
            <div>
              <h3 class="font-semibold">
                Festivals
              </h3>
              <p>{{ project.festivals.join(', ') }}</p>
            </div>
            <div>
              <h3 class="font-semibold">
                Awards
              </h3>
              <p>{{ project.awards.join(', ') }}</p>
            </div>
            <div>
              <UButton to="#" label="Get Full Access" />
            </div>
          </div>
        </div>
      </div>
    </UCard>
  </UContainer>
</template>
