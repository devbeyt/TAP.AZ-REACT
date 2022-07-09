import React,{useContext} from 'react'
import { DataContext } from '../App'


function Categories() {
   
    const categories =[
        // category bolmesindeki circle ve icerisindeki iconlar bolmesidir
{id:1,categoryIcon:'fas fa-camera-retro',categoryText:'Ev və bağ üçün'},
{id:2,categoryIcon:'fas fa-mobile-alt',categoryText:'Elektronika'},
{id:3,categoryIcon:'fas fa-home',categoryText:'Daşınmaz əmlak'},
{id:4,categoryIcon:'fas fa-car',categoryText:'Nəqliyyat'},
{id:5,categoryIcon:'fas fa-tshirt',categoryText:'Şəxsi əşyalar'},
{id:6,categoryIcon:'fas fa-wrench',categoryText:'Xidmmətlər və biznes'},
{id:7,categoryIcon:'fas fa-guitar',categoryText:'Hobbi və Asudə'},
{id:8,categoryIcon:'fas fa-baby',categoryText:'Uşaq Aləmi'},
{id:9,categoryIcon:'fas fa-paw',categoryText:'Heyvanlar'},
{id:10,categoryIcon:'fas fa-briefcase',categoryText:'Is elanlari'},
{id:11,categoryIcon:'fas fa-border-all',categoryText:'Butun kategoriyalar'}, 
{id:12,categoryIcon:'fas fa-store',categoryText:'Magazalar'},
]

    return (
        <div className='categories_section'>
            <div className='container wrap'>

                {/* circle -lar map ile tekrarlamisam */}
 
                {
                     categories.map(category =>(
                         <div className='circle_top'>
                             <div className='circle'>
                                 <span  className={category.categoryIcon}></span>
                             </div>
                             <a href='#' className='circle_text'>{category.categoryText}</a>
                         </div>
                     ))   
                                         
                 }
               
                 </div> 
                  
                 
             </div>
           
        
    )
}

export default Categories
