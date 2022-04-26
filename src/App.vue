<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from "@/components/MainNavigation.vue";
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Navigation msg="You did it!" />
    </div>
  </header>

  <RouterView />
</template>

<style>
@import '@/assets/base.css';
</style>
