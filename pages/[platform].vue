<script setup>
import News from '~~/components/News.vue'
import Timers from '~~/components/Timers.vue'
import Construction from '../components/Construction.vue'
const route = useRoute()
const platform = computed(() => { return route.params.platform ?? 'pc' })

//const { pending, data: users, error } = useLazyAsyncData("users", () => $fetch('https://api.warframestat.us/pc'));
const { pending, data, error, refresh } = await useLazyFetch('https://api.tenno.dev/' + platform.value, { pick: ['news', 'timestamp', 'earthCycle', 'cetusCycle', 'vallisCycle', 'cambionCycle', 'zarimanCycle','constructionProgress'] })
function sortnews(news) {
  if (news) {
    return news.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
  }
}
watch(
  () => platform.value,
  () => console.log(platform.value),
  refresh()
)
</script>

<template>
  <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    API response timestamp is: {{ data.timestamp }}
    <v-row no-gutters>
      <News :news="sortnews(data.news)" style="width:600px" />
      <Timers :earth="data.earthCycle" :cetus="data.cetusCycle" :vallis="data.vallisCycle"
        :cambion="data.cambionCycle" :zaiman="data.zarimanCycle" />
        <Construction :fomorian="data.constructionProgress['fomorianProgress']" :razorback="data.constructionProgress['razorbackProgress']" />
    </v-row>
  </div>
</template>