<script setup>
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
import Countdown from 'vue3-countdown'

dayjs.extend(utc)
const props = defineProps(['voidtrader'])
function dt(date) {
    date = dayjs(date).utc().local().format()
    return dayjs(date).diff(Date.now())
}
function stock(total, sold) {
    if (total - sold === 0) {
        return "text-red text-left"
    } else if (total - sold < total * 0.5) {
        return "text-yellow text-left"
    } else {
        return "text-green text-left"
    }
}
</script>
<template>
    <v-card width="600">
        <v-card-title>Void trader</v-card-title>
        <template v-if="voidtrader.active === false">
            <div class="bg-normal text-left px-2">
                <countdown :time="dt(voidtrader.activation)" format="dd  DD HH:mm:ss">
                    <template v-slot="{ currentTime, resolved, formatted }">
                        {{ voidtrader.character }} arrives in
                        <span class="countdown-item" v-if="resolved.D > 0">{{ resolved.D }}d:</span>
                        <span class="countdown-item" v-if="resolved.H > 0">{{ resolved.HH }}h:</span>
                        <span class="countdown-item" v-if="resolved.mm > 0">{{ resolved.mm }}m:</span>
                        <span class="countdown-item" v-if="resolved.ss">{{ resolved.ss }}s</span>
                        on {{ voidtrader.location }}
                    </template>
                </countdown>
            </div>
        </template>
        <template v-if="voidtrader.active === true">
            <div class="bg-normal text-left px-2">
                <countdown :time="dt(voidtrader.expiry)" format="dd  DD HH:mm:ss">
                    <template v-slot="{ currentTime, resolved, formatted }">
                        {{ voidtrader.character }} leaves in
                        <span class="countdown-item" v-if="resolved.D > 0">{{ resolved.D }}d:</span>
                        <span class="countdown-item" v-if="resolved.H > 0">{{ resolved.HH }}h:</span>
                        <span class="countdown-item" v-if="resolved.mm > 0">{{ resolved.mm }}m:</span>
                        <span class="countdown-item" v-if="resolved.ss">{{ resolved.ss }}s</span>
                        on {{ voidtrader.location }}
                    </template>
                </countdown>
            </div>
        </template>
    </v-card>
</template>