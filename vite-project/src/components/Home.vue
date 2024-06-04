<template>
    <div>
      {{ userSession.session }}
    </div>
    <button className="p-4 bg-blue-400 text-white rounded-xl hover:bg-blue-500" @click="login" v-if="!userSession.session">
      Sign In
    </button>
    <button className="p-4 bg-blue-400 text-white rounded-xl hover:bg-blue-500" @click="logOut" v-else>
      Sign Out
    </button>
  </template>
  
  <script setup>
  import { supabase } from '../utils/supabase';
  import { userSessionStore } from '../stores/userSession';
  import router from '../router';
  // initialize userSession store
  const userSession = userSessionStore()
  // login function
  const login = async () => {
    try {
      const { error } = await supabase.auth.signIn({ email: 'elon_musk@gmail.com', password: 'Te$l@' })
      if (error) throw error
    } catch (error) {
      alert(error.message)
    }
  }
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