import styles from "./Register.module.css"

const Register = ()=>{

    return(
        <div id={styles.formRegister}>
            <div id={styles.div1}>

            </div>
            <div id={styles.formDiv}>
                <h2 id={styles.formh2}>Register Page</h2>
                <form action="" id={styles.form}>
                    <label>Username </label><br />
                    <input type="text" /><br /><br />
                    <label>Email </label><br />
                    <input type="text" /><br /><br />
                    <label htmlFor="">Password </label><br />
                    <input type="password" /><br /><br />
                    <label htmlFor="">Confirm Password </label><br />
                    <input type="password"></input><br /><br />
                    <label>Dob </label><br />
                    <input type="date" /><br /><br />
                    <button type="submit" id={styles.formButton}>Submit</button>
                </form>
            </div>
            <div id={styles.div3}>

            </div>
        </div>
    )
}

export default Register;