<script setup>
import { useDialogPluginComponent } from "quasar";
import { ref, watch, computed, onMounted } from "vue";
import { useQuasar } from "quasar";
const $q = useQuasar();

onMounted(() => {
    loadStore();
    setCurrentPlayer();
});

const addPlayerText = ref("");

const players = ref([]);

const currentPlayer = ref({ name: "" });
const winningPlayer = ref();

const formattedPlayers = computed(() => {
    console.log("Formatted Players called");
    players.value.forEach(function (item) {
        if (item.health > 0 && item.name == currentPlayer.value.name) {
            item["style"] = "height: 100px; color: black";
        } else if (item.health > 0) {
            item["style"] = "color: black";
        } else {
            item["style"] = "color: grey";
        }
    });

    return players.value;
});

const alivePlayers = computed(() => {
    return players.value.filter((player) => player.health > 0);
});

function loadStore() {
    let toLoad = $q.localStorage.getItem("players");
    if (toLoad != undefined) {
        players.value = toLoad.players;
    }
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function shufflePlayers() {
    shuffle(players.value);
}

function removePlayer(toRemove) {
    if (toRemove.name == currentPlayer.value.name) {
        console.log("assigning new user as current ");
        currentPlayer.value =
            alivePlayers.value[alivePlayers.value.indexOf(toRemove) + 1];
    }
    if (players.value.length == 1) {
        currentPlayer.value = { name: "" };
    }
    players.value = players.value.filter((player) => player != toRemove);
}

function resetGame() {
    players.value.forEach(function (item) {
        item.health = 3;
    });
    currentPlayer.value = { name: "" };
    setCurrentPlayer();
}

function setCurrentPlayer() {
    if (alivePlayers.value.length == 0) {
        return;
    }
    if (currentPlayer.value.name == "") {
        currentPlayer.value = alivePlayers.value[0];
        console.log(formattedPlayers.value);
    }
}

function advanceGame(pot) {
    let nextPlayer;
    if (alivePlayers.value.length == 0) {
        return;
    }
    if (currentPlayer.value.name == undefined) {
        currentPlayer.value = alivePlayers.value[0];
        console.log(formattedPlayers.value);
    } else {
        nextPlayer =
            alivePlayers.value[
                (alivePlayers.value.indexOf(currentPlayer.value) + 1) %
                    alivePlayers.value.length
            ];
        if (!pot) {
            currentPlayer.value.health--;
        }
        if (currentPlayer.value.health == 0) {
            advanceGame();
        }
    }
    currentPlayer.value = nextPlayer;
}

function addPlayer() {
    if (
        addPlayerText.value == "" ||
        players.value.filter((player) => player.name == addPlayerText.value)
            .length > 0
    ) {
        return;
    }
    var toAdd = {
        name: addPlayerText.value,
        health: 3,
    };
    if (currentPlayer.value.name == "") {
        currentPlayer.value = toAdd;
    }

    players.value.push(toAdd);
    addPlayerText.value = "";
    formattedPlayers.value;
}

watch(
    players,
    async () => {
        let toStore = { players: players.value };
        $q.localStorage.set("players", toStore);
    },
    { deep: true }
);
watch(currentPlayer, async () => {
    console.log("watched");
    console.log(currentPlayer.value);
});
watch(
    alivePlayers,
    async () => {
        if (alivePlayers.value.length == 1 && players.value.length > 1) {
            currentPlayer.value = { name: "" };
            winningPlayer.value = alivePlayers.value[0];
            return;
        } else {
            winningPlayer.value = undefined;
        }
    },
    { deep: true }
);
</script>

<template>
    <div style="width: 100%" class="row justify-between q-pa-md">
        <div class="justify-center">
            <div class="row">
                <q-input
                    dense
                    v-model="addPlayerText"
                    label="Add a player"
                    outlined
                    @keydown.enter="addPlayer"
                ></q-input>
                <q-btn
                    class="vertical-bottom"
                    round
                    dense
                    flat
                    icon="add"
                    @click="addPlayer"
                ></q-btn>
            </div>
        </div>
        <div class="row justify-center items-center q-gutter-md">
            <q-btn @click="resetGame">Reset Game</q-btn>
            <q-btn @click="shufflePlayers">Shuffle Players</q-btn>
        </div>
    </div>
    <div style="width: 100vw">
        <template v-if="formattedPlayers.length > 0">
            <q-list>
                <q-item
                    v-for="player in formattedPlayers"
                    class="justify-center"
                    :key="player"
                    :style="player.style + '; width: 100%'"
                    :active="player.name == currentPlayer.name"
                    active-class="bg-light-green-2"
                >
                    <div style="width: 500px" class="row items-center">
                        <div
                            class="col text-right items-center text-weight-bold"
                            @click="currentPlayer = player"
                        >
                            <template
                                v-if="
                                    currentPlayer &&
                                    player.name == currentPlayer.name
                                "
                                ><q-icon size="lg" name="chevron_right"></q-icon
                            ></template>
                            {{ player.name }}
                        </div>
                        <div
                            class="col flex flex-center no-wrap"
                            @click="currentPlayer = player"
                        >
                            <template v-for="i in 3" :key="i">
                                <q-icon
                                    v-if="i <= player.health"
                                    color="red"
                                    name="favorite"
                                    size="lg"
                                />
                                <q-icon
                                    v-if="i > player.health"
                                    color="grey"
                                    name="favorite"
                                    size="lg"
                                />
                            </template>
                        </div>
                        <div class="col">
                            <q-btn
                                class="float-left"
                                icon="delete"
                                round
                                dense
                                flat
                                @click="removePlayer(player)"
                            />
                        </div>
                    </div>
                </q-item>
            </q-list>
        </template>
        <template v-else>
            <h1 class="flex flex-center" style="width: 100%">
                Add some players!
            </h1>
        </template>
    </div>
    <div class="column flex flex-center">
        <h4 v-if="currentPlayer.name != ''">Did {{ currentPlayer.name }}</h4>
        <div class="row q-gutter-md items-center">
            <q-btn color="green" @click="advanceGame(true)">Pot</q-btn>
            <div>or</div>
            <q-btn color="red" @click="advanceGame(false)">Miss</q-btn>
        </div>

        <h1 class="row" v-if="winningPlayer">
            Winner: {{ winningPlayer.name }}
        </h1>
    </div>
</template>
