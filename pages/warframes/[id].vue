<template>
    <div v-if="pending || !data">
        Loading ...</div>
    <div v-else>
        <div class="flex justify-center items-center h-screen">

            <v-card width="600">
                <template v-slot:title>
                    {{ data.name }} <v-chip v-if="data.name.includes('Prime')" size="small" class="ma-2" color="yellow"
                        label text-color="white">
                        <v-icon start icon="mdi-star"></v-icon>
                        Prime
                    </v-chip>
                </template>

                <template v-slot:text class="opacity-100">
                    <v-row no-gutters>
                        <v-col cols="12" sm="6">
                            <v-card>
                                <template v-slot:text>
                                    <v-img :src="imgcdn + data.imageName" aspect-ratio="1.5" />
                                </template>
                            </v-card>
                        </v-col>
                        <v-col cols="12" sm="6">
                            <v-card class="shadow-none">
                                <template v-slot:text>
                                    <v-table>
                                        <tr>
                                            <td>
                                                <v-icon large color="red darken-2">
                                                    mdi-heart
                                                </v-icon>
                                            </td>
                                            <td>{{ data.health }}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <v-icon large color="blue darken-2">
                                                    mdi-shield
                                                </v-icon>
                                            </td>
                                            <td>{{ data.shield }}</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <v-icon large color="yellow darken-2">
                                                    mdi-lightning-bolt
                                                </v-icon>
                                            </td>
                                            <td>{{ data.shield }}</td>
                                        </tr>
                                    </v-table>
                                </template>
                            </v-card>
                        </v-col>
                    </v-row>

                </template>
                <v-expansion-panels>
                    <v-expansion-panel :key="1">
                        <v-expansion-panel-title>
                            Patchlogs</v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <v-row justify="space-around" no-gutters>
                                <v-col cols="3">
                                    <div>
                                        <span v-for="patch in data.patchlogs">
                                            <v-chip color="blue darken-2" text-color="white" label>
                                                {{ patch.name }}
                                            </v-chip>
                                        </span>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                    <v-expansion-panel :key="2">
                        <v-expansion-panel-title>
                            Stats</v-expansion-panel-title>
                    </v-expansion-panel>
                    <v-expansion-panel :key="3">
                        <v-expansion-panel-title>
                            Lore</v-expansion-panel-title>
                    </v-expansion-panel>
                </v-expansion-panels>

            </v-card>
        </div>
    </div>
</template>

<script setup>
const route = useRoute()

let url = 'https://fra.tenno.dev/warframes/' + route.params.id


const { pending, error, data } = useLazyAsyncData('worldstate', () => $fetch(url))

const imgcdn = "https:///cdn.tenno.dev/" 
</script>
<script>
export default {
    data: () => ({
        tab: null,
    }),
}
</script>
<style scoped>
.v-card--variant-elevated {
    box-shadow: 0 0 #0000;
}
</style>
