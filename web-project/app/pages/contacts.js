import { useState } from 'react'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import Layout from '../components/Layout.js'

export default function Page() {
  const supabase = useSupabaseClient()
  const [message, setMessage] = useState(null)
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });
  const onSubmit = async function (e) {
    e.preventDefault()
    // Insert contact record into the contacts database
    // Print a friendly confirmation message
    const { firstname, lastname, email, message } = formData;
    const { data, error } = await supabase
      .from('contacts')
      .upsert([
        {
          firstname,
          lastname,
          email,
          message,
        }
      ]);
    setMessage('Contact record inserted successfully!');

    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      message: '',
    });

  }
  return (
    <Layout
      title="Contacts"
      description="Generated by create next app"
    >
      <h1 className='wt-title'>
        Contacts
      </h1>
      <form className="[&_span]:block grid gap-3" onSubmit={onSubmit}>
        <div>
          <label>
            <span>First name</span>
            <input type="text" name="firstname" value={formData.firstname}
              onChange={(e) => setFormData({ ...formData, firstname: e.target.value })} />
          </label>
        </div>
        <div>
          <label>
            <span>Last name</span>
            <input type="text" name="lastname" value={formData.lastname}
              onChange={(e) => setFormData({ ...formData, lastname: e.target.value })} />
          </label>
        </div>
        <div>
          <label>
            <span>Email</span>
            <input type="text" name="email" value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
          </label>
        </div>
        <div>
          <label>
            <span>Message</span>
            <textarea name="message" value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
          </label>
        </div>
        <div>
          <button
            className="rounded py-1 px-3 text-white bg-slate-500 hover:bg-blue-500"
          >
            Send
          </button>
        </div>
      </form>
      {message &&
        <div
          aria-label="Overlow below the drawer dialog"
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setMessage(null)}
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white"
          >
            {message}
          </div>
        </div>
      }
    </Layout>
  )
}
