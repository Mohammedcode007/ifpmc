import React from 'react'
import BasicTabs from '../custom/BasicTabs'
import MostRecentContentPublications from './MostRecentContentPublications'
import { projects } from '../../data/homeData';
import { publications } from '../../data/homeData';

const ContentPub = () => {
  return (
    <div style={{backgroundColor:'white'}}>
        <BasicTabs tabone={<MostRecentContentPublications projects={projects}  />} />
      
    </div>
  )
}

export default ContentPub
