<template>
    <router-link>
        <h3><img src='ImageUrl' alt="Dinosaur" /></h3>
        <h2> image.id</h2>
    </router-link>
</template>

<script>
import { supabase } from '../supabase'
const { data } = supabase
  .storage
  .from('Stereograms')
  .getPublicUrl('Stereograms/elephant.png')
  setImageUrl(data.publicUrl) 

</script>

<style lang="scss" scoped>

</style>