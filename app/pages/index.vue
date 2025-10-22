<template>
  <div>
    <UPageHero :ui="{ links: 'gap-24' }">
      <template #links>
        <UButton square class="dark transition-all hover:scale-105 group flex-col text-lg tracking-wider" to="/motion">
          <div class="relative">
            <img class="" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDVkc3NpNTYwbjdwcnBwNmdleHQ0aGUyYzJkOW1zdTBib245aGx0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YTgnkKLORx64AgbZq2/giphy.gif">
            <div class="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-default" />
            <!-- <div class="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-black" /> -->
            <!-- <div class="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-black" /> -->
            <div class="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-default" />
          </div>
          <span class="mt-4 uppercase">Motion</span>
        </UButton>
        <UButton square class="dark transition-all hover:scale-105 group flex-col text-lg tracking-wider" to="/still">
          <div class="relative">
            <img class="" src="https://picsum.photos/480/270">
            <div class="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-default" />
            <!-- <div class="absolute -top-4 -right-4 w-16 h-16 border-t border-r border-black" /> -->
            <!-- <div class="absolute -bottom-4 -left-4 w-16 h-16 border-b border-l border-black" /> -->
            <div class="absolute -bottom-4 -right-4 w-16 h-16 border-b border-r border-default" />
          </div>
          <span class="mt-4 uppercase">Still</span>
        </UButton>
      </template>
    </UPageHero>
  </div>
</template>
