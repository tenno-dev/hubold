<script setup>
import News from '~~/components/News.vue'
const route = useRoute()
const platform  = route.params.platform || 'pc'
//const { pending, data: users, error } = useLazyAsyncData("users", () => $fetch('https://api.warframestat.us/pc'));
const { pending, data } = await useLazyFetch('https://api.tenno.dev/' + route.params.platform, { pick: ['news', 'timestamp'] })

</script>

<template>
  <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    Page visits: {{ data.timestamp }}
    <News :news="data.news" style="width:600px" />
  </div>
</template>