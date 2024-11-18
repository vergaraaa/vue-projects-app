<script setup lang="ts">
import TopMenu from '@/modules/common/components/TopMenu.vue';
import SideMenu from '../components/SideMenu.vue';
</script>

<template>
  <div class="flex flex-col">
    <!-- TOP MENU -->
    <top-menu />

    <main class="flex flex-row">
      <!-- SIDE MENU -->
      <side-menu />

      <!-- ROUTER VIEW -->
      <router-view></router-view>
    </main>
  </div>
</template>
