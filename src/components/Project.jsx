import { useState, useEffect } from "react";

function Project ({ repoName, image }) {
    const [repo, setRepo] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/HaynesJackson/${repoName}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`);
            }
            return response.json();
        })
        .then(data=> {
            setRepo(data);
        })
        .catch(err => {
            setError(err.message)
        }) 
    }, [repoName]);

    if (error) {
        return (
            <div className="block p-6 rounded-xl border border-purple-400/30 bg-zinc-900 text-white">
                <p>Couldnt load {repoName}...{error}</p>
            </div>
        )
    }

    if (!repo) {
        return (
            <div className="bg-purple-400 border border-l-4 p-2 mt-1.25 block p-6 rounded-xl border border-purple-400/30 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/30">
                <p className="text-current mt-0.5 text-color-white">Loading...</p>
            </div>
    )};

    return (
        <a href={repo.html_url} target="_blank" rel="noreferrer" className="flex block p-6 pb-2 rounded-xl border border-purple-400/30 bg-zinc-900 text-white
transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02]
hover:shadow-xl hover:shadow-purple-500/30"> 
            <div className="flex flex-col flex-1 pr-4">
                <h2 className="mt-0.5 text-current">{repo.name}</h2>
                <p className="text-sm pt-2">{repo.description}</p>
                <p className="text-xs text-left mt-auto pb-3 pt-5">Click to see on GitHub</p>
            </div>
            
            <img src={image} alt={`${repoName} screenshot`} className="w-50 h-50 object-cover rounded-lg mb-4 hidden md:flex"/>
            
        </a>
    );
}

export default Project;