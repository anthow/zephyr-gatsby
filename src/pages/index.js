import * as React from "react";
import Layout from "../component/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Link } from "gatsby";

const IndexPage = ({ data }) => (
  <Layout>
    <main className="flex flex-col gap-10 md:gap-20 mb-20">
      <article className="w-12/12 p-10 h-1/2" id="image-accueil">
        <section className="bg-white/70 flex flex-col gap-10 p-5 rounded-xl md:w-1/3">
          <h1 className="text-3xl text-bleu-z font-black">
            {data.datoCmsPageDAccueil.titreAccroche}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPageDAccueil.texteAccroche,
            }}
          />

          <button className="bg-orange-z opacity-100                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           px-4 py-2 rounded-lg text-white font-bold hover:bg-gray-500 w-max">
            s'inscrire
          </button>
        </section>
      </article>

      <article className="w-10/12 m-auto flex flex-col items-center gap-10">
        <h2 className="text-2xl">Nos missions</h2>
        <section className="flex flex-col md:flex-row gap-20 justify-between">
          <div className="flex flex-col items-center gap-5">
            <figure>
              <GatsbyImage
                className=" m-auto max-w-full"
                image={data.datoCmsPageDAccueil.imageMission1.gatsbyImageData}
                alt={data.datoCmsPageDAccueil.imageMission1.alt}
              />
            </figure>
            <h3 className="text-xl">{data.datoCmsPageDAccueil.titreMission1}</h3>

            <div
              className="text-center"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageDAccueil.texteMission1,
              }}
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <figure>
              <GatsbyImage
                className=" m-auto max-w-full"
                image={data.datoCmsPageDAccueil.imageMission2.gatsbyImageData}
                alt={data.datoCmsPageDAccueil.imageMission2.alt}
              />
            </figure>
            <h3 className="text-xl">{data.datoCmsPageDAccueil.titreMission2}</h3>

            <div
              className="text-center"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageDAccueil.texteMission2,
              }}
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <figure>
              <GatsbyImage
                className=" m-auto max-w-full"
                image={data.datoCmsPageDAccueil.imageMission3.gatsbyImageData}
                alt={data.datoCmsPageDAccueil.imageMission3.alt}
              />
            </figure>
            <h3 className="text-xl t"> {data.datoCmsPageDAccueil.titreMission3}</h3>

            <div
              className="text-center"
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageDAccueil.texteMission3,
              }}
            />
          </div>
        </section>
      </article>
      <article className="w-10/12 m-auto flex flex-col  gap-10">
        <h2 className="text-2xl">Nos Dernières actualités</h2>
        <section className="flex flex-col md:grid grid-cols-3 items-center gap-20">
          {data.allDatoCmsActualite.edges.map(({ node }) => {
            return (
              <Link to={"actu/" + node.slug}>
                <div className="flex flex-col p-5 gap-10 bg-gray-600 text-white">
                  <div className="flex flex-row gap-10 justify-between items-center">
                    <h3 className="text-xl">{node.nomDeLArticle}</h3>
                    <div className="flex flex-col  text-center">
                    <p className="bg-orange-600 p-2">{node.meta.createdAt}</p>
                      <div className="bg-orange-800 py-2 px-5 flex flex-col">
                      <p>{node.meta.publishedAt}</p>

                      </div>
                    </div>
                  </div>
                  <figure>
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
    </main>
  </Layout>
);

export const query = graphql`
  query {
    datoCmsPageDAccueil {
      texteAccroche
      texteMission1
      texteMission2
      texteMission3
      titreAccroche
      titreMission1
      titreMission2
      titreMission3
      imageMission1 {
        alt
        gatsbyImageData
      }
      imageMission2 {
        alt
        gatsbyImageData
      }
      imageMission3 {
        gatsbyImageData
        alt
      }
    }
    allDatoCmsActualite(limit: 6) {
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

export default IndexPage;

export const Head = () => <title>page d'accueil</title>;
