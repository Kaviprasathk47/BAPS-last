
import { useEffect } from 'react';
import GPage from '../components/gLoin/googleLogin'

function GooglePage(){

    useEffect(() => {
        document.title = 'B A P S - Login';
    } ,[])
    
    return(
        <div className="login">
            <GPage/>
        </div>
    );
}



export default GooglePage;