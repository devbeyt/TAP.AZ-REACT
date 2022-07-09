import React,{useContext} from 'react'
import {DataContext} from '../App'


function Butttons() {


    // Burasi footer den yuxaridaki buttonlar bolmesidir
    const context = useContext(DataContext)
    return (
        <div className='buttons_section'>
            <div className='container wrap'>
                 
                  {
                      context.map(data=>(
                          <a href='#' key={data.id} className='link'>{data.link}</a>
                      ))
                  }
            </div>
        </div>
    )
}

export default Butttons
