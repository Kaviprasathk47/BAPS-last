
import { useEffect } from 'react';
import Fees from '../components/fees/fees'

function LeaveForm(){

    useEffect(()=> {
        document.title = "B A P S - Fees";
    },[])

    return(
        <div className="login">
            <Fees/>
        </div>
    );
}



export default LeaveForm;