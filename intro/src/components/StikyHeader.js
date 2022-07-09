import React,{} from 'react'

function StikyHeader() {
 
    // stiky bolmesindeki linkler
     const items=[
        {id:1, title:'Turbo.az',url:'#'},
        {id:2, title:'Bina.az',url:'#'},
        {id:3, title:'Boss.az',url:'#'},
        ]
       
      const items2 =[
          {id:1,title:'Dəstək (012) 599-08-05',url:'#'},
          {Id:2, title:'Yardim',url:'#'},
          {Id:3, title:'RU',url:'#'},
                       
          {Id:1,classN:'fas fa-heart', title:'Secilmisler',url:'#'},
          {Id:2,classN:'fas fa-user-circle', title:'Giris',url:'#'},

      ]  
     
   
   
    return (
        <stikyheader>
            <div className='stiky'>
               <div className='container'>
                   <div className='intro_center'>
                       <div className='left_bar'>
                           {/* stiky bolmesindeki linkleri tekrarlamisam */}
                          {
                             items.map(item => <a key={item.id} href='#'>{item.title}</a>)
                          }
                       </div>

                       <div className='right_bar'>
                      {
                          items2.map(item=> <a key={item.id} href='#' className={item.classN}>{item.title}</a>)
                      }
                      
                       </div>
                   </div>
               </div>
            </div>
        </stikyheader>
    )
}

export default StikyHeader
