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
@import url('https://fonts.googleapis.com/css?family=Rubik:400,500,700,900&display=swap');

@font-face {
    font-family: Butler;
    font-style: bold;
    src: url('assets/fonts/Butler-Bold.woff');
}

#app {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Rubik', sans-serif;
}
</style>
