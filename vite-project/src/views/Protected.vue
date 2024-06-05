<template>
    <div class="container" style="padding: 50px 0 100px 0">
        <Account v-if="session" :session="session" />
        <NavBar v-else />
      </div>
    
</template>
    
<script setup>
    import { onMounted, ref } from 'vue';
    import { supabase } from '../supabase';
    import Account from '../components/Account.vue'
    import NavBar from '../components/NavBar.vue'
    const session = ref()
    
    onMounted(() => {
      supabase.auth.getSession().then(({ data }) => {
        session.value = data.session
      })
    
      supabase.auth.onAuthStateChange((_, _session) => {
        session.value = _session
      })
    })
</script>