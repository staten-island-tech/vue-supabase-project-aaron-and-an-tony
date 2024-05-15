<template>
<div class="perks">
  <div class="title">Gallery</div>
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
import { ref } from 'vue';
async function yay() {
const { data } = await supabase
.from('Stereogramtable')
.select('imageurls')
console.log(data);
return data;
}
const data = yay()
</script>

<style lang="scss" scoped>

</style>