'use client'
import Hero from '@/components/Hero'
import NavBar from '@/components/NavBar'
import Showcase from '@/components/Showcase'
import { useAuthContext } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Home() {
  const { authUser } = useAuthContext()
  const router = useRouter()
  useEffect(() => {
    if (authUser) router.push('/wardobe')
  }, [])
  return (
    <div className="min-h-screen relative">
      <NavBar />

      <Hero />
      <Showcase />
    </div>
  )
}
