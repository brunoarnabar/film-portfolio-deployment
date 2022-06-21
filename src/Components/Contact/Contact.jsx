import React from 'react'
import './contact.scss';
// import myImg from "../../Images/Backgrounds/cloud-bg.jpg"
import DirImg from "../../Images/ListIcons/filmDir.jpg"
import DevImg from "../../Images/ListIcons/webDev.jpg"
import HeyImg from "../../Images/ListIcons/sayHey.jpg"

import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

const SERVICE_ID = "**************";
const TEMPLATE_ID = "*******";
const USER_ID = "****************";

function clickMe(e) {
e.preventDefault();   
    console.log('You clicked submit.');
}

const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
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

function Contact() {
  return (
    <div className="contactContainer">
        <div className="BackdropCo">
            <div className="HeadingCo"> Get In Touch </div>
            <div className='Message-con First-con'> To make an inquiry about a project, please select from the following options: </div>
            <br/>

<div className='List OneDir'>
    <button onClick={clickMe} className='Option'>
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
        <div className='OptPromt'> I just want to say hello. </div>
    </button>
</div>

{/* 
<Form onSubmit={handleOnSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form> */}



            
            {/* <p data-v-e99b2f8e="" data-v-28174110="">
                <button type="button" class="ButtonIcon h-4 color-red" data-v-b8eb0766="" data-v-28174110="" data-v-e99b2f8e="">
                    <span class="ButtonIcon__icon" data-v-b8eb0766="">
                        <img src="src/Images/Backgrounds/bg_.jpg" alt="I'd like to book you in" width="60" height="60"/>
                    </span> 
                    <span class="ButtonIcon__label" data-v-b8eb0766="">
                        I'd like to book you in
                    </span>
                </button>
            </p> */}
            

        </div> 
    </div>
  )
}

export default Contact