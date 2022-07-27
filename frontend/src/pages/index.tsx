import * as React from "react"
import { Helmet } from "react-helmet"
import Interface from "../components/Interface"

const IndexPage = () => {
  return (
    <main className="container flex flex-col items-center mx-auto text-center">
      <Helmet title="TODO app" />
      <Interface />
    </main>
  )
}

export default IndexPage
