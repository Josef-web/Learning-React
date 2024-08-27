import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from "./Button/Button.jsx";
import Student from "./Student.jsx";


function App() {
    return(
        <>
            <Header/>
            <Food/>
            <Card/>
            <Card/>
            <Card/>
            <br/>
            <Button/>
            <Student name='Spongebob' age={30} isStudent={true}/>
            <Student name='Patrick' age={42} isStudent={false}/>
            <Student name='Squidward' age={23} isStudent={false}/>
            <Student/>
            <Footer/>
        </>
    );
}

export default App
