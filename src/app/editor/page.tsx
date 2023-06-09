import Controls from '@/Controls'
import EditorCanvas from '@/EditorCanvas'

import Authenticated from '@/components/Authenticated'
import Wrapper from '@/components/utils/Wrapper'
import React from 'react'

const Page = () => {
  return (
    <Authenticated>
      <div className="w-full min-h-full overflow-hidden">
        <EditorCanvas />

        <Controls />
      </div>
    </Authenticated>
  )
}

export default Page
