import React from 'react'
import {Main} from './Main';

export const Slider = (props) => {
  return (
    <div className={props.getclass}> 
      < Main takePageN = {props.getPageN} />
    </div>
  )
} 
