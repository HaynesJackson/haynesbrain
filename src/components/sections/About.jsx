import Timeline from "../Timeline";

const timelineEvents = [
    { month: 'September', year: '2024', title: 'Started at Oregon State University', description: 'Started my computer science program, with my option in cybersecurity. Joined Badminton, ACM and Robotics club, played bowling intramural sports, and started talking to professors about undergraduate research; it was a busy term!'},
    { month: 'October', year: '2024', title: 'Started working at Oregon State Alumni Center', description: 'Got to set up events going on around campus, and get to know really nice coworkers.'},
    { month: 'March', year: '2025', title: 'Started working as a Research Assistant', description: 'Working under Dr. Funk after taking his coloquial class, I got to summarize important technology that is coming up every week and build a website for him using Drupal.'},
    { month: 'June', year: '2025', title: 'Freshman year complete', description: 'Got to know a lot of people and meet a lot of connections. Understood the lay of the land, and began to consider my career development options in the future.'},
    { month: 'July', year: '2025', title: 'France Study Abroad', description: 'Began the CS program, initially unsure which direction to specialize in.', img: ''},
    { month: 'September', year: '2025', title: 'Beginning of Sophomore year', description: "Here comes the second year! I begin more CS classes and became an officer of Badminton Club."},
    { month: 'October', year: '2025', title: 'Persued my role as a Research Assistant', description: <>I made the hard decision to discontinue at the Alumni Center and began working all my time as a Research Assistant for Dr. Funk. At this time, I also put up the <a className="underline" href="https://research.engineering.oregonstate.edu/techgoodlife" target="_blank" rel="noreferrer">website</a> for his book.</>},
    { month: 'December', year: '2025', title: 'Began Honors Thesis Research', description: "Laid out the foundation and outline of what I will be researching to write and defend my undergrad thesis! Thank you to Dr. Ma of OSU's College of Food Science for allowing me to work in the lab group."},
    { month: 'March', year: '2026', title: 'Developed scripts for lab work', description: 'My first work as part of my thesis; writing Python scripts to automate data collection in the lab, such as file organization with Glob and Matplotlib for traditional object detection algorithims.'},
    { month: 'May', year: '2026', title: 'BeaverHacks 2026!', description: <>My first hackathon; I worked with a completely random group of students and we made <a className="underline" href="https://github.com/HaynesJackson/CrossWire">CrossWire.</a> This was a great experience and I learned a lot about software development, and working within a team under a time constraint.</>},
    { month: 'June', year: '2026', title: 'Finished sophomore year', description: <>The year has gone too fast! I'm halfway through my time at College and it already feels like I haven't done enough yet.</>},

];

function About () {
    return (
        <div className="fade-down">
            <h2 className="pt-15 px-10 md:px-20">About</h2>
            <div className="text-left mx-10 md:mx-70"> 
                <p className="m-5 text-xl" >I have been at <span className="text-[#D95D39]">Oregon State University</span> for 3 years now, and I have been loving the experiences that come with it. I first became interested in computer science when I took a cybersecurity boot camp at the <span className="text-green-400">University</span> of <span className="text-yellow-300">Oregon</span>. Ever since then, the learning of complex problem solving, programming, and creativity have been fun, challenging and interesting to me. </p>
                <p className="m-5 text-xl">Below is my timeline at Oregon State University, to share about my life and give others a view into what it means to be a student.</p>
            </div>
            <Timeline events={timelineEvents} />
        </div>
    )
}

export default About;