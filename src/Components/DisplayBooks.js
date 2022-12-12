import React from 'react'
import { useSelector } from 'react-redux';

const DisplayBooks = () => {

    const data=useSelector((state)=>state.book)
    console.log(data[0].data);
  return (
    <div className='Signup'>
    {data[0].data.map((data,i)=>(
        <ul key={i} style={{listStyle:'none'}}>
            <li>{data.name}:{data.value}</li>
        </ul>
    ))}

    </div>
  )
}

export default DisplayBooks