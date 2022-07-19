<script setup lang="ts">
import { useTheme } from 'vuetify'
import Navbar from '~~/components/Navbar.vue'
var drawer = ref(false)
const theme = useTheme()
const route = useRoute()
 var platform = route.params.platform
watch(route, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        console.log('platform changed', newVal + 'vs ' + oldVal)
    }
})
</script>

<template>
    <v-app>
        <Navbar @theme-changed="theme.name.value = $event" @drawer-changed="drawer = $event" />

        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list-item title="Test nav">
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-view-dashboard" title="PC" value="PC" link to="/pc"></v-list-item>
                <v-list-item prepend-icon="mdi-view-dashboard" title="PS4" value="PS4" link to="/ps4"></v-list-item>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Xbox" value="XB1" link to="/xb1"></v-list-item>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Switch" value="SWI" link to="/swi"></v-list-item>
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