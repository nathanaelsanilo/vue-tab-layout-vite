<script lang="ts" setup>
import { useStoreNav } from '@/store/nav.store'

const storeNav = useStoreNav()

</script>

<template>
  <div class="container px-5 mx-auto">
    <TabGroup>
      <TabList>
      <Tab
        v-for="item in storeNav.tabs"
        :key="item.component"
        class="px-3"
      >
        {{ item.title }}
      </Tab>
      </TabList>
      <TabPanels class="mt-2">
        <TabPanel :key="item.component" v-for="item in storeNav.tabs">
          <pre>{{ item }}</pre>
          <component :is="item.component" :key="item.component"></component>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
