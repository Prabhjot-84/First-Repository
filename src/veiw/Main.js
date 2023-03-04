import React, {useState} from 'react' 
import {PageB} from './PageB';
import {PageC} from './PageC';
import {PageD} from './PageD';

export const Main = (props) => {

  return (
    <div className = {`${props.takePageN}`} >
        <PageB/> 
        <PageC/>
        <PageD/>
    </div>
  )
}
