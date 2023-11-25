import { useState } from 'react'
import Layout from '../components/Layout'

export default function Page() {
  const [message, setMessage] = useState(null)
  const onSubmit = function (e) {
    e.preventDefault()
    const data = new FormData(e.target)
    setMessage(
      <div>
        <h2 className="text-center mt-3">Form data</h2>
        <pre><code>{JSON.stringify(Object.fromEntries(data.entries()), null, 2)}</code></pre>
      </div>
    )
  }
  return (
    <Layout>
      <div>
        <h1 className='wt-title'>
          Login with native elements
        </h1>
        <form className="[&_span]:block [&_div]:py-3" onSubmit={onSubmit}>
          <div>
            <label>
              <span>Username</span>
              <input type="text" name="username" />
            </label>
          </div>
          <div>
            <label>
              <span>Password</span>
              <input type="password" name="password" />
            </label>
          </div>
          <div>
            <button className="bg-slate-500 hover:bg-blue-500 text-white px-3 py-2 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
      {message &&
        <div
          aria-label="Overlow below the drawer dialog"
          className="fixed inset-0 bg-black/80 flex items-center justify-center"
          onClick={() => setMessage(null)}
          role="dialog"
        >
          <div
            aria-label="Alert pane"
            className="max-h-[90vh] max-w-[95vw] overflow-auto p-4 prose bg-white">
            {message}
          </div>
        </div>
      }
    </Layout>
  )
}
