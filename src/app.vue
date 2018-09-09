
<template>
    <div class="app">
        <router-view name="audio"></router-view>
        <header>
            <router-view name="header" class="header"></router-view>
        </header>
        <router-view class="main"></router-view>
        <footer>
            <router-link to="/" class="link">首页</router-link>
            <router-link to="/list" class="link">我的歌曲</router-link>
            <router-link to="/lrc" class="link">歌词</router-link>
        </footer>
    </div>
</template>


<script>
    import "./app.scss"
    export default{

    }
</script>
