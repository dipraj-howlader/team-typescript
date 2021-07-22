import React from 'react';
interface ISHowTeam {
    name:string;
    email:string;
}

const ShowTeam = (props : any) => {
    const  PropsFactor:any =  props.showTeam;
    return (
        <div>
            {
                PropsFactor.map((copu:ISHowTeam) => <p> {(copu.name)} </p>)
            }
        </div>
    );
};

export default ShowTeam;