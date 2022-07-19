<template>

    <swiper :modules="modules" :slides-per-view="1" :space-between="50" :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }" loop>
        <swiper-slide v-for="(item, index) in news" :key="index">
            <v-card width="600">
                <v-img :src="getimage(item.imageLink)" height="200px" cover>
                </v-img>
                <v-card-title>{{ item.message }}</v-card-title>
                <v-card-subtitle class="pt-4">{{ item.eta }}</v-card-subtitle>
                 <v-card-actions>
                    <v-btn color="orange" :href=item.link>
                        Goto News
                    </v-btn>
                </v-card-actions>
            </v-card>
        </swiper-slide>
    </swiper>
</template>
<script setup>
// Import Swiper Vue.js components
import { defineComponent } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
const imgcdn = "https:///img2.tenno.dev"
const allowedhost = {
    "n9e5v4d8.ssl.hwcdn.net": "hwcdn",
    "https://content.invisioncic.com/": "invisioncic"
}
const modules = [Navigation, Pagination, Scrollbar, A11y]

const props = defineProps(['news'])
function getimage(url) {
    const url1 = new URL(url)

    if (allowedhost[url1.host]) {
         return imgcdn + url1.pathname + '?host=' + allowedhost[url1.host]
    }
    return url
}
function sortnews(news) {
    return news.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
    })
}
</script>