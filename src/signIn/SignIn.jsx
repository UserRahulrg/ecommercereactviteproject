import styles from "./SignIn.module.css"

const SignIn= ()=>{

    return(
        <div id={styles.formRegister}>
            <div id={styles.div1}>

            </div>
            <div id={styles.formDiv}>
                <h2 id={styles.formh2}>SignIn Page</h2>
                <form action="" id={styles.form}>
                    <label>Username/Email </label><br />
                    <input type="text" /><br /><br />
                    <label htmlFor="">Password </label><br />
                    <input type="password" /><br /><br />
                    <button type="submit" id={styles.formButton}>Submit</button>
                    <li type="none" ><a href="">Forget Password</a></li><br />
                    <li type="none"><a href="">New User/Register Here</a></li>
                </form>
            </div>
            <div id={styles.div3}>

            </div>
        </div>
    )
}

export default SignIn;