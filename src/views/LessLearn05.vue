<template>
    <div class="wrap">
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>

    </div>
</template>

<script>
    export default {
        name: "LessLearn05"
    }
</script>

<style scoped lang="less">
    .loop(@index) when (@index>0) {
        h@{index} {
            padding: @index*10px;
        }
        .loop(@index - 1);
    }

    .wrap {
        .loop(6);
    }
</style>