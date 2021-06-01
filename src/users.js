
import { useState, useEffect } from 'react'
import Table from './Table/table';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/api/v1/users')
            .then(response => response.json())
            .then(response => {
                const { data } = response
                setUsers(data);
            })
    }, [])


    return (

        <div>
            <Table data={users} />
        </div>
    )
}


export default Users;