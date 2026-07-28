import projects from "../../../data/projets.json";
import { useState, useRef, useEffect } from "react";
import arrowLeft from "../../images/left_arrow.png";
import arrowRight from "../../images/right_arrow.png";
import github from "../../images/github-white-icon.svg";
import github_pages from "../../images/github-pages.svg";

function Projets() {
    const [compteur, updateCompteur] = useState(0);
    const sliderRef = useRef(null);
    const [scale, setScale] = useState(1);
    const [iframeTabIndex, setIframeTabIndex] = useState(-1);

    useEffect(() => {
        function resize() {
            if (!sliderRef.current) return;

            const width = sliderRef.current.offsetWidth;

            setScale(width / 1920);
        }

        resize();

        window.addEventListener("resize", resize);

        return () => window.removeEventListener("resize", resize);
    }, []);


    function changeTabIndex() {
        if (iframeTabIndex == -1) {
            setIframeTabIndex(0);
            return;
        }

        setIframeTabIndex(-1);
        return;
    }


    return (
        <section id="Projets">
            <div className="projetsContainer">
                <h2>Mes projets</h2>
                <div className="projectHeader">
                    <h3 className="currentProjectName">{projects[compteur].title}</h3>
                    <p>{projects[compteur].description}</p>
                </div>
                <div className="slider"
                    ref={sliderRef}
                    title={`Apperçu du site ${projects[compteur].title}`}
                >
                    <button
                        className="ifram_nav sr-only-focusable"
                        onClick={() => changeTabIndex()}
                    >
                        Navigation dans le site intégré
                    </button>
                    <div className="iframe-wrapper">
                        <iframe
                            tabIndex={iframeTabIndex}
                            loading="lazy"
                            src={projects[compteur].demo}
                            className="iframe-preview"
                            aria-hidden="true"
                            style={{ transform: `scale(${scale})` }}
                        />
                    </div>

                    <button
                        className="arrow left"
                        aria-label="Projet précédent"
                        onClick={() => {
                            compteur > 0
                                ? updateCompteur(compteur - 1)
                                : updateCompteur(
                                    projects.length - 1,
                                );
                        }}
                    >
                        <img src={arrowLeft} alt="" />
                    </button>

                    <button
                        className="arrow right"
                        aria-label="Projet suivant"
                        onClick={() => {
                            compteur < projects.length - 1
                                ? updateCompteur(compteur + 1)
                                : updateCompteur(0);
                        }}
                    >
                        <img src={arrowRight} alt="" />{" "}
                    </button>
                    <div className="github-links">
                        <a href={projects[compteur].github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-icon"
                            aria-label={
                                `Lien GitHub du projet ${projects[compteur].title}`
                            }
                        >
                            <img src={github} alt="" />
                            <span className="tooltip">
                                Lien vers GitHub
                            </span>
                        </a>

                        <a href={projects[compteur].demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-pages-icon"
                            aria-label={
                                `Lien GitHub Pages du projet ${projects[compteur].title}`
                            }
                        >
                            <img src={github_pages} alt="" />
                            <span className="tooltip">
                                Lien vers GitHub Pages
                            </span>
                        </a>
                    </div>


                </div >
                <div className="stack">
                    <h3 className="currentProjectName">{projects[compteur].stack.length <= 1 ? "Technologie utilisée :" : "Technologies utilisées :"}</h3>
                    <ul className="stack-list">
                        {
                            projects[compteur].stack.map((element) => {
                                return <li key={element}>{element}</li>;
                            })
                        }
                    </ul>
                </div>
            </div>
        </section >
    )
}

export default Projets