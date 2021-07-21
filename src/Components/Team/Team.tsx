import React, { useState } from 'react';

interface IMember {
    name:string;
    email: string;
}

const Team = () => {

    const [members, setMembers] = useState<IMember>({
        name:"",
        email:""
    });
    const [ team, setTeam] = useState<IMember[]>([])


    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMembers({...members, [e.target.name] : e.target.value});

    };

    const onclick = (e: any) =>{
        setTeam([...team, members]);
        console.log(team);
        e.target.parentElement.children[0].value = "";
        e.target.parentElement.children[2].value = "";
    }
    const makeATeam  =() =>{

    }

    return (
        <div>
            <input  onChange={handleBlur} type="text" name="name" placeholder="Member Name" id="" />
            <br />
            <input onChange={handleBlur} type="email" name="email" placeholder="Email" id="" />
            <br />
            <br />
            <br />
            <button onClick={onclick}>Add Member</button>
            <br />
            <br/>
            <button onClick = {makeATeam}>Add this on Team</button>
            <div>
                {
                    team?.map(c => <h1> key={c.email} {c.name} </h1>)
                }
            </div>
        </div>
    );
};

export default Team;