<script lang="ts" setup>
import { useTheme } from 'vuetify'
import { storeToRefs } from 'pinia'

var route = useRoute()
const platforms = {
    "pc": "PC",
    "xb1": "XBox",
    "ps4": "PlayStation",
    "swi": "Switch"
}
 const theme = useTheme()
 
const store1 = useStore()
const { platform } = storeToRefs(store1)
const emit = defineEmits<{
    (e: 'theme-changed', value: string),
    (e: 'drawer-changed', value: boolean): void
}>()
var drawer = ref(false)

const themeIcon = computed(() =>
    theme.current.value.dark ? 'white-balance-sunny' : 'moon-waning-crescent',
)

function toggleTheme() {
    emit('theme-changed', theme.current.value.dark ? 'light' : 'dark')
}
function toggleDrawer() {
    //onsole.log(drawer)
    emit('drawer-changed', drawer.value = !drawer.value)
    //console.log(drawer)

}
</script>

<template>
    <v-app-bar density="compact">
        <template v-slot:prepend>
            <v-app-bar-nav-icon variant="text" @click.stop="toggleDrawer"></v-app-bar-nav-icon>
        </template>
        <v-app-bar-title>Warframe Info Hub Alpha for {{ platforms[platform] }}</v-app-bar-title>
        <template v-slot:append>

            <v-btn variant="text" @click="toggleTheme">
                <v-icon>{{ `mdi-${themeIcon}` }}</v-icon>
            </v-btn>
        </template>
    </v-app-bar>
</template>