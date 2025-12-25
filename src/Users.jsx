import React, { useEffect, useState} from 'react'

const Users = () => {
    // state
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState([])


    useEffect(() => {
        // fetch API
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
            setUsers(data)
            setLoading(false)
        })
    }, [])
    
    if (loading) return <p>Loading...</p>
        
  return (
    <div>
        {/* mapping data */}
        {users.map((item) => (
        <div key={item.id}
            style={{border: "1px solid grey", borderRadius: "20px", padding: "10px", marginBottom: "10px"}}
        >
            <h4>{item.name}</h4>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>
            <p>{item.address.street}, {item.address.suite}</p>
            <p>{item.address.geo.lat}</p>
            <p>{item.address.geo.lng}</p>
         </div>
      ))}
    </div>  
  )
}
export default Users