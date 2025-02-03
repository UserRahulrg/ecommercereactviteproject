import styles from "./Header.module.css"

const Header = ()=>{

    return(
        <html id={styles.html}>
        <head id={styles.head}>
        </head >
        <body id={styles.body}>
          <header id={styles.header}>
            <div className="header" id={styles.headerHeader}>
              <div className="headerNav" id={styles.headerNav}>
                <nav id={styles.headerNav}>
                <div className="headerUserDashboard" id={styles.headerUl}>
                  <ul id={styles.headerUl}>

                    <li type="none" id={styles.headerLi}><a href="">Home</a></li>
                    <li type="none" id={styles.headerLi}><a href="">Posts</a></li>
                    <li type="none" id={styles.headerLi}><a href="">Music</a></li>
                    <li type="none" id={styles.headerLi}><a href="">EBooks</a></li>
                    <li type="none" id={styles.headerLi}><a href="">News</a></li>
                    <li type="none" id={styles.headerLi}><a href="">ContactUs</a></li>
                    <li type="none" id={styles.headerLi}><a href="">AboutUs</a></li>
                  </ul>
                    <ul id={styles.headerUl2}>
                      <li type="none" id={styles.headerLi2}><a href="/signin" >SignIn</a></li>
                      <li type="none" id={styles.headerLi2}><a href="/register">Register</a></li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </header>
        </body>
      </html>
    )
}

export default Header;