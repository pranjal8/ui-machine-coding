import React from 'react'
import Tree from './Tree'

const FileExplorer = ({data}) => {
  return (
    <div>
      <Tree nodes={data}/>
    </div>
  )
}

export default FileExplorer