<template>
  <h1 class="sr-only">Danielle Meyer</h1>
  <h2 class="sr-only">Graphic Design & Visual Artists</h2>
  <div class="flex justify-center mt-35 sm:mt-20 w-full">
    <MyEnName id="svg-my-en-name" :class="$attrs.class" />
  </div>
</template>

<script setup lang="ts">
  import { MyEnName } from '..';
</script>
