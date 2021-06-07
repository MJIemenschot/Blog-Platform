import { useState } from 'react'

const Login = () => {
    return(
        <div>
            <h1>Login</h1>
            <div className="form">
                    <label>Gebruikersnaam</label>
                    <input
                        type="text"
                        placeholder="Vul je hier je gebruikersnaam in..."
                    >
                    </input>

            </div>
            <div className="form">
                    <label>Wachtwoord</label>
                    <input
                        type="text"
                        placeholder="Vul hier je Wachtwoord in..."
                    >
                    </input>
            </div>
            <div className="form">
                    <label>Herhaal achtwoord</label>
                    <input
                        type="text"
                        placeholder="Herhaal je Wachtwoord..."
                    >
                    </input>
            </div>
            <input type ='submit'value='Login' className='btn-block'/>
        </div>
    )
}
export default Login