import React, { useState } from 'react';
import ShowTeam from '../ShowTeam/ShowTeam';

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
    const [ showTeam, setShowTeam ]  = useState<IMember[]>([])

    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMembers({...members, [e.target.name] : e.target.value});

    };

    const handleClick = (e: any) =>{
        setTeam([...team, members]);
        e.target.parentElement.children[0].value = "";
        e.target.parentElement.children[2].value = "";
    }
    const makeATeam  =() =>{
        setShowTeam(team)
    }

    return (
        <div>
            <input  onChange={handleBlur} type="text" name="name" placeholder="Member Name" id="" />
            <br />
            <input onChange={handleBlur} type="email" name="email" placeholder="Email" id="" />
            <br />
            <br />
            <br />
            <button onClick={(e) => handleClick(e)}>Add Member</button>
            <br />
            <br/>
            <button onClick = {makeATeam}>Finally Make a team</button>
            <div>
                {
                    <ShowTeam key={showTeam} showTeam={showTeam}></ShowTeam>
                }
            </div>
        </div>
    );
};

export default Team;