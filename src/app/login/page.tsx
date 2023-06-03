'use client'

import { FirebaseError } from 'firebase/app'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/context/AuthContext'
import Button from '@/components/Button'
import { motion } from 'framer-motion'
import Link from 'next/link'
import ErrorMessage from '@/components/ErrorMessage'

const FIREBASE_ERROR_MESSAGES: any = {
  'auth/wrong-password': 'Password is incorrect',
  'auth/user-not-found':
    'User Does not exist make a new account or\n check your credentials',
}
const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  const { signIn } = useAuthContext()
  const router = useRouter()

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (!email) {
      if (emailRef.current) emailRef.current.focus()
      setErrMsg('Email Field Is Required')
      return
    }

    if (!password) {
      if (passwordRef.current) passwordRef.current.focus()
      setErrMsg('Password Field Is Required')
      return
    }
    setIsLoading(true)
    const { result, error } = await signIn(email, password)
    setIsLoading(false)
    if (error) {
      const errCode = (error as FirebaseError)?.code ?? ''
      setErrMsg(FIREBASE_ERROR_MESSAGES[errCode] ?? '')

      return console.log((error as FirebaseError)?.code)
    }

    // auth/wrong-password

    // auth/user-not-found

    setErrMsg('')
    setEmail('')
    setPassword('')
    router.push('/wardobe')
  }

  useEffect(() => {
    setErrMsg('')
  }, [email, password])

  return (
    <div className="min-h-screen grid place-items-center relative">
      <form
        onSubmit={handleSubmit}
        className="text-white w-[50ch] grid gap-6 bg-gradient-to-r from-red-500 to-violet-600 rounded-md shadow-xl py-5 px-6"
      >
        <h2 className="font-bold text-2xl">Welcome Back</h2>
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          className="flex flex-col  gap-2"
        >
          <label className="font-bold" htmlFor="email">
            Email
          </label>
          <input
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-white text-black rounded-md px-3 py-2"
            type="email"
            name="email"
            autoComplete="email"
            id="email"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          className="flex flex-col gap-2"
        >
          <label className="font-bold" htmlFor="password">
            Password
          </label>
          <input
            ref={passwordRef}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="bg-white text-black border-[1px] rounded-md px-3 py-2"
            type="password"
            autoComplete="current-password"
            name=""
            id="password"
          />
        </motion.div>

        <div className="place-self-center">
          <Button type="submit" variant="submit" disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Login'}
          </Button>
        </div>

        <div>
          <p>
            Don&apos;t have an account?{' '}
            <Link href={'/signup'} className="font-bold underline text-xs">
              Make One
            </Link>
          </p>
        </div>
      </form>

      {/* Error */}
      {errMsg && <ErrorMessage message={errMsg} />}
    </div>
  )
}

export default Page
