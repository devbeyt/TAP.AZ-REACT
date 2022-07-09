import React,{useContext} from 'react'
import{DataContext} from '../App'
function Footer() {

    const context = useContext(DataContext)
    const footerlinks = [
        {id:1,href:'#', linkname:'Layihe haqqinda'},
        {id:2,href:'#', linkname:'Reklam Yerlesdirin'},
        {id:3,href:'#', linkname:'Istifadeci rasilasmasi'},
    ]

    const footerlogo =[
        {id:1,logoname:'Boss az'},
        {id:2,logoname:'Turbo az'},
        {id:3,logoname:'bina az'}
    ]
    return (
        <div className='footer'>
             <div className='container'>
               <div className='footer_top'>
              <div>
                  {
                      footerlinks.map(data=>(
                          <a key={data.id} href={data.href}>{data.linkname}</a>
                      ))
                  }
              </div>
              
              <div>
                  <p className='tel'>Əlaqə: tap@tap.az / (012) 599-08-05; (012)<a  href='#'>505 85 85</a></p>
              </div>
               </div>

               <div className='footer_center d-flex'>
             <div className='footer_col'>
             <ul>
                           <li>
                               {
                                   context.map(data=>(
                                       <a href='#' className='data_city'>{data.city}</a>
                                   ))
                               }
                           </li>
                       </ul>
             </div>

             <div className='footer_col'>
             <ul>
                           <li>
                               {
                                   context.map(data=>(
                                       <a href='#' className='data_city'>{data.city}</a>
                                   ))
                               }
                           </li>
                       </ul>
             </div>

             <div className='footer_col'>
             <ul>
                           <li>
                               {
                                   context.map(data=>(
                                       <a href='#' className='data_city'>{data.city}</a>
                                   ))
                               }
                           </li>
                       </ul>
             </div>

             <div className='footer_col'>
             <ul>
                           <li>
                               {
                                   context.map(data=>(
                                       <a href='#' className='data_city'>{data.city}</a>
                                   ))
                               }
                           </li>
                       </ul>
             </div>
               </div>
               

               <div className='footer_bottom d-flex'>
                     <div>
                         <p className='footer_paragraf'>
                         Mobil versiyası
Saytın Administrasiyası reklam bannerlərinin və yerləşdirilmiş <br/>
elanların məzmununa görə məsuliyyət daşımır.<br/>
© 2008-2021 Digital Classifieds MMC. VÖEN: 140563166
                         </p>
                     </div>

                     <div className='logoname  d-flex'>
                         {
                            footerlogo.map(data=>(
                                <h1>{data.logoname}</h1>
                            )) 
                         }
                     </div>
               </div>
             </div>
        </div>
    )
}

export default Footer
