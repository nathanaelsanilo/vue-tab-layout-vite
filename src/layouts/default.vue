<template>
  <main>
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route"></component>
    </router-view>
  </main>
</template>