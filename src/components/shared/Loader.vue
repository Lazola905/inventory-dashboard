<template>
  <span class="loader mt-4"></span>
</template>

<script>
    export default {
        name: 'Loader'
    }
</script>

<style>
    .loader {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: block;
        margin: 15px auto;
        position: relative;
        background: #3729f5a3;
        box-sizing: border-box;
        animation: shadowExpandX .5s linear infinite alternate;
    }

    @keyframes shadowExpandX {
        0% {
            box-shadow: 0 0, 0 0;
            color: #3729f54e;
        }
        100% {
            box-shadow: -24px 0, 24px 0;
            color: #3729f58f;
        }
    }
</style>