import React,{useContext} from 'react'
import {DataContext} from '../App'

function Section() {

    const context = useContext(DataContext)
    return (

        // Burasi merkezdeki dairelerin altindaki qutular bolmesidir
        <div className='section_box'>
            <div className='container wrap'>
             {
                 context.map(data => (
                    <div key={data.id} className='box'>
                    <img src={data.image}/>
                   <div className='box_bottom'>
                   <h3>{data.price}</h3>
                    <h4>{data.text}</h4>
                    <p>{data.date}</p>
                   </div>
                    </div>
                 ))
             }


             {/* <div className='L'><h1>REKLAM</h1></div>
             <div className='R'><h1>REKLAM</h1></div> */}
            </div>
        </div>
    )
}

export default Section
