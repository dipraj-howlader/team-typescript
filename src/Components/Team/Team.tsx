import React, { useState } from 'react';



const Team = () => {

    const [members, setMembers] = useState({
        name:"",
        email:""
    });


    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMembers({...members,  [e.target.name]: e.target.value });
        console.log(members)
    };

    return (
        <div>
            <input onChange={handleBlur} type="text" name="name" placeholder="Member Name" id="" />
            <br />
            <input onChange={handleBlur} type="email" name="email" placeholder="Email" id="" />
            <br />
            <br />
            <br />
            <button>Add Member</button>
            <br />
            <br/>
            <button>Add this on Team</button>
            <h1>{members.name}</h1>
        </div>
    );
};

export default Team;