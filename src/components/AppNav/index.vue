<script lang="ts" setup>
import TabNav from "@/store/resources/tab-nav.class";
import { useStoreNav, Tab } from "@/store/nav.store";

const storeNav = useStoreNav();

const navs = ref<Tab[]>([]);
const navProducts = new TabNav();
navProducts.active = false;
navProducts.title = 'View Product';
navProducts.route = '/products';
navProducts.component = 'product'

const navSettings = new TabNav();
navSettings.active = false;
navSettings.title = 'View Setting';
navSettings.route = '/settings';
navSettings.component = 'setting';

navs.value.push(navProducts, navSettings);

const addView = (item: Tab): void => {
  item.active = true
  storeNav.tabs.push(item)
}

</script>

<template>
  <div class="app-sidebar">
    <div class="app-sidebar__content">
      <ul class="b-list">
        <li
          v-for="item in navs"
          :key="item.route"
          class="px-5 text-center cursor-pointer hover:bg-slate-100 hover:underline"
          @click="addView(item)"
        >
          {{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
.app-sidebar {
  @apply fixed top-0 left-0 h-screen flex flex-col
bg-white shadow-lg;
  @apply w-[150px];
}
</style>

<route lang="yaml">
meta:
  layout: default
</route>