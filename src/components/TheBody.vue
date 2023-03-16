<template>
    <div :class="$style.body">
        <div :class="$style.container">
            <slot></slot>
        </div>
    </div>
</template>
<style lang="scss" module>
    .body{
        width: 390px;
        height: 812px;
        border-radius: 44px;
        position: relative;
        overflow: hidden;
    }

</style>