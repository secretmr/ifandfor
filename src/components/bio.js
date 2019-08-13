import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { rhythm } from "../utils/typography"
function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author } = data.site.siteMetadata
        return (
          <div
            style={{
              display: `flex`,
              flexDirection : `column`,
              marginBottom: rhythm(2.5),
            }}
          >
            <div>
              <i style={{fontSize : 20}}>Kim la bu <Link to="/about">if & for</Link> ?</i>
            </div>
          </div>
        )
      }}
    />
  )
}
const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`;
export default Bio;