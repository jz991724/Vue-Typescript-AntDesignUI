<template>
    <div id="app">
            <div id="nav">
<!--              <router-link to="/">Home</router-link> |-->
<!--              <router-link to="/about">About</router-link>-->
                <router-link to="/less01">lessLearn01</router-link> |
                <router-link to="/less02">lessLearn02</router-link> |
                <router-link to="/less03">lessLearn03</router-link> |
                <router-link to="/less04">lessLearn04</router-link> |
                <router-link to="/less05">lessLearn05</router-link> |
                <router-link to="/less06">lessLearn06</router-link>
            </div>
        <router-view/>
    </div>
</template>

<style lang="less">
    #app {
        font-family: "Avenir", Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
