import styles from './Button.module.css'

function Button() {

    /* let count = 0;
    const handleClick = (name) => {
        //console.log("ouch!")
        if (count < 3){
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else{
            console.log(`${name} stop clicking me`);
        }

    }*/
    //const handleClick2 = (name) => console.log(`${name} clicked!`)

    const handleClick = (e) => e.target.textContent = 'OUCH 🤐';

    return (
        <>
        <button className={styles.button}>Click me</button>
            <br/>
        <button onClick={(e) => handleClick(e)}>Click me 😁</button>
        </>
    );
}

export default Button;