import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Hakkımızda: if & for" />
        <h1>Hakkımızda</h1>
        <h3>Olayın özüne ve kafasına odaklanmış iki garip yazılımcıyız.</h3>
        <p>Olayın özü derken ?</p>
        <p><b>Herhangi bir yazılımı geliştirirken kullanılan temel parçalar.</b></p>
        <p>if ve for gibi mi ?</p>
        <p><b>Yani hem evet hem hayır.</b></p>
        <p>Nasıl yani ?</p>
        <p><b>
          if ve for kelime olarak çoğu programlama dilinin temel yapıtaşlarındandır.
          Ama asıl mesele bu kelimelerde gizli olan mânâdır.
        </b></p>
        <p>Ne mânâsı ?</p>
        <p><b>
          "if" aslında elindekileri ve ortamı gözlemleyip karar vermeni sağlayan araçtır.
          "for" ise bir şey değişene kadar yapmak istediklerini tekrar tekrar yapmanı sağlayan araçtır.
        </b></p>
        <p>Hmmmm pek oturmadı.</p>
        <p><b>
          Biz buna 🌲 Türkçe' de "Ağaç" diyoruz. İngilizcede "Tree" deniyor.
          Ama ağaç ağaçlığından bir şey kaybetmiyor. Aynı ağaç.
        </b></p>
        <p><b>
          Yani dil sadece ağaçtır. Amaaan araçtır işte. Yani biz aslında yoğuz.
        </b></p>
        <p>Anlıyorum 😕 size hayırlı işler.</p>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
