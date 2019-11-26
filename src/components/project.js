import React from "react"

const Project = ({ project, techs }) => {
    const getTechHTML = (tech) => {
        let techFromList = techs.filter(t => t.slug === tech);

        if(techFromList.length){
            return <img src={ techFromList[0].logo } alt="" />
        }

        return <p>{tech }</p>
    }

    return (
        <div className="project">
            <a href={ project.url } target="_blank" rel="noopener noreferrer">
                <img src={ project.image } style={ project.styles } alt="" className="project-image"/>
            </a>
            <div className="project-content">
                <a href={ project.url } target="_blank" rel="noopener noreferrer">
                    <h4 className="project-title">{ project.title }</h4>
                </a>
                <p dangerouslySetInnerHTML={ { __html : project.description } }></p>

                <div className="flex flex-wrap">
                    <div className="w-full lg:w-4/6">
                        <p className="text-primary mt-2"><strong>technologias:</strong></p>
                        <ul className="project-tags technologies">
                            {
                                project.tech.map(tech => (
                                    <li key={ tech }>{ getTechHTML(tech) }</li>
                                ) )
                            }
                        </ul>
                    </div>

                    <div className="w-full lg:w-2/6">
                        <p className="text-primary mt-2"><strong>atuando como:</strong></p>
                        <ul className="project-tags roles">
                            {
                                project.roles.map(role => <li key={ role }><p>{ role }</p></li> )
                            }
                        </ul>
                    </div>
                </div>

                { project.url && 
                    <a href={ project.url } target="_blank" rel="noopener noreferrer" className="button">Acesse o site</a>
                }
            </div>
        </div>
        )
}

export default Project
