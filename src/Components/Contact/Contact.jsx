import React, {useState} from 'react'
import './contact.scss';

// import myImg from "../../Images/Backgrounds/cloud-bg.jpg"
import DirImg from "../../Images/ListIcons/filmDir.jpg"
import DevImg from "../../Images/ListIcons/webDev.jpg"
import HeyImg from "../../Images/ListIcons/sayHey.jpg"

import Modal from 'react-modal'
// import { Form, Input, Button } from 'semantic-ui-react';

import Swal from 'sweetalert2';
// import styled, { createGlobalStyle, css} from 'styled-components'
// import FormContainer from "./FormContainer/FormContainer";
// import FormCont from "./FormContainer/FormCont";
import FormCon from "./FormContainer/FormCon";

// import { emailSchema } from './FormContainer/EmailVal'

// EMAIL.JS
import emailjs from 'emailjs-com';
const SERVICE_ID = "gmail";
const TEMPLATE_ID = "hire_template";
const USER_ID = "CN0RNMNddtaLSaAyj";


Modal.setAppElement('#root')


// const checkEmail = async (e) => {
//   e.preventDefault()

//   const isValid = await emailSchema.isValid(e.target[1].value)
//   console.log(isValid)
// }


// EMAIL.JS

// const handleOnSubmit = (e) => {
    // e.preventDefault();
    // emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
    //   .then((result) => {
    //     console.log(result.text);
    //     Swal.fire({
    //       icon: 'success',
    //       title: 'Message Sent Successfully'
    //     })
    //   }, (error) => {
    //     console.log(error.text);
    //     Swal.fire({
    //       icon: 'error',
    //       title: 'Ooops, something went wrong',
    //       text: error.text,
    //     })
    //   });
    // e.target.reset()
//   };

function Contact() {
    const [dirModalIsOpen, setDirModalIsOpen] = useState(false)

    function clickMe(e) {
      setDirModalIsOpen(true)
    }

    function handleOnSubmit(e) {
      e.preventDefault();
      // checkEmail();
      emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
          setDirModalIsOpen(false);
          console.log(result.text);
          Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
        }, (error) => {
          console.log(error.text);
                  Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
        });
      e.target.reset()
    };

  return (
    <div className="contactContainer">
        <div className="BackdropCo">
            <div className="HeadingCo"> Get In Touch </div>
            <div className='Message-con First-con'> To make an inquiry about a project, please select from the following options: </div>
            <br/>

<div className='List OneDir'>
    <button 
    onClick={clickMe} 
    className='Option'
    >
        <div className='OptImg'> <img src={DirImg} alt='DirImg' className='ListImg'/> </div>
        <div className='OptPromt'> I want to work with you as a director. </div>
    </button>
</div>

<div className='List TwoDir'>
    <button onClick={clickMe} className='Option'>
        <div className='OptImg'> <img src={DevImg} alt='DevImg' className='ListImg'/> </div>
        <div className='OptPromt'> I want to work with you as a developer. </div>
    </button>
</div>

<div className='List ThreeDir'>
    <button onClick={clickMe} className='Option'>
        <div className='OptImg'> <img src={HeyImg} alt='HeyImg' className='ListImg'/> </div>
        <div className='OptPromt HelloOpt'> I just want to say hello. </div>
    </button>
</div>

<Modal isOpen={dirModalIsOpen} onRequestClose={() => setDirModalIsOpen(false)}
onAfterOpen={() => {
  document.body.style.top = `-${window.scrollY}px`
  document.body.style.position = `fixed`
}}
onAfterClose={() => {
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}} 
className="Modal"
overlayClassName="Overlay">

    <div className='formHeader'>
      {/* <div className='List OneDir'>
          <div className='OptImg'> <img src={DirImg} alt='DirImg' className='ListImg'/> </div>
          <div className='OptPromt'> I want to work with you as a director. </div>
      </div>
    BIG X
    <button className='formHeadButton'  onClick={() => setDirModalIsOpen(false)}>x</button> */}
    </div>
    
    

    {/* <FormContainer className='formStyle'/> */}
    <div className='form-container-contact'>
        {/* <form className='email-form' onSubmit={handleOnSubmit}> */}
          {/* <FormCont className='formStyle'/> */}
          <FormCon className='formStyle'/>
          {/* </form> */}
    </div>
    {/* <Form onSubmit={handleOnSubmit} className='formStyle'>



        <Form.Field
            id='form-input-name'
            control={Input}
            label='Name'
            name='Name'
            placeholder='Luis Buñuel'
            required
            icon='mail'
            iconPosition='left'
            /> */}
        {/* <Form.Field
          id='form-input-email'
          control={Input}
          label='Email'
          name='Email'
          placeholder='janus@gmail.com'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-company'
          control={Input}
          label='Company'
          name='Company'
          placeholder='Criterion Channel'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-budget'
          control={TextArea}
          label='Message'
          name='message'
          placeholder='Message…'
          required
        />
        <Form.Field
          id='form-input-start'
          control={Input}
          label='Email'
          name='Email'
          placeholder='janus@gmail.com'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-end'
          control={Input}
          label='Email'
          name='Email'
          placeholder='janus@gmail.com'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-message'
          control={Input}
          label='Email'
          name='Email'
          placeholder='janus@gmail.com'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-question'
          control={Input}
          label='Email'
          name='Email'
          placeholder='janus@gmail.com'
          required
          icon='mail'
          iconPosition='left'
        /> */}
        {/* <Button id='form-button' type='submit' color='green'>Submit</Button> */}
    {/* </Form> */}
          </Modal>
        </div> 
    </div>
  )
}

export default Contact