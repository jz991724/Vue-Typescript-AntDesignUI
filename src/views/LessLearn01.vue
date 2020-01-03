<template>
    <div id="wrap">
        <div id="inner">
            box1
        </div>
        <div id="inner2">
            box2
        </div>
    </div>
</template>

<script>
    export default {
        name: "LessLearn01"
    }
</script>

<style scoped type="text/css" lang="less">
    @color:~'pink' ;
    @m: margin;
    @font-size:12px;
    @selector: #wrap;
    @width:0.1;
    * {
        padding: 0;
        margin: 20px;
    }

    .juzhong {
        position: absolute;
        left: 500px;
        background-color: @color;
        text-align: center;
        font-size: @font-size*2;
        height: percentage(@width);

        &:hover {
            background-color: #42b983;
        }
    }

    #wrap {
        width: 100vw;
        height: 100vh;
        border: 1px solid red;

        #inner {
            width: 50%;
            height: 100px;
            top: 100px;
            .juzhong;
        }

        #inner2 {
            width: 50%;
            height: 100px;
            top: 400px;
            .juzhong;
        }

    }
</style>