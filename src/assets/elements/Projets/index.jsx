import projects from "../../../data/projets.json";
import { useState } from "react";
import arrowLeft from "../../images/left_arrow.png";
import arrowRight from "../../images/right_arrow.png";
import github from "../../images/github-white-icon.svg";
import github_pages from "../../images/github-pages.svg";

function Projets() {
    const [compteur, updateCompteur] = useState(0);


    return (
        <section id="Projets">
            <h2>Mes projets</h2>
            <div className="projectHeader">
                <h3 className="currentProjectName">{projects[compteur].title}</h3>
                <p>{projects[compteur].description}</p>
            </div>
            <div className="slider">
                <iframe tabindex="-1" lazy src={projects[compteur].demo}
                    title={`Apperçu du site ${projects[compteur].title}`}
                    className="iframe-preview" />

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
                    <button
                        className="github-icon"
                    >
                        <img src={github} />{" "}
                    </button>
                    <button
                        className="github-pages-icon"
                    >
                        <img src={github_pages} />{" "}
                    </button>
                </div>


            </div>
        </section>
    )
}

export default Projets