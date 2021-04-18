import React from 'react'

function Cards({email, first_name, last_name, avatar}) {
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={avatar} className="card-img-top" alt="avatar"/>
            <div className="card-body">
             <p className="card-text">{first_name} {last_name}</p>
             <p className="card-text">{email}</p>
        </div>
</div>
    )
}

export default Cards;
