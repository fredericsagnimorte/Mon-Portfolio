function Footer() {
    return (
        <footer>
            <nav className="footer-nav">
                <section>
                    <h2>Liens rapides</h2>
                    <ul>
                        <li><a href="#Présentation">Accueil</a></li>
                        <li><a href="#Projets">Projets</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>
                </section>

                <section>
                    <h2>Liens professionnels</h2>
                    <ul>
                        <li><a href="https://github.com/fredericsagnimorte">GitHub</a></li>
                    </ul>
                </section>
            </nav>

            <p>© 2026 Frédéric Sagnimorte. Tous droits réservés.</p>
            <p>
                    <img className="W3C-CSS"
                        src="https://jigsaw.w3.org/css-validator/images/vcss"
                        alt="CSS Valide !" />
            </p>
        </footer>
    );
}

export default Footer