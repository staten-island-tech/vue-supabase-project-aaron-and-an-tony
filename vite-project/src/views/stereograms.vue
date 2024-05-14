<template>
<div class="perks">
  <div class="title">Shop</div>
  <createimages
    v-for="(destination,index) in data"
    :key="index"
    :Destination="destination"
  /> 
</div> 
</template>

<script setup>
import createimages from '../components/createimages.vue';
import { supabase } from '../supabase';
const { data } = await supabase
.from('Stereogramtable')
.select('imageurls')
console.log(data)
</script>

<style lang="scss" scoped>

</style>