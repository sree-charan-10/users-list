import React,{ useState, useEffect } from 'react';

const UserList = () => {
    const [data, setData] = useState([]);

    const getData = async  ()=>{
        const result = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const jsonResult = await result.json();
        setData(jsonResult);
        console.log(jsonResult);
        
    }

    useEffect( () => {
        getData();
    }, [])
        
  return (
    <div className='card'>
        {
            data.map((user)=>
            <pre key = {user.id}>
                <div>{user.username}</div>
                <div>{user.name}</div>
                <div>{user.email}</div>
                <div>{user.phone}</div>
            </pre>
            )
        }
    </div>
  )
}

export default UserList