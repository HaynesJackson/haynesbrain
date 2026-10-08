import Project from "../Project";
import crosswire from "../../assets/crosswire.png";
import truthcheck from "../../assets/truthcheck.png";
import rpn from "../../assets/rpn.png";
import gardenplanner from "../../assets/gardenplanner.png";

function Projects () {
    const repos = [
        { repoName: "CrossWire", image: crosswire},
        { repoName: "TruthCheck", image: truthcheck},
        { repoName: "Garden-Planner", image: gardenplanner},
        { repoName: "RPN-Calculator", image: rpn}
        ];
    return (
        <div className="fade-down">
            <h2 className="pt-15 px-10 md:px-15">Projects</h2>
            <div className="grid grid-cols-1 md:overflow-hidden md:grid-cols-2 gap-6 p-6 md:p-10">
                {repos.map((project, i) => (
                    <Project key={i} repoName={project.repoName} image={project.image}></Project>
                ))}
            </div>
        </div>
    );
};

export default Projects;