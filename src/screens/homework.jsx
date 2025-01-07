
import { useEffect } from 'react';
import HomeWork from '../components/homework/homework';

function LoginPage(){

    useEffect(()=> {
        document.title = "B A P S - HomeWork";
    },[])

    return(
        <div className="login">
            <HomeWork/>
        </div>
    );
}



export default LoginPage;