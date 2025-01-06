
import { useEffect } from 'react';
import LeaveInfo from '../components/leaveForm/LeaveInfo'

function LoginPage(){

    useEffect(()=> {
        document.title = "B A P S - Leave Info";
    },[])

    return(
        <div className="info">
            <LeaveInfo/>
        </div>
    );
}



export default LoginPage;