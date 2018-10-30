<template>
    <div id="app">
        <baseAside></baseAside>
        <router-view></router-view>
    </div>
</template>

<script>
    import baseAside from './components/baseAside'

    export default {
        name: 'app',
        components: {baseAside},
    }
</script>

<style lang="less">
    @import './assets/css/base.less';

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
</style>
