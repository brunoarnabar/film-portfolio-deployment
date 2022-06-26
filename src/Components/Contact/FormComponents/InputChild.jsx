import React from 'react';


const InputChild = (props) => {
	//console.log(props.value);
	return (  
  <div className="form-group">
    <label htmlFor={props.name} className="form-label">{props.title}</label>
    <input
      className="form-control"
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.state.newUser.name}
      onChange={props.handlechange}
      placeholder={props.placeholder} 
      {...props} />
  </div>
)
}

export default InputChild;

// import React from 'react'

// function InputChild({handleChange},{props}) {
    
//     return (
//         <div className="form-group">
//             <label htmlFor={props.name} className="form-label">{props.title}</label>
//             <input
//             className="form-input"
//             // id="message"
//             // name="message"
//             id={props.name}
//             name={props.name}
//             type={props.inputType}
//             value={props.value}
//             onChange={handleChange}
//             placeholder={props.placeholder} 
//             {...props}
//             />
//         </div>
//     );
// }

// export default InputChild