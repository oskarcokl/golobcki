<template>
    <div class="hello">
        <div class="row">
            <div class="col-4">
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div class="col-8">

            </div>
        </div>
    </div>
</template>

<script>
    import Card from "./Card";
    export default {
        name: 'Dostava',
        components: {Card},
        props: {
            msg: String
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
