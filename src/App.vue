<template>
    <InConstruction />
    <ThreeScene />
</template>

<script>
import ThreeScene from "./components/ThreeScene.vue";
import InConstruction from "./components/InConstruction.vue";

export default {
    name: "App",
    components: {
        ThreeScene,
        InConstruction,
    },
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;700&display=swap');

#app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
}
</style>
