<template>
     <div v-for="(profile) in profiles" >
            <h1>{{ profile.username }}</h1>
            <h2>{{ profile.score }}</h2>
    </div>
</template>

<script setup>
    import { supabase } from '../supabase';
    import { onMounted, ref, toRefs } from 'vue'

const props = defineProps(['session'])
const { session } = toRefs(props)

const profiles = ref('profiles')
const user = ref(null)
onMounted(async()=>{
  
  const { data:raw_profiles, error:err } = await supabase.from('leaderboard').select('*').limit(10)
  raw_profiles.sort((a, b) => {
    return b.score - a.score
  })
  console.log(raw_profiles)

  if (err) {
    console.error('Error fetching data:', err);
    return;
  }

  profiles.value = raw_profiles
  console.log(profiles.value)
  const { data: { user: currentUser } } = await supabase.auth.getUser()
  user.value = currentUser
})
</script>

<style scoped>

</style>
