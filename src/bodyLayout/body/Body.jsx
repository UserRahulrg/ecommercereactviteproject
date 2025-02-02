import styles from "./Body.module.css"

const Body =()=>{

    return(
        <div id={styles.bodyMain}>
            <h2>Body</h2>
            <div id={styles.bodyPhoto}>
                <h3>bodyImage</h3>
            </div>
        </div>
    )
}

export default Body;