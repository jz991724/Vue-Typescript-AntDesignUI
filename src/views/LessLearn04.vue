<template>
    <div class="wrap">
        <div class="inner">

        </div>
        <div class="inner"></div>
    </div>
</template>

<script>
    export default {
        name: "LessLearn04"
    }
</script>

<style scoped lang="less">
    .test(@w;@c) when (ispixel(@w)) {
        width: @w;
        height: 100px;
        border: 1px solid red;
    }

    .test(@w:20px;@c:red) {
        background-color: @c;
    }

    .wrap {
        .test(1000px, green);
    }

</style>