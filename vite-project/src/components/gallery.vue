<template>
    <div class="card">
      <img :src="pics.imageurls" alt=""/>
    </div>
    </template>
      
<script setup>
import { onMounted, ref } from 'vue';
import { supabase } from '../supabase';
const pics = ref(getimages);
async function getimages(){
  const { data, error } = await supabase.from('pictures').select('*')
  if (error) {
    console.error('Error fetching data:', error);
    return;
  }
  console.log(data)
  return data
}

onMounted(()=>(getimages()))

</script>
    
<style scoped>
    
</style>