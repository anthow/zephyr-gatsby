import * as React from "react";
import Layout from "../component/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import ReactAudioPlayer from "react-audio-player";
import Seo from "../component/seo";
import SliderFooter from "../component/slider/slider-footer";

const temoignagesPage = ({ data }) => (
  <Layout>
     <Seo
        title={data.datoCmsPageTemoignage.seo.title}
        description={data.datoCmsPageTemoignage.seo.description}
        image={data.datoCmsPageTemoignage.seo.image.gatsbyImageData}
      />
    
    <div className="flex flex-col gap-10 md:gap-20">
      <article className="w-12/12 ">
        <figure>
          <GatsbyImage
            className=" w-full"
            image={data.datoCmsPageTemoignage.imageTMoignage.gatsbyImageData}
            alt={data.datoCmsPageTemoignage.imageTMoignage.alt}
          />
        </figure>
      </article>
      <article className=" m-auto flex flex-col w-10/12 m-auto text-center  gap-10">
        <h1 className="text-2xl text-bleu-z font-black">
          {data.datoCmsPageTemoignage.titreDeLaPage}
        </h1>
        <div
          className="flex flex-col gap-5"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsPageTemoignage.textePage,
          }}
        />
        <section className="flex flex-col md:grid grid-cols-3 items-center gap-20">
          {data.allDatoCmsListeTMoignage.edges.map(({ node }) => {
            return (
              <div className="flex flex-col p-5 gap-10">
                <div className="flex flex-row gap-10 justify-between items-center">
                
                  <ReactAudioPlayer src={node.enregistrement.url}  controls />
                </div>
                <div className="flex gap-5 items-center flex-row ">
                <GatsbyImage
            className=" "
            image={node.drapeau.gatsbyImageData}
            alt={node.drapeau.gatsbyImageData}
          />
                <p className="">{node.description}</p>
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
          description
          drapeau {
            alt
            gatsbyImageData (width:50)
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
          gatsbyImageData(aspectRatio: 3, height:400)

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

