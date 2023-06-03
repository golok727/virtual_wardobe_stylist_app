'use client'

import { FirebaseError } from 'firebase/app'
import { FormEvent, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuthContext } from '@/context/AuthContext'
import Button from '@/components/Button'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ErrorMessage from '@/components/ErrorMessage'

const FIREBASE_ERROR_MESSAGES: any = {
  'auth/weak-password': 'Password Must Be at least 8 letters long',
  'auth/email-already-in-use': 'Email provided is already in use',
}
const Page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const router = useRouter()
  const { signUp } = useAuthContext()
  const [errMsg, setErrMsg] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)
  const confirmPasswordRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    if (!email) {
      setErrMsg('Please Enter Your Email Id')
      if (emailRef.current) emailRef.current.focus()
      return
    }

    if (!password) {
      setErrMsg('Please Enter Your password')

      if (passwordRef.current) passwordRef.current.focus()
      return
    }

    if (password !== confirmPassword) {
      setErrMsg('Passwords does not match')

      if (confirmPasswordRef.current) confirmPasswordRef.current.focus()
      return
    }

    setIsLoading(true)
    const { result, error } = await signUp(email, password)
    setIsLoading(false)
    if (error) {
      const errCode = (error as FirebaseError)?.code ?? ''
      console.log(errCode)
      setErrMsg(FIREBASE_ERROR_MESSAGES[errCode] ?? '')
      return
    }

    // auth/weak-password
    // auth/email-already-in-use
    router.push('/wardobe')
  }

  return (
    <div className="min-h-screen grid place-items-center relative">
      <form
        onSubmit={handleSubmit}
        className="w-[50ch] grid gap-6 bg-gradient-to-r from-red-500 to-violet-600 rounded-md shadow-xl py-5 px-6 text-white"
      >
        <h2 className="text-2xl font-bold text-white">
          Welcome To Virtual Wardobe Stylist
        </h2>
        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          className="flex flex-col"
        >
          <label className="font-bold" htmlFor="email">
            Email
          </label>
          <input
            ref={emailRef}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="bg-white text-black border-[1px] rounded-md px-3 py-2"
            type="email"
            name=""
            id="email"
            autoComplete="off"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          className="flex flex-col"
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
            name=""
            autoComplete="new-password"
            id="password"
          />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{
            scale: 1,
          }}
          className="flex flex-col"
        >
          <label className="font-bold" htmlFor="password">
            Confirm Password
          </label>
          <input
            ref={confirmPasswordRef}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Enter Password Again"
            className="bg-white text-black border-[1px] rounded-md px-3 py-2"
            type="password"
            name=""
            autoComplete="new-password"
            id="confirm-password"
          />
        </motion.div>

        <div className="place-self-center">
          <Button variant="submit" disabled={isLoading} type="submit">
            {isLoading ? 'Loading...' : 'SignUp'}
          </Button>
        </div>

        <div>
          <p>
            Already have an account?{' '}
            <Link href={'/login'} className="font-bold underline text-xs">
              Get into my wardobe
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
