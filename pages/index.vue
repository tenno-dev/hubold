<script setup>
import { storeToRefs } from 'pinia'

import News from '~~/components/News.vue'
import Timers from '~~/components/Timers.vue'
import Construction from '../components/Construction.vue'
import Invasions from '../components/Invasions.vue'
const route = useRoute()
const store1 = useStore()
const { platform } = storeToRefs(store1)
let url = 'https://api.tenno.dev/' + platform.value
console.log(store1.platform)
watch(platform, (newVal, oldVal) => {
  if (newVal !== oldVal) {
    console.log('platform changed', newVal + ' vs ' + oldVal)
    url = 'https://api.tenno.dev/' + platform.value
    console.log('new url: ' + url)
    console.log('new value', store1)
    refresh()
  }
})
//const { pending, data: users, error } = useLazyAsyncData("users", () => $fetch('https://api.warframestat.us/pc'));
const { pending, error ,data} = useLazyAsyncData('worldstate', () => $fetch(url))
const refresh = () => refreshNuxtData('worldstate')

function sortnews(news) {
  if (news) {
    return news.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
  }
}
</script>

<template>
  <div v-if="pending">
    Loading ...
  </div>
  <div v-else>
    API response timestamp is: {{ data.timestamp }}
    <v-row no-gutters>
      <News :news="sortnews(data.news)" style="width:600px" />
      <client-only placeholder="Loading...">
        <!---->
        <Timers :earth="data.earthCycle" :cetus="data.cetusCycle" :vallis="data.vallisCycle"
          :cambion="data.cambionCycle" :zaiman="data.zarimanCycle" />
      </client-only>
      <Construction :fomorian="data.constructionProgress['fomorianProgress']"
        :razorback="data.constructionProgress['razorbackProgress']" />
        <Invasions :invasions="data.invasions"></Invasions>
    </v-row>
  </div>
</template>