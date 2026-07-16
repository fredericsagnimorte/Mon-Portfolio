import programing from "../../images/programing.webp";

function Hero() {
    return (
        <section id="Présentation">
            <div className="presentation">
                <img src={`${programing}`}
                    alt="Illustration développement web"
                    className="hero-image"
                />
                <div className="hero-content">

                    <h2>Développeur Front-End React</h2>
                    <p>Bonjour, je suis Frédéric</p>
                    <p>
                        Passionné par le développement web, je transforme des maquettes en interfaces modernes, responsives et accessibles grâce à React, JavaScript et CSS.
                    </p>
                    <p>
                        J'aime concevoir des applications web où le design, la performance et l'expérience utilisateur occupent une place centrale.
                    </p>

                    <ul className="hero-stack">
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>

        </section>
    )
}

export default Hero