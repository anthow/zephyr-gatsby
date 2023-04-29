import * as React from "react";
import Layout from "../component/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Seo from "../component/seo";
import SliderFooter from "../component/slider/slider-footer";

const ActuPage = ({ data }) => (
  <Layout>
    <Seo
      title="Actualité - Zephyr"
      description="L'actualité de l'ASBL Zephyr - Visé"
    />
    <main className="w-10/12 m-auto flex mt-10 flex-col gap-10 md:gap-20 mb-20">
      <article className=" m-auto flex flex-col  gap-10">
        <h2 className="text-2xl text-bleu-z font-semibold">
          Nos Dernières actualités
        </h2>
        <section className="flex flex-col md:grid grid-cols-3 items-center gap-20">
          {data.allDatoCmsActualite.edges.map(({ node }) => {
            return (
              <Link to={node.slug}>
                <div className="flex flex-col p-5 gap-10 bg-bleu-z text-white">
                  <div className="flex flex-row gap-10 justify-between items-center">
                    <h3 className="text-xl">{node.nomDeLArticle}</h3>
                    <div className="flex flex-col  text-center">
                      <p className="bg-orange-z p-2">{node.meta.createdAt}</p>
                      <div className="bg-orange-z/80 py-5 px-5 flex flex-col">
                        <p>{node.meta.publishedAt}</p>
                      </div>
                    </div>
                  </div>
                  <figure className="m-auto">
                    <GatsbyImage
                      image={node.imageDeLArticle.gatsbyImageData}
                      alt={node.imageDeLArticle.alt}
                    />
                  </figure>
                  <p className="italic">{node.catGorie.nomDeLaCategorie}</p>
                </div>
              </Link>
            );
          })}
        </section>
      </article>
      <SliderFooter/>
    </main>
  </Layout>
);

export const query = graphql`
  query {
    allDatoCmsActualite(sort: { date: DESC }) {
      edges {
        node {
          slug
          date
          catGorie {
            nomDeLaCategorie
          }
          meta {
            createdAt(formatString: "MMM YYYY", locale: "fr")
            publishedAt(formatString: "ddd d", locale: "fr")
          }
          nomDeLArticle
          texteDeLArticle
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
