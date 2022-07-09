import React,{useContext} from 'react'
import { DataContext } from '../App'
import category from '../imgas/category.png' 
function Headermain() {

    const context = useContext(DataContext)
    

    // İnput yanindaki şəhər click etdikde seherler listi acilacaq
    const showCities =(e)=>{
        const menu = document.querySelector('.menu');
        if(menu === menu){
            menu.classList.toggle('menu_active')
        }

        e.preventDefault();
     }



    

     // Katalog bolmesine click etdikde seherler listi acilacaq
     const showCategory =(e)=>{
         const categorylist = document.querySelector('.categorylist');
         if(categorylist === categorylist){
             categorylist.classList.toggle('categorylist_active')
         }
 
         e.preventDefault();
      }


    return (

        // Yuxaridaki input ve button bolmesi
        <div className='header_main'>
       <div className='container d-flex align-center'>
      
    <div className='category d-flex'>
    <a href='№' className='logo'>tap az</a>
       <a href='№' className='category_link'>
       <img src={category} onClick={showCategory}/><span onClick={showCategory}>Katolog</span> 

       {/* katalog bolmesine click etdikde acilacaq */}
       <div className="categorylist">
          <ul>
              <li>
              {
              context.map(data=>(
                  <a href='#'>{data.city}</a>
              ))
          }
              </li>
          </ul>

       </div>

       </a>
    </div>

 <form>   
 <input type='search' placeholder='əşya və ya xidmət axtarışı'/>
   <button onClick={showCities} className='d-flex cities_select'><i class="fas fa-map-marker-alt"></i><p>Şəhər</p>
   <i class="fas fa-chevron-down"></i></button>

  <button className='search_btn d-flex'>
  <i class="fas fa-search"></i>Tap</button>
 </form>

 <a  className='plus_btn' href='#'><i class="fas fa-plus-circle"></i> Yeni elan</a>
       </div>

       {/* Şəhər click etdikde gorsənəcək şəhərlərin listi */}
       <div className='menu d-flex'>

            <div>
         <ul>
               <li>
               {
                  context.map(data=>(
                      <a href='#'>{data.city}</a>
                  ))
              }
               </li>
           </ul>
         </div>

         <div>
         <ul>
               <li>
               {
                  context.map(data=>(
                      <a href='#'>{data.city}</a>
                  ))
              }
               </li>
           </ul>
         </div>

         <div>
         <ul>
               <li>
               {
                  context.map(data=>(
                      <a href='#'>{data.city}</a>
                  ))
              }
               </li>
           </ul>
         </div>

         <div>
         <ul>
               <li>
               {
                  context.map(data=>(
                      <a href='#'>{data.city}</a>
                  ))
              }
               </li>
           </ul>
         </div>

         <div>
         <ul>
               <li>
               {
                  context.map(data=>(
                      <a href='#'>{data.city}</a>
                  ))
              }
               </li>
           </ul>
         </div>

         <div>
         <ul>
               <li>
               {
                  context.map(data=>(
                      <a href='#'>{data.city}</a>
                  ))
              }
               </li>
           </ul>
         </div>
           </div>
       </div> 
    
    )
}

export default Headermain
