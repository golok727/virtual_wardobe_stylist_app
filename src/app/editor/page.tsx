import WardobeEditorCanvas from '@/WardobeEditorCanvas'
import Authenticated from '@/components/Authenticated'
import Controls from '@/components/Controls'
import React from 'react'

const Page = () => {
  return (
    <Authenticated>
      <div className="relative">
        <WardobeEditorCanvas />
        <Controls />
      </div>
    </Authenticated>
  )
}

export default Page
