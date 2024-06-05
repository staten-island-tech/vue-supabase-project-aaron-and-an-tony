<template>
  <div class="container" style="padding: 50px 0 100px 0">
  <Gallery v-if="session" :session="session"/> 
  <div id="container">
    <div v-for="(pic, index) in pics" >
      <img :src="pic.imageurls"/>
      <div>
        <label>Answer: </label>
        <input type="input" :id="`q${index}`"/>
        <button @click="checkAnswer(`q${index}`,pic.answers)">Submit</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { supabase } from '../supabase';
import Gallery from '../components/gallery.vue'
import { onMounted, ref, toRefs } from 'vue'
import NavBar from '../components/NavBar.vue'

const props = defineProps(['session'])
const { session } = toRefs(props)
const pics = ref('getimages');
const profiles = ref('profiles')
const user = ref(null)

onMounted(async()=>{
  
  const { data, error } = await supabase.from('pictures').select('*')
  const { data:raw_profiles, error:err } = await supabase.from('profiles').select('*')

  if (error) {
    console.error('Error fetching data:', error);
    return;
  }

  pics.value = data
  profiles.value = raw_profiles
  const { data: { user: currentUser } } = await supabase.auth.getUser()
  user.value = currentUser
})

const checkAnswer = async(reference, answer)=>{
  let ans = document.getElementById(reference).value
  if (ans.toLowerCase() == answer.toLowerCase()) {
    if (!profiles.value.Completions){
      profiles.value.Completions = []
      const { error } = await supabase.from('profiles').update({ id: user.value.id }).eq('Completions', [])
    }else if (!profiles.value.Completions.includes(reference)){
      profiles.value.Completions.append(reference)
      const { error } = await supabase.from('profiles').update({ id: user.value.id }).eq('Completions', profiles.value.Completions)
    }
  }
}

</script>
