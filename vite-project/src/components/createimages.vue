<template>
    <div>
        <img :src="Destination.imageurls" alt=""/>
    </div>
</template>

<script setup>
const props = defineProps({
  Destination: Object,
});

</script>

<style scoped>

</style>