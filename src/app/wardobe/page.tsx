'use client'
import Authenticated from '@/components/Authenticated'
import SignOutButton from '@/components/SignOutButton'
import { useAuthContext } from '@/context/AuthContext'

const Page = () => {
  const { authUser } = useAuthContext()
  return (
    <div>
      <Authenticated>
        <h1 className="font-bold">Wardobe</h1>
        {authUser?.email}
        <SignOutButton />
      </Authenticated>
    </div>
  )
}
export default Page
