import LoginForm from './components/LoginForm.js';
import DisplayStatus from './components/DisplayStatus.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
function LoginPage(){

    return(
        <div>
        <Header />
        <LoginForm />
        <Footer />
        </div>
    );
}

export default LoginPage;