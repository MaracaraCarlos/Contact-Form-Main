import { useState } from "react"
/* comentario */
const Form = () => {

  const [general, setGeneral] = useState(false)
  const [support, setSupport] = useState(false)
  const [errorMessageQuery, setErrorMessageQuery] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [errorMessageFirstName, setErrorMessageFirstName] = useState(false)
  const [lastName, setLastName] = useState('')
  const [errorMessageLastName, setErrorMessageLastName] = useState(false)
  const [email, setEmail] = useState('')
  const [errorMessageEmail, setErrorMessageEmail] = useState(false)
  const [message, setMessage] = useState('')
  const [errorMessageTextArea, setErrorMessageTextArea] = useState(false)
  const [consent, setConsent] = useState(false)
  const [errorMessageConsent, setErrorMessageConsent] = useState(false)
  const [successMsg, setSuccessMsg] = useState(false)

  const handleQueryGeneral = () => {
    if (general) {
      setGeneral(false)
      if (!support) {
        setSupport(true)
      }
    } else if (!general) {
      setGeneral(true)
      if (support) {
        setSupport(false)
      }
    }
    console.log(general, support)
  }

  const handleQuerySupport = () => {
    if (support) {
      setSupport(false)
      if (!general) {
        setGeneral(true)
      }
    } else if (!support) {
      setSupport(true)
      if (general) {
        setGeneral(false)
      }
    }
    console.log(general, support)
  }

  const login = (nombre: string, apellido: string, correo: string) => {
    if (nombre.length > 3 
      && apellido.length > 3 
      && validateEmail(correo) 
      && (general || support) 
      && message.length > 15 
      && consent) {
      setSuccessMsg(true)
      console.log('Login correcto')
      console.log(nombre, apellido, correo)
    } else {
      console.log('Login incorrecto')
    }
  }

  const validateName = (nombre: string) => {
    if (nombre.length > 3) {
      return true
    } else {
      return false
    }
  }

  const validateEmail = (correo: string) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)
  }

  const handleConsentChange = () => {
    if (!consent){
      setConsent(true)
    } else if (consent) {
      setConsent(false)
    }
  }

  const messageError = () => {
    // First Name
    if (validateName(firstName)) {
      setErrorMessageFirstName(false)
    } else if (!validateName(firstName)) {
      setErrorMessageFirstName(true)
    }
    // Last Name
    if (validateName(lastName)) {
      setErrorMessageLastName(false)
    } else if (!validateName(lastName)) {
      setErrorMessageLastName(true)
    }
    // Email
    if (validateEmail(email)) {
      setErrorMessageEmail(false)
    } else if (!validateEmail(email)) {
      setErrorMessageEmail(true)
    }
    // Query
    if (general || support) {
      setErrorMessageQuery(false)
    } else {
      setErrorMessageQuery(true)
    }
    // Text area
    if (message.length > 15) {
      setErrorMessageTextArea(false)
    } else {
      setErrorMessageTextArea(true)
    }
    // Consent
    if (consent) {
      setErrorMessageConsent(false)
    } else if (!consent) {
      setErrorMessageConsent(true)
    }
  }


  return (
    <div className='container'>
      <div className={successMsg ? 'succes_msg' : 'hide'}>
        <div className='header_messge'>
          <i className='bi bi-check-circle'></i>
          <h4>Message Sent!</h4>
        </div>
        <p>Thanks for completing the form. We'll be in touch soon!</p>
      </div>
      <h2>Contact Us</h2>
      <form onSubmit={
        (e) => {
          e.preventDefault()
          messageError()
          login(firstName, lastName, email)
        }
      }>
        {/* NAMES */}
        <div className='row'>
          <div id='first_name_container' className='col-sm'>
            <label 
              className='label_name' 
              htmlFor='first_name'
            >
              First Name <span className='green_dot'>*</span>
            </label>
            <input 
              className={errorMessageFirstName ? 'input_name required' : 'input_name'} 
              id='first_name' 
              type='text'
              name='first_name'
              autoComplete='off'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)} />
            <p className={errorMessageFirstName ? 'fn_required' : 'hide'}>
              This field is required
            </p>
          </div>
          <div id='last_name_container' className='col-sm'>
            <label 
              className='label_name' 
              htmlFor='last_name'
            >
              Last Name <span className='green_dot'>*</span>
            </label>
            <input 
              className={errorMessageLastName ? 'input_name required' : 'input_name'}  
              id='last_name' 
              type='text'
              name='last_name'
              autoComplete='off'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)} 
            />
            <p className={errorMessageLastName ? 'fn_required' : 'hide'}>
              This field is required
            </p>
          </div>
        </div>
        {/* EMAIL */}
        <div className='row'>
          <div id='email_container' className='col'>
            <label 
              className='label_email' 
              htmlFor='email_input'
            >
              Email Address <span className='green_dot'>*</span>
            </label>
            <input 
              className={errorMessageEmail ? 'input_email required' : 'input_email'} 
              id='email_input' 
              type='email'
              name='Email'
              autoComplete='off'
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
            />
            <p className={errorMessageEmail ? 'fn_required' : 'hide'}>
              Please enter a valid email address
            </p>
          </div>
        </div>
        {/* QUERY TYPES */}
        <div className='row'>
          <p className='query'>Query Types <span className='green_dot'>*</span></p>
          <div className={general ? 'col checkbox_general checked' : 'col checkbox_general'}>
            <input 
              id='general_enquiry' 
              type='checkbox' 
              onChange={handleQueryGeneral} 
              checked={general} 
            />
            <label htmlFor='general_enquiry'>General Enquiry</label>
          </div>
          <div className={support ? 'col checkbox_support checked' : 'col checkbox_support'}>
            <input 
              id='support_request' 
              type='checkbox' 
              onChange={handleQuerySupport} 
              checked={support} 
            />
            <label htmlFor='support_request'>Support Request</label>
          </div>
          <p className={errorMessageQuery ? 'fn_required' : 'hide'}>
            Please select a query type
          </p>
        </div>
        {/* MESSAGE */}
        <div className='row'>
          <div id='message_constainer' className='col'>
            <label htmlFor='message'>
              Message <span className='green_dot'>*</span>
            </label>
            <textarea 
              className={errorMessageTextArea ? 'textarea required' : 'textarea'}
              id='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)} 
            />
            <p className={errorMessageTextArea ? 'fn_required' : 'hide'}>
              This field is required
            </p>
          </div>
        </div>
        {/* CONSENT */}
        <div className='row'>
          <div id='consent_container' className='col'>
            <input 
              type='checkbox' 
              id='consent'
              onChange={handleConsentChange} />
            <label htmlFor='consent'>
              I consent to being by the team <span className='green_dot'>*</span>
            </label>
          </div>
          <p className={errorMessageConsent ?'fn_required' : 'hide'}>
            To submit this form, please to being contacted
          </p>
        </div>
        {/* BUTTON SUBMIT */}
        <div className='row'>
          <div className='col'>
            <button id='btn_submit' type='submit'>Submit</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Form