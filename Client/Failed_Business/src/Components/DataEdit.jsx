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
            const response = await axios.get('https://failed-business.onrender.com/getuser');
            setUserId(response.data.id);
            setUserName(response.data.owner)
            setBusinessName(response.data.name)
            console.log(response.data)
          } catch (error) {
            setError('Error fetching data');
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      console.log(userId)
  return (
    <div>DataEdit</div>
  )
}

export default DataEdit