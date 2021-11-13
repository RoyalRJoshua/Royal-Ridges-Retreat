import { useStaticQuery, graphql } from "gatsby"

const useBlogPosts = () => {
const BlogPosts = useStaticQuery(graphql`
query BlogPosts {
  allMdx {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          heroImageAlt
          heroImage {
            childrenImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}
`)
    return BlogPosts;
}

export default useBlogPosts;