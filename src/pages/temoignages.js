import * as React from "react";
import Layout from "../component/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import ReactAudioPlayer from "react-audio-player";
import SliderFooter from "../component/slider/slider-footer";

const temoignagesPage = ({ data }) => (
  <Layout>
    <div className="flex flex-col gap-10 md:gap-20">
      <article className="w-12/12">
        {/* Validation si imageTMoignage existe avant de tenter de l'afficher */}
        {data.datoCmsPageTemoignage && data.datoCmsPageTemoignage.imageTMoignage && (
          <figure>
            <GatsbyImage
              className="w-full"
              image={data.datoCmsPageTemoignage.imageTMoignage.gatsbyImageData}
              alt={data.datoCmsPageTemoignage.imageTMoignage.alt}
            />
          </figure>
        )}
      </article>
      <article className="m-auto flex flex-col w-10/12 m-auto text-center gap-10">
        <h1 className="text-2xl text-bleu-z font-semibold">
          {/* Validation si titreDeLaPage existe avant de l'afficher */}
          {data.datoCmsPageTemoignage && data.datoCmsPageTemoignage.titreDeLaPage && data.datoCmsPageTemoignage.titreDeLaPage}
        </h1>
        <div
          className="flex flex-col gap-5"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageTemoignage && data.datoCmsPageTemoignage.textePage ? data.datoCmsPageTemoignage.textePage : '',
          }}
        />
        <section className="flex flex-col md:grid grid-cols-3 items-center gap-20">
          {data.allDatoCmsListeTMoignage.edges.map(({ node }) => {
            return (
              <div className="flex flex-col p-5 gap-10" key={node.id}>
                <div className="flex flex-row gap-10 justify-between items-center">
                  {/* Validation si enregistrement.url existe avant d'afficher le lecteur audio */}
                  {node.enregistrement && node.enregistrement.url && (
                    <ReactAudioPlayer src={node.enregistrement.url} controls />
                  )}
                </div>
                <div className="flex gap-5 items-center flex-row">
                  {/* Validation si drapeau existe avant d'afficher l'image */}
                  {node.drapeau && node.drapeau.gatsbyImageData && (
                    <GatsbyImage
                      className=""
                      image={node.drapeau.gatsbyImageData}
                      alt={node.drapeau.alt}
                    />
                  )}
                  <p>{node.description}</p>
                </div>
              </div>
            );
          })}
        </section>
      </article>
    </div>
    <SliderFooter />
  </Layout>
);

export const query = graphql`
  query {
    allDatoCmsListeTMoignage(sort: { id: DESC }) {
      edges {
        node {
          id
          description
          drapeau {
            alt
            gatsbyImageData(width: 50)
          }
          enregistrement {
            url
            alt
          }
        }
      }
    }
    datoCmsPageTemoignage {
      seo {
        description
        title
        image {
          gatsbyImageData(aspectRatio: 3, height: 400)
        }
      }
      imageTMoignage {
        alt
        gatsbyImageData
      }
      textePage
      titreDeLaPage
    }
  }
`;

export default temoignagesPage;
