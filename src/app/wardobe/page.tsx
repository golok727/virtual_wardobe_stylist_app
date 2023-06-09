'use client'
import { IconCreate } from '@/assets'
import Authenticated from '@/components/Authenticated'
import IconButton from '@/components/IconButton'
import NewButton from '@/components/NewButton'
import SignOutButton from '@/components/SignOutButton'
import UserWardobe from '@/components/UserWardobe'
import Wrapper from '@/components/utils/Wrapper'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const Page = () => {
  return (
    <Authenticated>
      <Wrapper>
        <AnimatePresence>
          <div className="min-h-screen relative">
            <div className="bg-white rounded-md px-2 py-4 shadow-md sticky top-0 flex justify-between z-10">
              <div>
                <h1 className="font-bold">Wardobe</h1>
                <h3>Your Collection</h3>
              </div>
              {/* Styles created by the user */}
              <SignOutButton />
            </div>

            <UserWardobe />

            <div className="fixed bottom-10 right-10">
              <Link href={'/editor'}>
                <IconButton icon={IconCreate} />
              </Link>
            </div>
          </div>
        </AnimatePresence>
      </Wrapper>
    </Authenticated>
  )
}
export default Page
