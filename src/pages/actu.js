import * as React from "react";
import Layout from "../component/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Seo from "../component/seo";
import SliderFooter from "../component/slider/slider-footer";
import moment from "moment/moment";
import 'moment/locale/fr';
import Actu from "../component/feed/actu";

const ActuPage = ({ data }) => {
  return(
  <Layout>
    <Seo
      title="Actualité - Zephyr"
      description="L'actualité de l'ASBL Zephyr - Visé"
    />
    <main className="w-10/12 m-auto flex mt-10 flex-col gap-10 md:gap-20 mb-20">
      <article className=" m-auto flex flex-col  gap-10">
      <Actu />
      </article>
      <SliderFooter/>
    </main>
  </Layout>
  )
}
;

export const query = graphql`
  query {
    allDatoCmsActualite(sort: { date: DESC }) {
      edges {
        node {
          slug
          catGorie {
            nomDeLaCategorie
          }
          meta {
            createdAt(formatString: "MMM YYYY", locale: "fr")
            publishedAt(formatString: "ddd d", locale: "fr")
          }
          nomDeLArticle
          texteDeLArticle
          date (locale: "fr")
          imageDeLArticle {
            alt
            gatsbyImageData(width: 250, height: 170)
          }
        }
      }
    }
  }
`;

export default ActuPage;
