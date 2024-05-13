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
import { supabase } from '../supabase'
const { data } = supabase
  .storage
  .from('Stereograms')
  .getPublicUrl('Stereograms/elephant.png')
  setImageUrl(data.publicUrl) 

</script>

<style lang="scss" scoped>

</style>