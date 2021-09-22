<template>
    <div class="wrap">
        <div class="container-lucas">
            <h2>Salut c Lucas</h2>
            <button @click="count++">cliquez moi</button>
            <p>{{count}}</p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'Lucas',
    data () {
        return {
            count: 0
        }
    },
}
</script>

<style>
    .wrap {
        width: 60%;
        margin: auto;
    }

    .container-lucas {
        padding: 2rem 0;
        background-color: red;
        color: white;
        border-radius: 20px;
        color: white
    }
</style>