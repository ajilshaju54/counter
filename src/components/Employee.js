import React from 'react'


function Employee() {

const Employee=[
    {username:'john',age:23},
    {username:'joy',age:22},
    {username:'ajil',age:23},
    {username:'amal',age:21},
]

  return (
    <div className='center2'>
      {
        Employee.map(item=>(
            <p>username:{item.username}
            <br />
            Age : {item.age}
            </p>
         ) )
      }
    </div>
  )
}

export default Employee
