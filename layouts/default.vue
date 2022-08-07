<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useTheme } from 'vuetify'
import Navbar from '~~/components/Navbar.vue'
const platforms = {
    "pc": "PC",
    "xb1": "XBox",
    "ps4": "PlayStation",
    "swi": "Switch"
}
var drawer = ref(false)
const theme = useTheme()

const themeIcon = computed(() =>
    theme.current.value.dark ? 'white-balance-sunny' : 'moon-waning-crescent',
)

function toggleTheme() {
    theme.name.value = theme.current.value.dark ? 'light' : 'dark'
}
function toggleDrawer() {
    //onsole.log(drawer)
    drawer.value = !drawer.value
    //console.log(drawer)

}
var drawer = ref(false)
const route = useRoute()
const store1 = useStore()
const { platform } = storeToRefs(store1)

function changeplat(id) {
    console.log('platform changed layout', id)
    platform.value = id
    console.log(platform.value)
    drawer.value = !drawer.value
}
</script>

<template>
    <v-app>
        <v-app-bar app :collapse=false>
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
        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list-item title="Test nav">
            </v-list-item>
            <v-divider></v-divider>
            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-view-dashboard" title="PC" value="PC" @click.stop="changeplat('pc')">
                </v-list-item>
                <v-list-item prepend-icon="mdi-view-dashboard" title="PS4" value="PS4" link
                    @click.stop="changeplat('ps4')"></v-list-item>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Xbox" value="XB1" link
                    @click.stop="changeplat('xb1')"></v-list-item>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Switch" value="SWI" link
                    @click.stop="changeplat('swi')"></v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-main>
            <slot />
        </v-main>
        <v-footer fixed app class="text-body-2">
            test 1234
        </v-footer>
    </v-app>
</template>