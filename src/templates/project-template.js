import React from "react"

export default ({ pageContext: { project } }) => (
  <section>
    {project.name} - {project.breed}
  </section>
)