import axios from "axios"
import { router } from "expo-router"
import * as SecureStore from "expo-secure-store"
import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react"

import { config } from "@/lib/config"

interface AuthProps {
  authState?: { token: object | null; authenticated: boolean }
  verifyOTP: (username: string, otp: string) => Promise<any>
  requestOTP: (username: string) => Promise<any>
  logout: () => Promise<any>
  isLoading: boolean
}

const AuthContext = createContext<AuthProps>({
  authState: { token: null, authenticated: false },
  verifyOTP: async () => {},
  requestOTP: async () => {},
  logout: async () => {},
  isLoading: true,
})

export function useAuth() {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [authState, setAuthState] = useState<AuthProps["authState"]>({
    token: null,
    authenticated: false,
  })

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadAuthState()
  }, [])

  async function loadAuthState() {
    try {
      const token = await SecureStore.getItemAsync(config.TOKEN_KEY)

      if (token) {
        setAuthState({ token: JSON.parse(token), authenticated: true })
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
      }
    } catch (error) {
      console.error("Error loading auth state:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const requestOTP = async (username: string) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${config.API_URL}/authenticate-user-otp`,
        data: { username },
      })

      if (response.status === 200) {
        await SecureStore.setItemAsync("username", username)

        alert(String(response.data.message))
      }
    } catch {
      throw new Error("Something went wrong!")
    }
  }

  const verifyOTP = async (username: string, otp: string) => {
    try {
      const response = await axios({
        method: "POST",
        url: `${config.API_URL}/verify-otp`,
        data: { username, otp },
      })

      const token = response.data.token

      setAuthState({
        token,
        authenticated: true,
      })
      await SecureStore.setItemAsync(config.TOKEN_KEY, token)

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

      return response
    } catch (error) {
      throw error
    }
  }

  const logout = async () => {
    try {
      await SecureStore.deleteItemAsync(config.TOKEN_KEY)

      axios.defaults.headers.common["Authorization"] = ""

      setAuthState({
        token: null,
        authenticated: false,
      })
      router.replace("/")
    } catch (error) {
      console.log(`Error logging out: ${error}`)
    }
  }

  const value = {
    verifyOTP,
    requestOTP,
    logout,
    authState,
    isLoading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
