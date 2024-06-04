<template>
    <div>
      {{ userSession.session }}
    </div>    
    <button className="p-4 bg-blue-400 text-white rounded-xl hover:bg-blue-500" @click="logOut">
      Sign Out
    </button>

</template>
  
  <script setup>
  import { supabase } from '../supabase.js';
  import { userSessionStore } from '../stores/userSession.js';
  import {ref} from 'vue'
  import router from '../router';
  // initialize userSession store
  const userSession = userSessionStore()
  // logout function
  const logOut = async () => {
    try {
      const { error } = await supabase.auth.signOut().then(router.push('/'))
      if(error) throw error
    } catch(error){
      alert(error.message)
    }
  }

  </script>