<template>
    <div class="sidebar" id="sidebar">
        <div class="sidebar__container">
            <the-time></the-time>
            <nav class="sidebar__nav nav">
                <ul class="nav__list">
                    <li v-for="item in sidebarLight" :key="item.id" class="nav__item">
                        <img :src="item.icon" alt="icon">
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import TheTime from './TheTime.vue';


const sidebarLight = ref([
    { id: 1, icon: './public/Mobile SignalLight.svg' },
    { id: 2, icon: './public/WifiLight.svg' },
    { id: 3, icon: './public/BatteryLight.svg' },
]);
</script>


<style lang="scss" scoped>
.goToBack{
    width: max-content;
    padding: 0px 8px;
    cursor: pointer;
}
.sidebar {
    position: relative;
    transition: .5s all ease;
    &__container {
        background: #f9f9f9;
        padding: 0px 14px 0px 33px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 44px;
    }
}

.nav {
    &__list {
        display: flex;
        justify-content: center;
        margin: 0;
        padding: 0;
        list-style: none;
    }

    &__item {
        margin: 0px 5px 0px 0px;
    }
}
</style>