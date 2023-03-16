<template>
    <div :class="$style.time">
        {{ hours }}:{{ minutes }}
    </div>
</template>

<script setup>
const hours = new Date().getHours();
const minutes = new Date().getMinutes();

</script>

<style lang="scss" module>
.time {
    font-family: 'SF Pro Display', sans-serif;
    font-size: 16px;
    color: #000;
    font-weight: 800;
}
</style>