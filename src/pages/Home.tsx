import React from "react"
import '../App.scss'
import Form from '../components/Form/Form'


const Home = () => {
  return (
    <div className='container'>
        
    <div className='title-div'>
      <h1>Welcome to our app</h1>
    </div>

    <div className='form-div'>
      <Form />
    </div>
  </div>
  )
}

export default Home