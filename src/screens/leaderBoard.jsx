
import { useEffect } from 'react';
import LeaderBoard from '../components/leaderBoard/leaderBoard';

function LoginPage(){

    useEffect(()=> {
        document.title = "B A P S - Leader Board";
    },[])

    return(
        <div className="login">
            <LeaderBoard/>
        </div>
    );
}



export default LoginPage;