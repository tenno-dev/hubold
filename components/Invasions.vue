<script setup>
const props = defineProps(['invasions'])
function getcolourfaction(prop) {
    let x = null
    if (prop === 'Grineer') {
        x = 'red'
    } else if (prop === 'Corpus') {
        x = 'blue'
    } else if (prop === 'Infested') {
        x = 'green'
    } else {
        x = 'white'
    }
    return x
}
</script>
<template>
    <v-card width="600">
        <v-card-title> Invasions</v-card-title>
        <div class="pt-0 text-white" v-if="!invasions">
            <v-alert type="error">No Invasions today.</v-alert>
        </div>
        <div v-else>
            <v-expansion-panels variant="accordion">
                <template v-for="(item, i) in invasions" :key="i">
                    <v-expansion-panel v-if="!item.completed">
                        <v-expansion-panel-title class="px-1">
                            <v-row no-gutters>
                                <v-col>
                                    {{ item.desc }}
                                    <br />
                                    {{ item.nodeKey }}
                                </v-col>
                                <v-col>
                                    <v-progress-linear class="text-green-500" v-if="item.vsInfestation"
                                        :model-value="item.completion.toFixed(2)" height="25"
                                        :color="getcolourfaction(item.defender.factionKey)"
                                        :bgColor="getcolourfaction(item.attacker.factionKey)">Infested {{
                                                item.completion.toFixed(2)
                                        }}% done</v-progress-linear>
                                    <v-progress-linear v-else :model-value="item.completion.toFixed(2)" height="25"
                                        :color="getcolourfaction(item.attacker.factionKey)"
                                        :bgColor="getcolourfaction(item.defender.factionKey)">{{
                                                item.completion.toFixed(2)
                                        }}% done</v-progress-linear>
                                </v-col>
                            </v-row>
                        </v-expansion-panel-title>
                        <v-expansion-panel-text>
                            <div class="flex items-center border-b border-gray-600">
                                <div class="w-full h-auto py-2 pl-2">
                                    <div class="grid grid-cols-2 gap-0 py-1">
                                        <div
                                            v-if="item.attackerReward.countedItems.length > 0 || item.attackerReward.items.length > 0">
                                            <div class="w-full text-left">Attacker Rewards</div>
                                            <div class="w-full break-normal text-left">
                                                <div class="grid grid-cols-2 gap-0 py-1">
                                                    <div v-for="(item1, i) in item.attackerReward.countedItems"
                                                        v-if="item.attackerReward.countedItems" class="col-span-2">
                                                        <div class="w-full">{{ item1.type }} x {{ item1.count }}</div>
                                                    </div>
                                                    <div v-for="(item, i) in item.attackerReward.items">
                                                        <div class="w-full">{{ item.item.name }}</div>
                                                    </div>
                                                    <div v-if="item.attackerReward.credits > 0">
                                                        <div class="w-full">credits: {{ item.attackerReward.credits }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div
                                            v-if="item.defenderReward.countedItems.length > 0 || item.defenderReward.items.length > 0">
                                            <div class="w-full text-left">Defender Rewards</div>
                                            <div class="w-full break-normal text-left">
                                                <div class="grid grid-cols-2 gap-0 py-1">
                                                    <div v-for="(item1, i) in item.defenderReward.countedItems"
                                                        v-if="item.defenderReward.countedItems" class="col-span-2">
                                                        <div class="w-full">{{ item1.type }} x {{ item1.count }}</div>
                                                    </div>
                                                    <div v-for="(item, i) in item.defenderReward.items">
                                                        <div class="w-full">{{ item.item.name }}</div>
                                                    </div>
                                                    <div v-if="item.defenderReward.credits > 0">
                                                        <div class="w-full">Credits: {{ item.defenderReward.credits }}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </template>
            </v-expansion-panels>
        </div>
    </v-card>
</template>