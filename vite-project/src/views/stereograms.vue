<template>
<div class="perks">
  <div class="title">Gallery</div>
</div> 
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { supabase } from '../supabase';
let pics = ref('getimages');
async function getimages(){
  const { data, error } = await supabase.from('pictures').select('*')
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  pics = data
  console.log(data)
}
onMounted(()=>(getimages()))
</script>

<style lang="scss" scoped>

</style>