const Header = ()=>{

    return(
        <html>
        <head>
        </head>
        <body>
          <header>
            <div className="header">
              <div className="headerNav">
                <nav>
                  <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Posts</a></li>
                    <li><a href="">Music</a></li>
                    <li><a href="">Free EBooks</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">About Us</a></li>
                  </ul>
                  <div className="headerUserDashboard">
                    <li><a href="">Sign In</a></li>
                    <li><a href="">Register</a></li>
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