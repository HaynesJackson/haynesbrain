import me from "../../assets/me.jpeg";
import piano from "../../assets/piano.jpeg";
import lab from "../../assets/lab.jpeg";

const sections = [
  {
    id: "intro",
    image: me,
    alt: "Photo of Jackson",
    text: (
      <p>
        Hello, I'm Jackson, a junior at OSU 🦫. I enjoy programming, CTF challenges with the
        cybersecurity club at Oregon State, and meeting new friends in my classes and work. I am interested in machine learning, network security, and ethics in Computer Science.
      </p>
    ),
  },
  {
    id: "lab-work",
    image: lab,
    alt: "Photo of me with the lab",
    text: (
        <p>Recently, as part of my Honors thesis research, I have been working with the College of
        Food Science, using a YOLO model to detect bacterial growth, in hopes that low-cost
        microscopy can be sufficient to capture important food safety concerns. In addition, I write Python scripts to automate data collection from the lab.
        </p>
    ),
  },
  {
    id: "spare-time",
    image: piano,
    alt: "Photo of Jackson",
    text: (
      <p>
        In my spare time, I enjoy bowling at the{" "}
        <a
          href="https://www.instagram.com/mulanesandgames/"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          MU Lanes and Games
        </a>
        , playing piano, or hanging out with friends! Just recently I got the opportunity to visit France for an undergraduate study abroad expierence, with the OSU Honors College.
      </p>
    ),
  },
];

function Home() {
  return (
    <div className="fade-down">
      <h2 className="pt-15 px-6 md:px-10">Home</h2>

      {sections.map((item, i) => (
        <div
          key={item.id}
          className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] md:items-center gap-6 md:gap-10 px-6 md:px-10 py-8"
        >
          {/* Text: always the middle column */}
          <div className="text-left md:col-start-2 md:row-start-1 text-xl">{item.text}</div>

          {/* Photo: left on even rows, right on odd rows (desktop) */}
          <div
            className={`flex justify-center md:row-start-1 ${
              i % 2 === 0 ? "md:col-start-1" : "md:col-start-3"
            }`}
          >
            <img
              src={item.image}
              alt={item.alt}
              className="w-40 h-48 object-cover rounded-lg"
            />
          </div>
        </div>
      ))}
    <div className="text-left px-8 pb-10 text-xl md:hidden">You can find other information about me including projects, my time at Oregon State, my Résumé, and how to contact me! Just click the hamburger icon in the top right!</div>
    <div className="text-left px-80 py-10 text-xl hidden md:block">You can find other information about me including projects, my time at Oregon State, my Résumé, and how to contact me! Just click an option on the top!</div>

    </div>
  );
}

export default Home;