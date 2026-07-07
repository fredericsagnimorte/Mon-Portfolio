import projects from "../../../data/projets.json";
import { useState } from "react";
import arrowLeft from "../../images/left_arrow.png";
import arrowRight from "../../images/right_arrow.png";
import github from "../../images/github-white-icon.svg";
import github_pages from "../../images/github-pages.svg";

function Projets() {
    const [compteur, updateCompteur] = useState(0);
    const [iframeTabIndex, setIframeTabIndex] = useState(-1);


    function changeTabIndex() {
        if (iframeTabIndex == -1){
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
                    title={`Apperçu du site ${projects[compteur].title}`}
                >
                    <button
                        className="ifram_nav"
                        aria-label="Bouton de navigation dans le site intégré"
                        onClick={() => changeTabIndex()}
                    >
                    </button>
                    <iframe tabindex={`${iframeTabIndex}`} lazy src={projects[compteur].demo}
                        className="iframe-preview"
                        aria-hidden="true"
                    />

                    <button
                        className="arrow left"
                        aria-label="Image précédente"
                        onClick={() => {
                            compteur > 0
                                ? updateCompteur(compteur - 1)
                                : updateCompteur(
                                    projects.length - 1,
                                );
                        }}
                    >
                        <img src={arrowLeft} />
                    </button>

                    <button
                        className="arrow right"
                        aria-label="Image suivante"
                        onClick={() => {
                            compteur < projects.length - 1
                                ? updateCompteur(compteur + 1)
                                : updateCompteur(0);
                        }}
                    >
                        <img src={arrowRight} />{" "}
                    </button>
                    <div className="github-links">
                        <a href={projects[compteur].github} target="_blank" rel="noopener noreferrer" className="github-icon">
                            <img src={github} alt="GitHub" />
                            <span className="tooltip">
                                Lien vers GitHub
                            </span>
                        </a>

                        <a href={projects[compteur].demo} target="_blank" rel="noopener noreferrer" className="github-pages-icon">
                            <img src={github_pages} alt="GitHub Pages" />
                            <span className="tooltip">
                                Lien vers GitHub Pages
                            </span>
                        </a>
                    </div>


                </div >
            </div>
        </section >
    )
}

export default Projets