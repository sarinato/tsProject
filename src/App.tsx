import './App.scss'
import Form from './components/Form/Form'

const App : React.FC = () => {


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

export default App
