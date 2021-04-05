<template>
    <div class="inConstruction">
        <h1>Marius Ballot</h1>
        <div class="line"></div>
        <h3>Engineering student by day, weird ass xp maker by night</h3>
        <p>Minor modifications and fixes in progress</p>
    </div>
</template>

<script>
export default {
    name: "inConstruction",
    props: {
        msg: String,
    },
    mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.inConstruction {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    background: white;

    h1 {
        font-family: 'Bulter';
        weight: bold;
        font-size: 4em;
    }

    .line {
        height: 2px;
        width: 300px;
        background: linear-gradient(#AAAAFF, #FFAAFF);
        margin-top: 10px;
        margin-bottom: 20px;
    }

    p {
        margin-top: 5px;
    }
}
</style>
