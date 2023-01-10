import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import '../Style/readbook.css'

const ReadBook = () => {
let[book,setBook]=useState([])

//to get route parameter
let params=useParams()

useEffect(()=>{
    let fetchData=async()=>{
        let response=await fetch(`http://localhost:2002/book/${params.id}`)
        let data= await response.json()
        setBook(data)
    }
    fetchData()
},[])

    return (
        <div className="readbooks">
            <h1>Read  Book</h1>
            <div className="booktitle">
        <h2>Title: {book.title}</h2>
        </div>
        <div className="bookinfo">
        <h2>{book.shortDescription}</h2><br /><br />
        <h2>Longdescription: {book.longDescription}</h2>
        </div>
        </div>
    );
}
export default ReadBook;