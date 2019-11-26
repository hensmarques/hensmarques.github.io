/**
* Implement Gatsby's Node APIs in this file.
*
* See: https://www.gatsbyjs.org/docs/node-apis/
*/

const path = require(`path`)

// You can delete this file if you're not using it
exports.createPages = ({ actions }) => {
    const { createPage } = actions
    const projects = [
        {
            name: "Fido",
            breed: "Sheltie",
        },
        {
            name: "Sparky",
            breed: "Corgi",
        },
    ]
    projects.forEach(project => {
        createPage({
            path: `/projeto/${project.name}`,
            component: require.resolve(`./src/templates/project-template.js`),
            context: { project },
        })
    })
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.error(result.errors)
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: path.resolve(`src/templates/post.js`),
    })
  })
}