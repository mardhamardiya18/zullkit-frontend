import { defineStore } from "pinia"
import axios from "axios"

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        user: false
    }),
    getters: {
        isLoggedIn: (state) => state.user,
        getUser: (state) => state.user
    },
    actions: {
        async fetchUser() {
            try {
                const { data } = await axios.get('https://zullkit-backend.buildwithangga.id/api/user', {
                    headers: {
                        Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('token')
                    }
                })
                this.user = data    
            } catch (error) {
                this.user = false
            }
        }
    }
})