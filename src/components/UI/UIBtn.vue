<template>
    <button type="button" :class="$style.btn">
        <slot></slot>
    </button>
</template>

<style module lang="scss">
.btn {
    cursor: pointer;
    white-space: nowrap;
    pointer-events: all;
    padding: 14px 143px;
    margin: 28px 16px;
    background: #DB3022;
    box-shadow: 0px 4px 8px rgba(211, 38, 38, 0.25);
    border-radius: 25px;
    color: #fff;
}
</style>