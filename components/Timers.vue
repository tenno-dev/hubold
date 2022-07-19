<script setup>
import Countdown from 'vue3-countdown'
import dayjs from "dayjs"
import utc from 'dayjs/plugin/utc'
dayjs.extend(utc)
const props = defineProps(['earth', 'cetus', 'vallis', 'cambion'])
function dt(date) {
    date = dayjs(date).utc().local().format()
    return dayjs(date).diff(Date.now())
}
</script>
<template>
    <v-card width="600">
        <v-card-title> Timers</v-card-title>
         <v-table>
            <thead>
                <tr>
                    <th class="text-left">
                        Planet
                    </th>
                    <th class="text-left">
                        State
                    </th>
                    <th class="text-left">
                        Time left
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Earth</td>
                    <td>
                        <v-icon v-if="earth.state == 'night'">mdi-moon-waning-crescent</v-icon>
                        <v-icon v-else>mdi-weather-sunny</v-icon>
                    </td>
                    <td>
                        <countdown :time="dt(earth.expiry)" />
                    </td>
                </tr>
                <tr>
                    <td>Cetus</td>
                    <td>
                        <v-icon v-if="cetus.state == 'night'">mdi-moon-waning-crescent</v-icon>
                        <v-icon v-else>mdi-weather-sunny</v-icon>
                    </td>
                    <td>
                        <countdown :time="dt(cetus.expiry)" />
                    </td>
                </tr>
                <tr>
                    <td>Vallis</td>
                    <td>
                        <v-icon v-if="!vallis.isWarm">mdi-snowflake</v-icon>
                        <v-icon v-else>mdi-fire</v-icon>
                    </td>
                    <td>
                        <countdown :time="dt(vallis.expiry)" />
                    </td>
                </tr>
                                <tr>
                    <td>Cambion</td>
                    <td>
                        <v-icon v-if="cambion.active">mdi-weather-sunny</v-icon>
                        <v-icon v-else>mdi-moon-waning-crescent</v-icon>
                    </td>
                    <td>
                        <countdown :time="dt(cambion.expiry)" />
                    </td>
                </tr>
            </tbody>
        </v-table>

    </v-card>

</template>