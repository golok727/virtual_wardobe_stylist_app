import WardobeEditorCanvas from '@/WardobeEditorCanvas'
import Authenticated from '@/components/Authenticated'
import React from 'react'

const Page = () => {
  return (
    <Authenticated>
      <WardobeEditorCanvas />
    </Authenticated>
  )
}

export default Page
