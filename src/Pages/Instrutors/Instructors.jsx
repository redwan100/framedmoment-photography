import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import Loading from '../Shared/Loading/Loading'
import Card from './Card'
const Instructors = () => {

  const {data:instructors=[], isLoading} = useQuery({
    queryKey:['allInstructor'],
    queryFn: async()=> {
      const res = await axios.get("http://localhost:5000/admin/instructors")
      console.log(res.data);
      return res.data;
    }
  })

  

if(isLoading) {
  return <Loading />
}
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      {instructors.map((instructor) => (
        <Card key={instructor._id} instructor={instructor} />
      ))}
    </div>
  );
}

export default Instructors