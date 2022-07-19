<template>

    <swiper :modules="modules" :slides-per-view="1" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"
        :pagination="{ clickable: true }" :scrollbar="{ draggable: true }" loop>
        <swiper-slide v-for="(item, index) in news" :key="index">
            <v-card width="600">
                <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover>
                </v-img>
                <v-card-title>{{ item.message }}</v-card-title>
                <v-card-subtitle class="pt-4">{{ item.eta }}</v-card-subtitle>
                Slide {{ index }}<br>{{ item }}
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
const modules = [Navigation, Pagination, Scrollbar, A11y]

const props = defineProps(['news'])
</script>