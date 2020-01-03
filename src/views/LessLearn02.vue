<template>
    <div>
        <h1>这是一个less的例子</h1>
        <div class="myClass">
            我要好好写一个less的例子
        </div>
    </div>
</template>

<script>
    export default {
        name: "LessLearn02"
    }
</script>

<style scoped type="text/css" lang="less">
    .class1 {
        .class2 {
            .val(@param) {
                font-size: @param;
                color: blueviolet;
                .border(2px; dashed; green);
                /*<!--.border(@p3:green);-->*/
            }
        }
    }

    .border(@p1:1px;@p2:solid;@p3:red) {
        border: @p1 @p2 @p3;
    }

    .fatherClass {
        font-weight: bold;
        color: aqua;
    }

    .myClass {
        &:extend(.fatherClass);
        .class1>.class2> .val(40px);
    }
</style>