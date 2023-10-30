
import PropTypes from 'prop-types';
import './Login.scss'
import { useState } from 'react';

interface receivedProps {
    setToken: React.Dispatch<React.SetStateAction<undefined>>;
}


async function loginUser(credentials: unknown) {
    return fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(data => data.json())
}


const Login : React.FC<receivedProps> = ({setToken}) => {
    
    const [username, setUsername] = useState<string>()
    const [password, setPassword] = useState<string>()

    const handleSubmit = async (e: React.FormEvent) => {    
        e.preventDefault();        
        const token = await loginUser(
            {
                username,
                password
            }
        )
          

        setToken(token)
    }

    return (
        <div className="login-wrapper">    
            <h1>Please Log in</h1>            
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type='text' onChange={e => setUsername(e.target.value)} />
                </label>

                <label>
                    <p>Password</p>
                    <input type='password' onChange={e => setPassword(e.target.value)} />
                </label>

                <div>
                    <button type='submit'>
                        Submitt
                    </button>
                </div>        
            </form>

        
        </div>
    )
}

export default Login

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}