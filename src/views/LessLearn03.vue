<template>
    <div id="wrap">
        <div class="sjx">

        </div>
    </div>

</template>

<script>
    export default {
        name: "LessLearn03"
    }
</script>

<style scoped lang="less">
    .triangle(@w:40px,@c) {
        width: 0;
        height: 0;
        border-width: @w;
        border-style: dashed solid dashed dashed;
        border-color: transparent @c transparent transparent;
        overflow: hidden;
    }

    #wrap > .sjx {
        .triangle(@c:red);
    }
</style>