import React,{ useState} from 'react'
import XMLParser from 'react-xml-parser';
import {useNavigate} from 'react-router-dom'
import { bookData } from '../Redux/BookSlider';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


const SearchBook = ({data}) => {
  const [searchData,SetSearchData]=useState([])
  const user=useSelector((state)=>state.user)
  console.log(user);
  const dispatch=useDispatch();
  const [bookName,SetBookName]=useState("");
  const navigate=useNavigate();

  const handleChange=(e)=>{
    const searchWord=e.target.value;
    const newWord=data.filter((value)=>{
      return value.title.toLowerCase().includes(searchWord.toLowerCase());
    })
    if(searchWord===""){
      SetSearchData([]);
    }
    else {
      SetSearchData(newWord);
    }
    SetBookName(newWord)
  }

  const handleClick=()=>{
    fetch(`https://www.goodreads.com/search.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${bookName}`)
        .then(res => res.text())
        .then(data => {
            var xml = new XMLParser().parseFromString(data); 
            const Data=xml.children.slice(-1)[0].children.slice(-1[0]).slice(-1)[0].children[0].children
            console.log(Data);
            dispatch(bookData(
              {newData:Data}
            ))

            navigate("/DisplayBook")
        })
  }
  return (
    <div className='Signup'>
      <div style={{display:'flex',flexDirection:'column'}}>
          <h1>Library Manegement System</h1>
          <input
          type="text"
          placeholder='Please Enter Book Name'
          onChange={handleChange}
        />
          <button style={{marginTop:20}} onClick={handleClick}>Search</button>
          {searchData.length !==0 &&
            <div className='dataResult'>
              {searchData.slice(0,5).map((data,i)=>(
                <ul key={i}>
                  <p onClick={()=>{handleClick(data.title)}}>{data.title}</p>
                </ul>
              ))}
            </div>
          } 
      </div>
    </div>
  )
}

export default SearchBook

