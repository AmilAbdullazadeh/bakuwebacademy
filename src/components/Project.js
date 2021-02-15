import React, {useState, useEffect} from 'react';
import sanityClient from "../client";

export default function Project() {
    const [projectData, setProjectData] = useState(null)

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            projectType,
            link,
            tags,
        }`)
            .then((data) => setProjectData(data))
            .catch(console.error)
    }, [])

    return (
        <main className="main-preoject">
            <h1 className="head1-project"></h1>
            <h2 className="head2-project">Welcome our projects page !</h2>
            <section className="section-project">
                {projectData && projectData.map((project, idx) => (
                    <article key={idx} className="article-project">
                        <h3 className="header3-project">
                            <a
                                href={project.link}
                                alt={project.title}
                                target="_blank"
                                rel="noopener noreferrer"
                            >{project.title}</a>
                        </h3>
                        <div className="section-div-project">
                        <span>
                            <strong>Finishid on</strong>: {" "}
                            {new Date(project.date).toLocaleDateString()}
                        </span>
                            <span>
                            <strong>Company</strong>: {project.place}
                        </span>
                            <span>
                            <strong>Type</strong>: {" "}
                                {project.projectType}
                        </span>
                            <p>{project.description}</p>
                            <a
                                className="btn-right"
                                target="_blank"
                                href={project.link}>
                                View the Project {" "}
                                <span role="img" aria-label="right pointer">👉🏻</span>
                            </a>
                        </div>
                    </article>
                ))}
            </section>
        </main>
    )
}