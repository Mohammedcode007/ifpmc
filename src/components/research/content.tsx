import React from 'react'
import BasicTabs from '../custom/BasicTabs'
import MostRecentContent from './MostRecentContent'

const Content = () => {
  return (
    <div style={{backgroundColor:'white'}}>
        <BasicTabs tabone={<MostRecentContent/>} />
      
    </div>
  )
}

export default Content
