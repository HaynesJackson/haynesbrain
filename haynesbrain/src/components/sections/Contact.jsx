import { useState } from "react";
import { MdMail, MdMarkEmailRead } from "react-icons/md";
import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import emailjs from "@emailjs/browser"

emailjs.init({
        publicKey: 'Isb3KzlvTqao0K7Dj',
        // Do not allow headless browsers
        limitRate: {
            // Set the limit rate for the application
            id: 'app',
            // Allow 1 request per 10s
            throttle: 10000,
        },
        });
    
const placeholderNames = [
    "Linus Torvalds",
    "Steve Jobs",
    "Abraham Lincoln",
    "John Madden", 
    "John Coltrane",
    "Miles Davis",
    "Herbie Hancock",
    "LeBron James",
    "Emmanuel Macron",
    "Genghis Khan",
    "McCoy Tyner",
    "Bill Gates"
]

const labels = {
    idle: "Send",
    sending: "Sending...",
    sent: "Sent!",
    error: "Sent!"
}

let randomIndex = Math.floor(Math.random() * placeholderNames.length)

const ERROR_MSG = "Something went wrong with sending your message, please retry!"
const fieldStyle = "bg-zinc-900 w-full text-white rounded-lg border border-white/10 px-3 py-3 my-4 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder:text-gray-400 placeholder:opacity-30 transition-colors"

function Contact () {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [status, setStatus] = useState("idle");

    function handleSubmit (event) {
        event.preventDefault();
        if (status === "sent") {
            alert(`It seems you already submitted a message to me.`);
        } else {
            setStatus("sending");
            emailjs.send('service_5rzfwbc', 'template_8flm64m', {name: name, email: email, message: message}).then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setStatus("sent");
                    setName("");
                    setEmail("");
                    setMessage("");
                },
                (error) => {
                    console.log('FAILED...', error);
                    setStatus("error");
                },
            );
        }
    }   

    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
            <form className="flex flex-col gap-1 max-w-xl max-h-xl my-auto mx-auto text-lg text-gray-300 bg-[rgba(10,_10,_10,_0.8)] p-9" onSubmit={handleSubmit}>
                <fieldset className="space-y-9 justify-center">
                    <legend className="text-3xl">Contact Me!</legend>
                    <label className="py-4">
                        Name:{' '}
                        <input type="text" className={fieldStyle} placeholder={placeholderNames[randomIndex]} required value={name} onChange={(e) => setName(e.target.value)}/>
                    </label>
                    <label>
                        Email:{' '}
                        <input type="email" className={fieldStyle} placeholder="exampleemail@exampledomain.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label>
                        Message:{' '}
                        <textarea required className={fieldStyle} placeholder="Hello, it's really great to connect with you." value={message} onChange={(e) => setMessage(e.target.value)} />
                    </label>
                    <div className="flex justify-center">
                        <button aria-label="Send" className="send-icon rounded-lg flex items-center gap-3 border border-purple-500 px-4 py-2 hover:bg-purple-500/20 transition-colors" disabled={status === "sending"} type="submit">
                            {labels[status]}
                            {status === "sent"
                            ? 
                            <MdMarkEmailRead className="send-icon"/> 
                            : 
                            <MdMail className="send-icon"/>}</button>
                    </div>
                </fieldset>
                <div className="flex justify-center items-center">
                    <p className="py-5 px-3 text-2xl">Also find me on</p>
                    <a className="px-3 send-icon transform md:scale-150" href="https://www.linkedin.com/in/jackson-haynes-62992232b" target="_blank">{<FaLinkedin/>}</a>
                    <a className="px-3 send-icon transform md:scale-150" href="https://github.com/HaynesJackson" target="_blank"><FaGithub/></a>
                    <a className="px-3 send-icon transform md:scale-150" href="https://discordapp.com/users/780525502603067443" target="_blank"><FaDiscord/></a>
                </div>
            </form>
            <div>
                {status === "error" && ERROR_MSG}
            </div>
        </div>
    );
}

export default Contact;