import React from 'react'
import avatar from './images/avatar.jpg'
import './output.scss'

function Output({data, file, handleDelete, searchData, setSearch}) {
   console.log("aaaa",data)
  return (
    <div className='output'>
        {data.length === 0 ?
        
                <>
                    <p className='outputWarning'>No data found</p>
                </>
                :
                <>
                  {
                    searchData.length === 0 ?
                    data.map((item) => {
                        return(
                            <div className='profileCard'>
                            <div className='avatar'>
                                <img src={file} />
                            </div>
                            <div className='studentInformation'>
                                 <section>
                                     <div>Student ID: {item.id}</div>
                                    <div>First Name: {item.firstName}</div>
                                    <div>Last Name: {item.lastName}</div>
                                    <div>Email Address: {item.email}</div>
                                    <div>Contact#: {item.contact}</div>
                                    <div>Course: {item.courses}</div>
                                    <div>Gender: {item.gender}</div>
                                 </section>
            
                                 <div>
                                    <input type="submit" value="Update" className='button'/>
                                    <input type="submit" value="Delete" className='button' onClick={()=>{handleDelete(item.id)}}/>
                                 </div>
                            </div>
                           
                    </div>
                        )
                    }) : 
                    searchData.map((item) => {
                        return(
                            <div className='profileCard'>
                            <div className='avatar'>
                                <img src={file} />
                            </div>
                            <div className='studentInformation'>
                                 <section>
                                     <div>Student ID: {item.id}</div>
                                    <div>First Name: {item.firstName}</div>
                                    <div>Last Name: {item.lastName}</div>
                                    <div>Email Address: {item.email}</div>
                                    <div>Contact#: {item.contact}</div>
                                    <div>Course: {item.courses}</div>
                                    <div>Gender: {item.gender}</div>
                                 </section>
            
                                 <div>
                                    <input type="submit" value="Update" className='button'/>
                                    <input type="submit" value="Delete" className='button' onClick={()=>{handleDelete(item.id)}}/>
                                 </div>
                            </div>
                           
                    </div>
                        )
                    })
                }
                </>
              
        }
       
           
        
      
    </div>
  )
}

export default Output