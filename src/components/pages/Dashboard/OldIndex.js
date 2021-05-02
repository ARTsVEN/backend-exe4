import React, {useEffect, useState} from 'react'
import NavBar from '../../molecules/NavBar/'
import Card from '../../molecules/Card'
import Axios from "axios";
import Cards from '../../molecules/Cards'


const Dashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect (()=> {
        //fetch
        // fetch('https://reqres.in/api/users')
        // .then((res) => res.json())
        // .then((json) =>  setUsers(json.data));
        //Axios
        Axios.get("http://localhost:3004/users").then((res) =>
        // setUsers(res.data.data)
        setUsers(res.data)
        );
        
    }, []);

    // console.log(users);

    // const addUser = () => {
    //     const data = {
    //         avatar: "https://source.unsplash.com/random",
    //         email: "s21810263@student.unklab.ac.id",
    //         first_name : "Arthur",
    //         last_name : "Lonteng",
    //     }
    // Axios.post("http://localhost:3004/users", data);

    // };
    
    return (
        <div className="container">
            <NavBar />
            <h3 className="text-center">Dashboard</h3>
            <hr />
            {/* <button className="btn btn-primary mb-3"onClick={addUser}>Tambah User</button> */}
            <div className="row align-items-start">
                {users.map((item) => (
                        <Cards
                        key={item.id}
                        avatar={item.avatar}
                        first_name={item.first_name}
                        last_name={item.last_name}
                        email={item.email}
                        />
                ))
                }
            </div>
        </div>
    )
}

export default Dashboard;

