<script setup>
import { storeToRefs } from 'pinia'

const postsStore = usePostsStore()
postsStore.getFrames()
const { nonprimes, primes, loading } = storeToRefs(postsStore)
const imgcdn = "https:///cdn.tenno.dev/" 
</script>
<script>
export default {
    data: () => ({
        tab: null,
    }),
}
</script>
<template>
    <div v-if="loading">
        Loading ...</div>
    <div v-else>
        <v-tabs fixed-tabs background-color="indigo-darken-2" theme="dark" v-model="tab">
            <v-tab :value="1">
                Option
            </v-tab>
            <v-tab :value="2">
                Another Option
            </v-tab>
        </v-tabs>
        <v-window v-model="tab">
            <v-window-item :key="1" :value="1"> test {{ tab }}
                <v-row>
                    <v-col v-for="n in primes" :key="n" class="d-flex child-flex" cols="4">
                        <v-card width="600">
                            {{ n.name }}
                            <v-img :src="imgcdn + n.imageName" aspect-ratio="1.5" />
                        </v-card>
                    </v-col>
                </v-row>

            </v-window-item>
            <v-window-item :key="2" :value="2"> test {{ tab }}
                <v-row>
                    <v-col v-for="n in nonprimes" :key="n" class="d-flex child-flex" cols="4">
                        <v-card width="600">
                            {{ n.name }}
                            <v-img :src="imgcdn + n.imageName" aspect-ratio="1.5" />
                        </v-card>
                    </v-col>
                </v-row>
            </v-window-item>
        </v-window>
    </div>
</template> 