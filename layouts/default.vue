<script setup lang="ts">
import { useTheme } from 'vuetify'
import Navbar from '~~/components/Navbar.vue'
var drawer = ref(false)
const theme = useTheme()
</script>

<template>
    <v-app>
        <Navbar @theme-changed="theme.name.value = $event" @drawer-changed="drawer = $event" />

        <v-navigation-drawer v-model="drawer" app temporary>
            <v-list-item title="Test nav">
            </v-list-item>

            <v-divider></v-divider>

            <v-list density="compact" nav>
                <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" link></v-list-item>
                <v-list-item prepend-icon="mdi-forum" title="Fishing Maps" value="fishing"></v-list-item>
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