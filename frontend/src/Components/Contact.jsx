import { Loader } from 'lucide-react'
import { useState } from 'react'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false);


  const sendMail = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await axios.post(
        "http://localhost:4000/send/mail",
         { name, email, message },
         {withcredentials: true, headers: {
          'Content-Type' : "application/json"}});
          setName("");
          setMessage("");
          setEmail("");
          toast.success("Message sent successfully! \n" );
          setLoading(false);
        } catch(error) { 
          toast.error(error.response.data.message);

        }
      }

  return (
        <section className='contact' >
          <form onSubmit={sendMail} >
            <h1> Contact US</h1>
            <div>
              <label>Name</label>
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}  />
            </div>
            <div>
              <label>Email</label>
              <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}  />
            </div>
            <div>
              <label>Message</label>
              <input type="text" name="message" value={message} onChange={(e) => setMessage(e.target.value)}  />
            </div>
            <button type="submit" disabled={loading} style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: loading ? '#ccc' : '#3498db',
              color: 'white',
              padding: '10px 20px',
            }}> {loading && <Loader size={20} color="white" />}
              Send Message</button>
          </form>
        </section>
      )
    }

export default Contact