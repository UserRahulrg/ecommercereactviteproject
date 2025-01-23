import styles from "./Header.module.css"

const Header = ()=>{

    return(
        <html id={styles.html}>
        <head id={styles.head}>
        </head >
        <body id={styles.body}>
          <header id={styles.header}>
            <div className="header" id={styles.headerHeader}>
              <div className="headerNav">
                <nav id={styles.headerNav}>
                  <ul id={styles.headerUl}>

                    <li type="none" id={styles.headerLi}><a href="">Home</a></li>
                    <li type="none" id={styles.headerLi}><a href="">Posts</a></li>
                    <li type="none" id={styles.headerLi}><a href="">Music</a></li>
                    <li type="none" id={styles.headerLi}><a href="">Free EBooks</a></li>
                    <li type="none" id={styles.headerLi}><a href="">News</a></li>
                    <li type="none" id={styles.headerLi}><a href="">Contact Us</a></li>
                    <li type="none" id={styles.headerLi}><a href="">About Us</a></li>
                  </ul>
                  <div className="headerUserDashboard" id={styles.headerUl}>
                    <ul>
                      <li type="none" id={styles.headerLi}><a href="" >Sign In</a></li>
                      <li type="none" id={styles.headerLi}><a href="">Register</a></li>
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