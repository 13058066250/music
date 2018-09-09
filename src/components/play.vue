<template>
    <div class="playbox">
        <section>
            <p>{{currentMusic.id}}</p>
            <p>作者</p>
            <p>time</p>
            <p>volu</p>
        </section>
        <span class="bill"></span>
        <mt-progress :value="20" :bar-height="5" class="pl"></mt-progress>
        <div class="btn">
            <span class="left">&lt;</span>
            <span class="play">=</span>
            <span class="right">&gt;</span>
            <mt-progress :value="50" class="volu">
                <div slot="start"><img src="../image/声音放大.png"></div>
            </mt-progress>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex"
    import "../style/play.scss"
    export default{
        computed:{
            ...mapGetters(["currentMusic"])
        }
    }
</script>