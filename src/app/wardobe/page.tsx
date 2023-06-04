'use client'
import Authenticated from '@/components/Authenticated'
import NewButton from '@/components/NewButton'
import SignOutButton from '@/components/SignOutButton'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Page = () => {
  return (
    <Authenticated>
      <AnimatePresence>
        <div className="min-h-screen relative">
          <h1 className="font-bold">Wardobe</h1>
          <h3>Your lib</h3>
          {/* Styles created by the user */}
          <SignOutButton />
          <div className="absolute bottom-10 right-10">
            <Link href={'/editor'}>
              <NewButton />
            </Link>
          </div>
        </div>
      </AnimatePresence>
    </Authenticated>
  )
}
export default Page
