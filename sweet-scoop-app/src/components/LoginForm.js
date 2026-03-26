import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import DisplayStatus from './DisplayStatus.js';

function LoginForm(){
    const [userList, setUserList] = useState([]);
    const [loginState, setLogin] = useState(' ');
    const [message, setMessage] = useState('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try{
                var userData = await fetch('https://jsonplaceholder.typicode.com/users');
                var result = await userData.json()
                setUserList(result);
            } catch (error){
                console.error("Error fetching data", error);
            }};
        fetchData();
    }, []);

    const checkUser = (e) => {
        e.preventDefault();

        const matchedUser = userList.find(
            (u) => u.username.toLowerCase() === user.toLowerCase()
        );

        if (!matchedUser) {
            setLogin('error');
            setMessage('Incorrect Username');
            return;
        }
        if (matchedUser.email !== password) {
            setLogin('error');
            setMessage('Incorrect Password')
            return;
        }
        setLogin('success');
        setMessage('Login successful');
        
        setTimeout(() => {
            navigate('/flavors');
        }, 2000);
    };

    return(
        <div>
            <form>
                <h2>Login</h2>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input onChange = {(e) => setUser(e.target.value)} type="text" id="username" name="username" required ></input>
                </div>
                <br/>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input onChange = {(e) => setPassword(e.target.value)}type="password" id="password" name="password" required></input>
                </div>

                <div>
                    <button type="submit" onClick = {checkUser}>Login</button>
                </div>

                <div>
                    <p>Forgot Password?</p>
                </div>

                <DisplayStatus type = {loginState} message = {message}/>
            </form>
        </div>
    );
}

export default LoginForm;