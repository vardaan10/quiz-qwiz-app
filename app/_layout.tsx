import "@/global.css"
import { AuthProvider } from "@/lib/context/auth"
import ProtectedRoute from "@/components/ProtectedRoute"

export default function RootLayout() {
  return (
    <AuthProvider>
      <ProtectedRoute />
    </AuthProvider>
  )
}
