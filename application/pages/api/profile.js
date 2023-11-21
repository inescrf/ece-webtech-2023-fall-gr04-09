// pages/api/profile.js
export default function handler(req, res) {
    if(false){ // Hardcoded for the future
      return res.status(401).json('Resource access not authorized')
    }
    res.status(200).json({
      username: 'hugowhodidlab6',
      email: 'hugowhodidlab6@adaltas.com'
    })
  }