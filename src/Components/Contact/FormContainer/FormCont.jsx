import React, { useState, useEffect } from "react";
import "./form.scss";
// import DatePicker from "./DatePicker";
import "react-datepicker/dist/react-datepicker.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

// EMAIL.JS
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
const SERVICE_ID = "gmail";
const TEMPLATE_ID = "hire_template";
const USER_ID = "CN0RNMNddtaLSaAyj";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  company: "",
  budget: "",
  message: "",
  start: "",
  end: "",
  question: "",
};

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9.%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Please Enter Your Email";
  }

  return errors;
};

function FormCont({ closeModal }) {
  const [val, setVal] = useState(false);

  const onSubmit = (values, actions) => {
    // const newStart = values.start;
    // const newFormattedStart =
    //   newStart.getMonth() +
    //   1 +
    //   "-" +
    //   newStart.getDate() +
    //   "-" +
    //   newStart.getFullYear();

    // const newEnd = values.end;
    // const newFormattedEnd =
    //   newEnd.getMonth() +
    //   1 +
    //   "-" +
    //   newEnd.getDate() +
    //   "-" +
    //   newEnd.getFullYear();
    // const updatedValues = {
    //   ...values,
    //   start: newFormattedStart,
    //   end: newFormattedEnd,
    // };

    // SendEmail(updatedValues);
    SendEmail(values);
    actions.setSubmitting(false);
  };

  function SendEmail(object) {
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, object, USER_ID)

      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
          });
          setVal(true);
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
          setVal(true);
        }
      );
  }

  //wait for email to send to close modal
  useEffect(() => {
    if (val) {
      setTimeout(() => {
        closeModal();
      }, 1500);
    }
  }, [val, closeModal]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => onSubmit(values, actions, closeModal)}
      validate={validate}
    >
      {(formik) => {
        return (
          <Form>
            <div className="FormContainerMinimized fs-button">
              <div className="FormInputContainer FormInputName">
                <label className="FormName FormLabel">Name</label>
                <Field
                  className="FormName FormInput"
                  placeholder="Johnny Doe"
                  name="name"
                  type="text"
                  required
                />
              </div>

              <div className="FormInputContainer FormInputEmail">
                <label className="FormEmail FormLabel">Email</label>
                <Field
                  className="FormEmail FormInput"
                  placeholder="AvantFilms@example.com"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="FormErrorContainer">
                <ErrorMessage name="email">
                  {(errorMsg) => (
                    <div className="FormError fs-label">{errorMsg}</div>
                  )}
                </ErrorMessage>
              </div>

              <div className="FormInputContainer FormInputPhone">
                <label className="FormPhone FormLabel">Phone Number</label>
                <Field
                  className="FormPhone FormInput"
                  placeholder="(___) ___-____"
                  name="phone"
                  type="text"
                />
              </div>

              <div className="FormInputContainer FormInputCompany">
                <label className="FormCompany FormLabel">Company</label>
                <Field
                  className="FormCompany FormInput"
                  placeholder="Avant Film Collection"
                  name="company"
                  type="text"
                  required
                />
              </div>

              <div className="FormInputContainer FormInputMessage">
                <label className="FormMessage FormLabel">Message</label>
                <Field
                  className="FormMessage FormInput"
                  as="textarea"
                  placeholder="Hey! It would be great working with you on our next project..."
                  name="message"
                  required
                />
              </div>

              <div className="FormInputContainer FormInputQuestion">
                <label className="FormQuestion FormLabel">
                  How'd You Hear Of Me?
                </label>
                <Field
                  className="FormQuestion FormInput"
                  as="select"
                  name="question"
                  type="text"
                  required
                >
                  <option value="We've Chatted In Person">
                    We've Chatted In Person
                  </option>
                  <option value="By Working Together Before">
                    Working Together Before
                  </option>
                  <option value="Through A Recommendation">
                    Through A Recommendation
                  </option>
                  <option value="Discovered On The Web">
                    Discovered On The Web
                  </option>
                  <option value="Found On Social Media">
                    Found On Social Media
                  </option>
                </Field>
              </div>

              <div className="FormButtonContainer">
                <button
                  className="FormButton"
                  type="submit"
                  disabled={!(formik.dirty && formik.isValid)}
                >
                  Submit
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormCont;
//   <Formik
//     initialValues={initialValues}
//     onSubmit={(values, actions) => onSubmit(values, actions, closeModal)}
//     validate={validate}
//   >
//     {(formik) => {
//       return (
//         <Form>
//           <div className="FormContainer fs-button">
//             <div className="FormInputContainer FormInputName">
//               <label className="FormName FormLabel">Name</label>
//               <Field
//                 className="FormName FormInput"
//                 placeholder="Johnny Doe"
//                 name="name"
//                 type="text"
//                 required
//               />
//             </div>
//             <div className="FormInputContainer FormInputEmail">
//               <label className="FormEmail FormLabel">Email</label>
//               <Field
//                 className="FormEmail FormInput"
//                 placeholder="AvantFilms@example.com"
//                 name="email"
//                 type="email"
//                 required
//               />
//             </div>
//             <div className="FormErrorContainer">
//               <ErrorMessage name="email">
//                 {(errorMsg) => (
//                   <div className="FormError fs-label">{errorMsg}</div>
//                 )}
//               </ErrorMessage>
//             </div>

//             <div className="FormInputContainer FormInputPhone">
//               <label className="FormPhone FormLabel">Phone Number</label>
//               <Field
//                 className="FormPhone FormInput"
//                 placeholder="(___) ___-____"
//                 name="phone"
//                 type="text"
//               />
//             </div>
//             <div className="FormInputContainer FormInputCompany">
//               <label className="FormCompany FormLabel">Company</label>
//               <Field
//                 className="FormCompany FormInput"
//                 placeholder="Avant Film Collection"
//                 name="company"
//                 type="text"
//                 required
//               />
//             </div>
//             <div className="FormInputContainer FormInputBudget">
//               <label className="FormBudget FormLabel">Budget</label>
//               <Field
//                 className="FormBudget FormInput"
//                 placeholder="$5,000 - $8,000"
//                 name="budget"
//                 type="text"
//                 required
//               />
//             </div>
//             <div className="FormInputContainer FormInputStart">
//               <label className="FormStart FormLabel">Start Date</label>
//               <DatePicker
//                 name="start"
//                 className="FormStart FormInput"
//                 required
//               />
//             </div>
//             <div className="FormInputContainer FormInputEnd">
//               <label className="FormEnd FormLabel">End Date</label>
//               <DatePicker
//                 name="end"
//                 className="FormEnd FormInput"
//                 required
//               />
//             </div>
//             <div className="FormInputContainer FormInputMessage">
//               <label className="FormMessage FormLabel">Message</label>
//               <Field
//                 className="FormMessage FormInput"
//                 as="textarea"
//                 placeholder="Hey! It would be great working with you on our next project..."
//                 name="message"
//                 required
//               />
//             </div>
//             <div className="FormInputContainer FormInputQuestion">
//               <label className="FormQuestion FormLabel">
//                 How'd You Hear Of Me?
//               </label>
//               <Field
//                 className="FormQuestion FormInput"
//                 as="select"
//                 name="question"
//                 type="text"
//               >
//                 <option value="We've Chatted In Person">
//                   We've Chatted In Person
//                 </option>
//                 <option value="By Working Together Before">
//                   Working Together Before
//                 </option>
//                 <option value="Through A Recommendation">
//                   Through A Recommendation
//                 </option>
//                 <option value="Discovered On The Web">
//                   Discovered On The Web
//                 </option>
//                 <option value="Found On Social Media">
//                   Found On Social Media
//                 </option>
//               </Field>
//             </div>
//             <div className="FormButtonContainer">
//               <button
//                 className="FormButton"
//                 // id="FormButton"
//                 type="submit"
//                 disabled={!(formik.dirty && formik.isValid)}
//               >
//                 Submit
//               </button>
//             </div>
//           </div>
//         </Form>
//       );
//     }}
//   </Formik>
// );
