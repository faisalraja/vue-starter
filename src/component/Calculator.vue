<script>
    export default {
        data() {
            return {
                a: 0,
                b: 0
            }
        }
    }
</script>

<style lang="scss">

</style>

<template>
    <div class="container">
        <div class="level">
            <div class="level-left">
                <div class="level-item">
                    <input type="number" class="input" v-model="a" />
                </div>
                <div class="level-item">
                    +
                </div>
                <div class="level-item">
                    <input type="number" class="input" v-model="b" />
                </div>
                <div class="level-item">
                    = {{ Number(a) + Number(b) }}
                </div>
            </div>
        </div>
    </div>
</template>
