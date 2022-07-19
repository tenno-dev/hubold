<script setup>
const props = defineProps(['fomorian', 'razorback'])
function round100(progress) {
    if (progress >= 100) {
        return 100
    } else {
        return Math.round(progress * 100) / 100
    }
}
</script>

<template>
    <v-card width="600">
        <v-card-title> item.message</v-card-title>
    <v-table>
        <thead>
            <tr>
                <th class="text-center">
                    fomorian
                </th>
                <th class="text-center">
                    razorback
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-center">
                    <v-progress-circular :rotate="360" :size="100" :width="15" :model-value="round100(fomorian)"
                        color="teal">
                        {{ round100(fomorian) }}%
                    </v-progress-circular>
                </td>
                <td class="text-center">
                    <v-progress-circular :rotate="0" :size="100" :width="15" :model-value="round100(razorback)"
                        color="teal">
                        {{ round100(razorback) }}%
                    </v-progress-circular></td>
            </tr>
        </tbody>
    </v-table>
    </v-card>
</template>