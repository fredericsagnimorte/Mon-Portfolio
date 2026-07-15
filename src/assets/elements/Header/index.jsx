function Header() {

    return (
        <header>
            <div className="headerContainer">
                <h1 className="logo">
                    <span className="extended">Frédéric Sagnimorte</span>
                    <span className="reduced">FS</span>
                </h1>
                <nav aria-label="Naviagation principale">
                    <ul>
                        <li><a href="#Présentation">Présentation</a></li>
                        <li><a href="#Projets">Projets</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header