<template>
</template>

<script>
import { onMounted } from 'vue';
import { supabase } from '../supabase';
onMounted(() => {
  getprofiles()
})
export default {
        name: 'alltime',
        data () {
        return {
       Usernames: [],
       Completions: []
        }
        },
      
    }  
    async function getprofiles(){
        try {
    loading.value = true
    const { user } = session.value

    const { data, error, status } = await supabase
      .from('profiles')
      .select(`username`)
      .eq('id')
      .limit(10)
            console.log(data)
    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
    }
</script>

<style lang="scss" scoped>

</style>