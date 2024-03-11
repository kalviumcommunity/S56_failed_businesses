import React from 'react'
import { useParams } from 'react-router-dom'

function DataEdit() {
    const {id} = useParams()
    const [userId,setUserId] = useState("")
    const [userName,setUserName] = useState("")
    const [businessName,setBusinessName] = useState("")
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.git('https://failed-business.onrender.com/getuser/:id');
            setUserId(response.data.id);
            setUserName(response.data.owner)
            setBusinessName(response.data.name)
            console.log(response.data.id)
          } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.put('https://failed-business.onrender.com/getuser/:id');
            setUserId(response.data.id);
            setUserName(response.data.owner)
            setBusinessName(response.data.name)
            console.log(response.data.id)
          } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      console.log(userId)
      const handleSubmit=(event)=>{
        event.preventDefault()
        axios.put('https://failed-business.onrender.com/getuser/:id',{userId,userName,businessName}).then(result=>(console.log(result))).catch(err=>console.log(error))

      }
  return (
    <div>DataEdit</div>
  )
}

export default DataEdit