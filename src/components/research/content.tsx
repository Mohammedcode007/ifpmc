import React from 'react'
import BasicTabs from '../custom/BasicTabs'
import MostRecentContentProjects from './MostRecentContentProjects'
import { projects } from '../../data/homeData';
import { publications } from '../../data/homeData';

const Content = () => {
  return (
    <div style={{backgroundColor:'white'}}>
        <BasicTabs tabone={<MostRecentContentProjects projects={projects}  />} />
      
    </div>
  )
}

export default Content
