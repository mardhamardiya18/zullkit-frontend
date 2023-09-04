import { defineStore } from "pinia"
import axios from "axios"

export const useUserStore = defineStore({
    id: "user",
    state: () => ({
        authUser: null,
    }),
    getters: {
        isLoggedIn: (state) => state.authUser,
        getUser: (state) => state.authUser
    },
    actions: {
        async fetchUser() {
            try {
                const { data } = await axios.get('https://zullkit-backend.belajarkoding.com/api/user', {
                    headers: {
                        Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('token')
                    }
                })
                this.authUser = data   
            } catch (error) {
                this.authUser = null
            }
        }
    }
})