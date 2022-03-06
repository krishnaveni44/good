import React from 'react';


// https://www.w3schools.com/howto/img_avatar.png
function Form(props) {
    const { imgUrl, name, email, number, action } = props;
    return ( 
        <div className="card">
        <img src={imgUrl} alt="Avatar" style={{
            width: "100%"
        }}  />
        <div className="container">
            <form> 
                
                <input type="text" name="Name" value={name} placeholder="Your Name"/> <br/>
               
                <input type="email" id="email" name ="email" value={email} placeholder="Email"/> <br/>
                
                <input type="number" name="phone" size="10" value={number} placeholder="Mobile Number"/> <br/>
               
                <button type = "submit" onClick={action}>Create an account</button>
                        
            </form>
        </div>
        
    </div>

    )

}

export default Form;