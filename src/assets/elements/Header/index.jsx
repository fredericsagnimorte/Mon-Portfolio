function Header() {

    return (
        <header>
            <div className="headerContainer">
                <h1 className="logo">
                    <span className="extended">Frédéric Sagnimorte</span>
                    <span className="reduced">FS</span>
                </h1>
                <nav>
                    <ul>
                        <a href="#Présentation"><li>Présentation</li></a>
                        <a href="#Projets"><li>Projets</li></a>
                        <a href="#Contact"><li>Contact</li></a>
                    </ul>
                </nav>
            </div>
        </header >
    )
}

export default Header