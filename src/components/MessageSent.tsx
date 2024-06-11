import 'bootstrap-icons/font/bootstrap-icons.css'

const MessageSent = () => {
  return (
    <div className='succes_msg'>
      <div className='header_messge'>
        <i className='bi bi-check-circle'></i>
        <h4>Message Sent!</h4>
      </div>
      <p>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  )
}

export default MessageSent