import { useEffect, useState } from "react"
import axios from 'axios'
import ClassItem from "./ClassItem"
const Classes = () => {

  const [apprClass, setApprClass] = useState([])
  
  useEffect(()=> {
    axios.get("http://localhost:5000/approved-class")
    .then(res => {
      setApprClass(res.data)
    })
  }, [])

  console.log(apprClass);
  
  return (
    <div className="grid md:grid-cols-2 gap-3">
    {
      apprClass?.map((item) => <ClassItem key={item._id} classes={item}/>)
    }
    </div>
  )
}

export default Classes