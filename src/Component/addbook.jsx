import { useState } from "react";
import { useNavigate } from "react-router-dom";
import'../Style/addbook.css'

const AddBook = () => {
    //title,categories,authors,pageCount,shortDescription,longDescription,thumnailUrl
    let [title,setTitle]=useState("")
    let [authors,setauthors]=useState("")
    let [categories,setcategorie]=useState("")
    let [pageCount,setpageCount]=useState("")
    let [shortDescription,setshortDescription]=useState("")
    let [longDescription,setlongDescription]=useState("")
    let [thumnailUrl,setthumnailUrl]=useState("")

    let navigate=useNavigate()

    let handleSubmit=(e)=>{
        e.preventDefault();
        //data to be posted
        let bookData={title,categories,authors,pageCount,shortDescription,longDescription,thumnailUrl}

        // posting to the server
        fetch(`http://localhost:2002/book`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        alert('book added successfully')
        navigate('/admin/book-list')
    }

    return (
        <div className="addBook">
            <h1>Add a Book</h1>
            <div className="form1">
                <form action="" className="form" onSubmit={handleSubmit}>
                  
                       Title: <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} required placeholder="Title of the Book" /> <br />

                    
                  
                       Author: <input type="text" value={authors} onChange={(e)=>setauthors(e.target.value)} required placeholder="Authors of the Book" /> <br />
                    
                    
                      Categories:  <input type="text" value={categories} onChange={(e)=>setcategorie(e.target.value)} required placeholder="Categories" /> <br />
                   
                    
                    PageCount:    <input type="number" value={pageCount} onChange={(e)=>setpageCount(e.target.value)} required placeholder="Number of the Pages" /> <br />
                   
                   
                     Shortdesc:   <textarea name="" value={shortDescription} onChange={(e)=>setshortDescription(e.target.value)}  type="text" id="" cols="20" rows="1" placeholder="Short Descriptin"></textarea> <br />
                   
                   
                       Longdesc: <textarea name="" value={longDescription} onChange={(e)=>setlongDescription(e.target.value)} type="text" id="" cols="20" rows="1" placeholder="Long Descriptin"></textarea> <br />
                  
                  
                      Thumbnailurl:  <input type="text" value={thumnailUrl} onChange={(e)=>setthumnailUrl(e.target.value)} placeholder="thumnailUrl" /> <br />
                 
                    <button >Add Book</button>
                </form>
            </div>
        </div>
    );
}

export default AddBook;