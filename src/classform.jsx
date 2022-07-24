import React, { useState } from 'react';

function Functionform() {
    const [name,setName]= useState("");
    const [surname,setSurname]= useState("");
    const [password,setPassword]= useState("");
    const [email,setEmail]= useState("");
    const [students, setStudents] = useState([
        { name: ("Winifred"), surname:("Asante"),email: ("winifredasante15@gmail.com"), password: ("waa") },
    ]);

const setClick = (e)=> {
    e.preventDefault();
    var work = [name,email,password]
    console.log(work);
    setStudents ([...students,{name,email,password,surname}])
}




    return ( 
        <>
        <h1>REGISTERATION FORMS</h1>
        <form action="form">

            <label>NAME:</label>
            <input 
            type="text" 
            value={name}
            name="name"
            onChange={(e)=>{setName(e.target.value)}} />

              <br/>
<label>SURNAME:</label>
            <input
             type="text"
             value={surname}
             name="surname" 
             onChange={
                (e)=>{setSurname(e.target.value)}
                } />
             
              <br/>
<label>PASSWORD:</label>
            <input
             type="password"
             value={password}
             name="password"
             onChange={
                (e)=>{setPassword(e.target.value)}
                } /> 


             <br/>
<label>EMAIL:</label>
            <input
             type="text"
             value={email}
             name="name"
             onChange={
                (e)=>{setEmail(e.target.value)}
                } />

                 <br/>
                 <button onClick={setClick}>submit</button>

        </form>
        {students.map((inputs,index)=>{
            return(
                <>
                <h2>Name:{inputs.name}</h2>
                <h2>Surname:{inputs.surname}</h2>
                <h2>Password:{inputs.password}</h2>
                <h2>Email:{inputs.email}</h2>
                </>
            )
        })}
        </>
     );

    }



export default Functionform;


// import React, { useState } from "react";
	

// 	const FunctionalForm = () => {
// 		const [name, setName] = useState("");
// 		const [email, setEmail] = useState("");
// 		const [gen, setGen] = useState("");
		

// 		function HandleClick  (e) {
// 			 e.preventDefault();
// 			var answer = [name,email,gen]
//             console.log(answer)
// 		};
// 		return (
// 			<div>
// 				<h1>Register here</h1>
// 				<form>
// 					<label>Name:</label>
// 					<input
// 						type="text"
// 						name="name"
// 						value={name}
// 						onChange={(e) => {
// 							setName(e.target.value);
// 						}}
// 					/>
// 					<br />
// 					<label>Gen:</label>
// 					<input
// 						type="text"
// 						name="gen"
// 						value={gen}
// 						onChange={(e) => {
// 							setGen(e.target.value);
// 						}}
// 					/>
// 					<br />
// 					<label>Email:</label>
// 					<input
// 						type="text"
// 						name="email"
// 						value={email}
// 						onChange={(e) => {
// 							setEmail(e.target.value);
// 						}}
// 					/>
// 					<br />
// 					<button onClick={HandleClick}>submit</button>
// 				</form>
				
// 			</div>
// 		);
// 	};
	

// 	export default FunctionalForm;

