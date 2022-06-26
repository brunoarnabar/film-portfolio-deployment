import React, {useState, Component} from 'react';  
import InputChild from '../FormComponents/InputChild';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./form.scss"
// EMAIL.JS
import emailjs from 'emailjs-com';
const SERVICE_ID = "gmail";
const TEMPLATE_ID = "hire_template";
const USER_ID = "CN0RNMNddtaLSaAyj";

// EMAIL.JS

const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        // Swal.fire({
        //   icon: 'success',
        //   title: 'Message Sent Successfully'
        // })
      }, (error) => {
        console.log(error.text);
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Ooops, something went wrong',
        //   text: error.text,
        // })
      });
    e.target.reset()
  };

function FormCont() {
  const [startdate, setStartDate] = useState(null);
  const startdateChange = startdate => setStartDate(startdate);

  const [enddate, setEndDate] = useState(null);
  const enddateChange = enddate => setEndDate(enddate);

  return (
    <div className='form-container'>
        <form className='email-form' onSubmit={handleOnSubmit}>
            <label className='form-name label' >Name</label>
            <input
                className='form-name input' 
                placeholder='Luis Buñuel'
                name='name'
                type='text'
                required
            />
            <label className='form-email label'>Email</label>
            <input 
                className='form-email input'
                placeholder='AvantFilms@example.com'
                name='email'
                type='text'
                required
            />
            <label className='form-company label'>Company</label>
            <input 
              placeholder='Avant Film Collection'
className='form-company input'
                name='company'
                type='text'
                required
            />
            <label className='form-budget label'>Budget</label>
            <input 
            placeholder='$5,000 - $8,000'
            className='form-budget input'
                name='budget'
                type='text'
                required
            />
            <label className='form-start label' >Start Date</label>
            <DatePicker 
            placeholderText={'mm/dd/yyyy'}
            className='form-start input'
                name='start' selected={startdate} onChange={startdateChange} />
            <label className='form-end label' >End Date</label>
            <DatePicker 
            placeholderText='mm/dd/yyyy'
            className='form-end input'
            name='end' selected={enddate} onChange={enddateChange} />
            <label className='form-message label' >Message</label>
            <textarea 
            placeholder='Hey! It would be great working with you on our next project...'
            className='form-message input'
                name='message'
                required
            />
            <label className='form-question label'>How'd You Hear Of Me?</label>
            <select
            className='form-question input'
                name='question' 
                type='text'
                required
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <button id='form-button' type='submit' color='green'>Submit</button>
            
        </form>
    </div>
  )
}

export default FormCont