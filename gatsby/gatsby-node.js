async function createAcademicYearPages (graphql, actions, reporter) {
  const { createPage } = actions
  const result = await graphql(`
    {
      allSanityAcademicYear {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const yearEdges = (result.data.allSanityAcademicYear || {}).edges || []

  yearEdges.forEach(edge => {
    const id = edge.node.id
    const name = edge.node.name
    const path = `/temiesame/${name}/`

    reporter.info(`Creating blog post page: ${path}`)

    createPage({
      path,
      component: require.resolve('./src/templates/academicYear.tsx'),
      context: { id }
    })
  })
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  await createAcademicYearPages(graphql, actions, reporter)
}
