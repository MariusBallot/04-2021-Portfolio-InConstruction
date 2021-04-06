<template>
    <div class="inConstruction">
        <h1 ref="wavy">Marius Ballot</h1>
        <div class="line"></div>
        <h3>Engineering student by day, weird ass crea-dev by night</h3>
        <p>Minor modifications and fixes in progress</p>
    </div>
</template>

<script>
import RAF from "../utils/RAF";

export default {
    name: "inConstruction",
    props: {
        msg: String,
    },
    mounted() {
        this.$refs.wavy.innerHTML = this.$refs.wavy.textContent.replace(
            /\S/g,
            "<span class='wavyLetter'>$&</span>"
        );

        RAF.subscribe("wavyUpdate", this.update);
    },

    methods: {
        update() {
            this.$refs.wavy.children.forEach((letter, i) => {
                let offset = Math.sin(i * 0.3 + Date.now() * 0.01) - 1;
                letter.style.transform = `translateY(${offset * 10}px)`;
                letter.style.display = "inline-block";
                letter.style.fontfamily = "font-family: 'Bulter'";
            });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.inConstruction {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    pointer-events: none;

    h1 {
        font-family: 'Bulter' !important;
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
