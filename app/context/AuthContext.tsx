'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { doc, getDoc } from 'firebase/firestore'
import { auth, db } from '../Service/firebase'

type Role = 'user' | 'doctor' | null

type AuthContextType = {
  user: User | null
  role: Role
  loading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  role: null,
  loading: true,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [role, setRole] = useState<Role>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUser(null)
        setRole(null)
        setLoading(false)
        return
      }

      setUser(user)

      // check doctor trước
      const doctorSnap = await getDoc(doc(db, 'doctors', user.uid))
      if (doctorSnap.exists()) {
        setRole('doctor')
        setLoading(false)
        return
      }

      // fallback user
      const userSnap = await getDoc(doc(db, 'users', user.uid))
      if (userSnap.exists()) {
        setRole('user')
      } else {
        setRole(null)
      }

      setLoading(false)
    })

    return () => unsub()
  }, [])

  return (
    <AuthContext.Provider value={{ user, role, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
