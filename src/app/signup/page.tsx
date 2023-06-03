'use client'

import { FirebaseError } from 'firebase/app'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/context/AuthContext'

const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()
  const { signUp } = useAuthContext()
  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (!email || !password) {
      alert('all fields are required')
      return
    }
    if (password !== confirmPassword) {
      alert('Passwords does not match')
      return
    }

    const { result, error } = await signUp(email, password)
    if (error) return console.log((error as FirebaseError)?.code)

    // auth/weak-password
    // auth/email-already-in-use
    console.log(result)
    console.log('Submit')
    router.push('/login')
  }

  return (
    <div className="min-h-screen grid place-items-center">
      <form onSubmit={handleSubmit} className="w-[50ch] grid gap-4">
        <h2>Welcome To Virtual Wardobe Stylist</h2>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-transparent border-[1px] rounded-md px-3 py-2"
            type="email"
            name=""
            id="email"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-transparent border-[1px] rounded-md px-3 py-2"
            type="password"
            name=""
            id="password"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Confirm Password</label>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Enter Password Again"
            className="bg-transparent border-[1px] rounded-md px-3 py-2"
            type="password"
            name=""
            id="password"
          />
        </div>

        <div>
          <input type="submit" value="SignUp" className="cursor-pointer" />
        </div>
      </form>
    </div>
  )
}

export default Page
