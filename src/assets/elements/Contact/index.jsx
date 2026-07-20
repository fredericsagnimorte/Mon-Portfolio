import { sendEmail, sendEmailFeedback } from "../../services/email";
import { useRef, useState } from "react";

function Contact() {

    const form = useRef();
    const [sent, setSent] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        sendEmail(form.current)
            .then(() => {
                setSent(true);
                form.current.reset();
                setTimeout(()=>setSent(false),20000);
            })
            .catch((error) => {
                alert("Erreur :", error);
            });

            sendEmailFeedback(form.current)
            .then()
            .catch((error)=>{
                alert("Erreur", error);
            })
    }

    return (
        <section id="Contact">
            <h2>Contact</h2>
            <span>Une question ? Je suis à votre écoute.</span>
            <form
                ref={form}
                onSubmit={handleSubmit}
                className="contact-form"
            >
                <div className="form-name">
                    <label htmlFor="name">Nom</label>
                    <input type="text" name="name" id="name" autoComplete="family-name" required />
                </div>
                <div className="form-firstname">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" id="firstname" autoComplete="firsname" required />
                </div>
                <div className="form-mail">
                    <label htmlFor="email">E-mail</label>
                    <input type="email" name="email" id="email" autoComplete="email" required />
                </div>
                <div className="form-sujet">
                    <label htmlFor="sujet">Objet du contact</label>
                    <input type="text" name="sujet" id="sujet" required />
                </div>
                <div className="form-message">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" placeholder="Votre message..." required ></textarea>
                </div>
                <button type="submit" className="submit-button">Envoyer</button>
            </form>
            <div onClick={()=>setSent(false)} className={sent ? "toast toast-success show" : "toast toast-success"} id="toast" aria-live="polite">
                <p>Votre message a été envoyé avec succès.</p>
            </div>
        </section>
    )
}

export default Contact