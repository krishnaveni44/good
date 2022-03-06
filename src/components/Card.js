import React from 'react';
import { useStore } from '../App';

// https://www.w3schools.com/howto/img_avatar.png
function Card() {
    const data = useStore();
    return ( 
        <div className="card">
        <img src={data.imgUrl} alt="Avatar" style={{
            width: "100%"
        }}  />
        <div className="container">
            <h4><b>{data.name}</b></h4>
            <p>{data.title}</p>
            {/* <button onClick={action}>Change</button> */}
        </div>
        
    </div>

    )

}

export default Card;