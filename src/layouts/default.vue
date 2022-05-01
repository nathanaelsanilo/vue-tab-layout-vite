<template>
  <main class="main">
    <teleport to="#aside">
      <AppNav></AppNav>
    </teleport>
    <router-view v-slot="{ Component, route }">
      <component :is="Component" :key="route"></component>
    </router-view>
  </main>
</template>

<style>
.main {
  @apply h-auto ml-[150px];
}
</style>