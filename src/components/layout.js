import React from "react";
import { Link } from "gatsby";
import { rhythm, scale } from "../utils/typography";
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import "./layout.css";
import Switch from '../components/core/switch';
class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header = (
      <h6
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          fontSize: "35px"
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h6>
    )
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          {header}
          <div className="themeToggler">
            <ThemeToggler>
              {({ toggleTheme }) => (
                <Switch
                  value={["Gece","Gündüz"]}
                  state={localStorage.theme === "dark"}
                  getFunc={(e) => {
                    toggleTheme(e ? 'dark' : 'light');
                  }}
                />
              )}
            </ThemeToggler>
          </div>
        </header>
        <main>{children}</main>
        <footer>
          <div>
            <b>Telif Hakkı © {new Date().getFullYear()} if ve for'a aittir.</b>
          </div>
        </footer>
      </div>
    )
  }
}
export default Layout;