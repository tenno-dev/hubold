<script setup>
import News from '~~/components/News.vue'
const route = useRoute()
const platform = computed(() => { return route.params.platform ?? 'pc' })

//const { pending, data: users, error } = useLazyAsyncData("users", () => $fetch('https://api.warframestat.us/pc'));
const { pending, data, error, refresh } = await useLazyFetch('https://api.tenno.dev/' + platform.value, { pick: ['news', 'timestamp'] })
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
    <News :news="sortnews(data.news)" style="width:600px" />
  </div>
</template>