<template>
    <router-link>
        <h3> image</h3>
        <h2> image.id</h2>
    </router-link>
</template>

<script>
import { supabase } from '../supabase'
const { data } = supabase
  .storage
  .from('public-bucket')
  .getPublicUrl('Stereograms/avatar1.png')
</script>

<style lang="scss" scoped>

</style>