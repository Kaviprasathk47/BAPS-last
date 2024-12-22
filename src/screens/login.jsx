
import { useEffect } from 'react';
import Login from '../components/login/Login'

function LoginPage(){

    useEffect(()=> {
        document.title = "B A P S - Signup";
    },[])

    return(
        <div className="login">
            <Login/>
        </div>
    );
}



export default LoginPage;