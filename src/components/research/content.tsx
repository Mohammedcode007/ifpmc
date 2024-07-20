import React from 'react'
import BasicTabs from '../custom/BasicTabs'
import MostRecentContent from './MostRecentContent'
import { projects } from '../../data/homeData';
import { publications } from '../../data/homeData';

const Content = () => {
  return (
    <div style={{backgroundColor:'white'}}>
        <BasicTabs tabone={<MostRecentContent projects={projects}/>} />
      
    </div>
  )
}

export default Content
