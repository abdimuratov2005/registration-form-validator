<template>
    <div :class="$style.indecatorBody">
        <div :class="$style.container">
            <div :class="$style.indecator"></div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" module>
.indecatorBody {
    position: absolute;
    bottom: 0;
}

.container {
    padding: 21px 128px 8px;
    cursor: grab;
}

.indecator {
    background: #000000;
    border-radius: 100px;
    width: 134px;
    height: 5px;
}
</style>