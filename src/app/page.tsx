'use client'
import SignOutButton from '@/components/SignOutButton'
import { useAuthContext } from '@/context/AuthContext'

export default function Home() {
  const { authUser } = useAuthContext()
  return (
    <div className="">
      <h1>Radhey Shyam</h1>
      {authUser?.email}

      <SignOutButton />
    </div>
  )
}
