
import { useEffect } from 'react';
import LeaveFormPage from '../components/leaveForm/leaveFrom'

function LeaveForm(){

    useEffect(()=> {
        document.title = "B A P S - Signup";
    },[])

    return(
        <div className="login">
            <LeaveFormPage/>
        </div>
    );
}



export default LeaveForm;