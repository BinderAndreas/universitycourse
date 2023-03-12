import React, { useState,useEffect } from 'react'
import "./mycoursearea.css"
import { db } from '../../config/firebaseConfig';
import { getDocs,collection } from 'firebase/firestore';
import PDFViewer from '../../components/PDFViewer/PDFViewer';


function MyCourseArea() {

    const [course,setCourse]=useState("")
    

    useEffect(()=>{
        const courseRef = collection(db,"courses")

        getDocs(courseRef)
        .then(res=>{
            const courses = res.docs.map(item=>({
                id:item.id,
                ...item.data()
            }))
           
            setCourse(courses[0])
            console.log(course)
        })

        .catch(err=>console.log(err))

    }, [])


  return (
    <div className='mycourse-area'>
        <div className='headline-area'>
            <div className='headline'>
                <h1>Deine Kurse</h1>
            </div>
        </div>
        <div className='mycourses'>
            <h1>{course?.name}</h1>
            <a href={course?.URL}>asdf</a>
        </div>

    </div>
  )
}

export default MyCourseArea;