<template>
   <div>
      <label for="Wins">Completions</label>
      <input id="Wins" type="text" v-model="Wins" />
    </div>
    <div>
      <input
        type="submit"
        class="button primary block"
        :value="loading ? 'Loading ...' : 'Update'"
        :disabled="loading"
      />
    </div>
</template>

<script>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'
import router from '../router';

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const Wins = ref('')

async function updateProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      Completions: Wins.value,
    }

    const { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

const logOut = async () => {
    try {
      const { error } = await supabase.auth.signOut().then(router.push('/'))
      if(error) throw error
    } catch(error){
      alert(error.message)
    }
  }
</script>

<style lang="scss" scoped>

</style>