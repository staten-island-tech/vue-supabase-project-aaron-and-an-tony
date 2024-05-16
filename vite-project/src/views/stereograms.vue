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
  const { data } = await supabase.from('Stereogramtable').select("imageurls")
  pics = data
  console.log(data)
}
onMounted(()=>(getimages()))
</script>

<style lang="scss" scoped>

</style>