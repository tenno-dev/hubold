
<script setup>
import Countdown from 'vue3-countdown'
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
const props = defineProps(['nightwave'])
function dt(date) {
    date = dayjs(date).utc().local().format()
    return dayjs(date).diff(Date.now())
}
function getcolourfaction(prop) {
    console.log(prop)
    let x = null
    if (prop === 'Grineer') {
        x = 'red-600'
    } else if (prop === 'Corpus') {
        x = 'blue-600'
    } else if (prop === 'Infested') {
        x = 'green-600'
    } else {
        x = 'white'
    } console.log(prop + "- " + x)
    return x
}
</script>
<template>
    <v-card width="600">
        <v-card-title>Nightwave</v-card-title>
        <div class="pt-0 text-white" v-if="!nightwave">
            <v-alert type="error">No nightwave today.</v-alert>
        </div>
        <div v-else>
            <v-row no-gutters>
                <v-col>
                    <div class="pl-2 w-full h-auto text-left">Season {{ nightwave.season - 1 }}</div>
                </v-col>
                <v-col>
                    <countdown :time="dt(nightwave.expiry)" format="dd  DD HH:mm:ss">
                        <template v-slot="{ currentTime, resolved, formatted }">
                            Ends in:
                            <span class="countdown-item" v-if="resolved.D > 0">{{ resolved.D }}d:</span>
                            <span class="countdown-item" v-if="resolved.HH">{{ resolved.HH }}h</span>:
                            <span class="countdown-item" v-if="resolved.mm">{{ resolved.mm }}m</span>:
                            <span class="countdown-item" v-if="resolved.ss">{{ resolved.ss }}s</span>
                        </template>
                    </countdown>
                </v-col>
            </v-row>
            <v-expansion-panels variant="accordion">
                <v-expansion-panel v-for="(item, i) in nightwave.activeChallenges" :key="i">
                    <v-expansion-panel-title>
                        <v-row no-gutters>
                            <v-col> {{ item.title }}</v-col>
                            <v-col>
                                <v-chip class="ma-2" color="yellow" text-color="white" v-if="item.isElite">Elite
                                </v-chip>
                            </v-col>
                            <v-col>
                                <countdown :time="dt(item.expiry)" format="dd  DD HH:mm:ss">
                                    <template v-slot="{ currentTime, resolved, formatted }">
                                        <span class="countdown-item" v-if="resolved.D > 0">{{ resolved.D }}d:</span>
                                        <span class="countdown-item" v-if="resolved.HH">{{ resolved.HH }}</span> :
                                        <span class="countdown-item" v-if="resolved.mm">{{ resolved.mm }}</span> :
                                        <span class="countdown-item" v-if="resolved.ss">{{ resolved.ss }}</span>
                                    </template>
                                </countdown>
                            </v-col>
                        </v-row>
                    </v-expansion-panel-title>
                    <v-expansion-panel-text>
                        <div class="flex items-center">
                            <div class="w-full h-auto py-2 pl-2">{{ item.desc }}</div>
                        </div>
                    </v-expansion-panel-text>
                </v-expansion-panel>
            </v-expansion-panels>
        </div>
    </v-card>

</template>