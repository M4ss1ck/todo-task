import * as React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main className="container flex flex-col items-center mx-auto text-center">
      <Helmet title="Page not found" />
      <h1 className="header">Page not found</h1>
      <p >
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br />
        <br />
        <Link to="/" className="btn">Go home</Link>
      </p>
    </main>
  )
}

export default NotFoundPage
