<template>
    <div>
    {{ userSession.session }}
    </div>
    <button className="p-4 bg-blue-400 text-white rounded-xl hover:bg-blue-500" @click="logOut">
        Sign Out
    </button>
</template>

<script>
import { supabase } from '../supabase.js';
import router from '../router'
import {ref} from 'vue'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from '../App.vue'
import { userSessionStore } from '../stores/userSession.js';
// initialize userSession store
const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

const userSession = ref((userSessionStore()))

// logout function
const logOut = async () => {
    try {
        const { error } = await supabase.auth.signOut().then(router.push('/'))
        if (error) throw error
    } catch (error) {
        alert(error.message)
    }
}
</script>