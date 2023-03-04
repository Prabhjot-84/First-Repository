import React, {useState} from 'react'
import {Navbar} from '../layout/Navbar';
import {Slider} from './Slider';

export const Container = () => {

  const [pageN, setpageN] = useState('main');
  const [sclass, setsclass] = useState('slider');
 
  return (
    <div className="container">
        <Navbar changePageN = {setpageN} changeclass={setsclass} /> 
        <Slider getPageN = {pageN} getclass={sclass} />
    </div>
  )
}
