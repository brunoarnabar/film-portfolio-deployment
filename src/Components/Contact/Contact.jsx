import React, {useState} from 'react'
import './contact.scss';

// import myImg from "../../Images/Backgrounds/cloud-bg.jpg"
import DirImg from "../../Images/ListIcons/filmDir.jpg"
import DevImg from "../../Images/ListIcons/webDev.jpg"
import HeyImg from "../../Images/ListIcons/sayHey.jpg"

import Modal from 'react-modal'
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
// import Swal from 'sweetalert2';

const SERVICE_ID = "gmail";
const TEMPLATE_ID = "porfolio_template";
const USER_ID = "CN0RNMNddtaLSaAyj";

Modal.setAppElement('#root')


function clickMe(e) {
e.preventDefault();   
    console.log('You clicked submit.');
}

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

function Contact() {
    const [dirModalIsOpen, setDirModalIsOpen] = useState(false)
  return (
    <div className="contactContainer">
        <div className="BackdropCo">
            <div className="HeadingCo"> Get In Touch </div>
            <div className='Message-con First-con'> To make an inquiry about a project, please select from the following options: </div>
            <br/>

<div className='List OneDir'>
    <button onClick={()=> setDirModalIsOpen(true)} className='Option'>
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
  document.body.style.position = 'fixed'
}}
onAfterClose={() => {
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}}>
    <button onClick={() => setDirModalIsOpen(false)}>x</button>
    <Form onSubmit={handleOnSubmit}>
        <Form.Field
            id='form-input-control-subject'
            control={Input}
            label='subject'
            name='subject'
            placeholder='subject...'
            required
            icon='mail'
            iconPosition='left'
            />
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
    </Form>
</Modal>
        </div> 
    </div>
  )
}

export default Contact