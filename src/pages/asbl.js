import * as React from "react";
import Layout from "../component/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import Seo from "../component/seo";
import SliderFooter from "../component/slider/slider-footer";

const asblPage = ({ data }) => {
  return (
    <Layout>
        <Seo
          title={data.datoCmsPageAsbl.seo.title}
          description={data.datoCmsPageAsbl.seo.description}
        />
      <main className="flex flex-col gap-20 mb-20">
        <article className="w-12/12 h-1/2">
          <figure>
            <GatsbyImage
              className=" m-auto max-w-full"
              image={data.datoCmsPageAsbl.immageAsbl.gatsbyImageData}
              alt={data.datoCmsPageAsbl.immageAsbl.alt}
            />
          </figure>
        </article>
        <article className="m-auto w-10/12 flex flex-col gap-10">
          <h1 className="text-3xl text-bleu-z font-semibold">
            {data.datoCmsPageAsbl.titreIntroduction}
          </h1>

          <div
            className="flex flex-col gap-5"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPageAsbl.texteIntroduction,
            }}
          />
        </article>
        <article className="flex flex-col gap-10 w-10/12 m-auto">
          <h2 className="text-2xl text-bleu-z text-center font-semibold">
            Notre Équipe
          </h2>
          <section className="flex flex-col md:grid grid-cols-3 m-auto gap-y-10">
            {data.allDatoCmsListeEquipe.edges.map(({ node }) => {
              return (
                <div className="flex flex-col gap-5 text-center place-self-strech" key={node.id}>
                  <figure>
                    <GatsbyImage
                      className="rounded-full"
                      image={node.imageDeLaPersonne.gatsbyImageData}
                      alt={node.imageDeLaPersonne.alt}
                    />
                  </figure>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg text-orange-z ">
                      {node.nomEtPrenomDeLaPersonne}
                    </h3>
                    <p className="text-m font-semibold">{node.fonction}</p>
                    <p className="underline">{node.adresseMail}</p>
                    <p>{node.numeroDeTelephone}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </article>
        <article className="m-auto w-10/12 flex flex-col md:grid grid-cols-2 gap-10 md:gap-20">
          <figure>
            <GatsbyImage
              className=" m-auto max-w-full"
              image={data.datoCmsPageAsbl.photoConseil.gatsbyImageData}
              alt={data.datoCmsPageAsbl.photoConseil.alt}
            />
          </figure>
          <section className="flex flex-col gap-5 gap-10">
            <h2 className="text-2xl text-bleu-z font-semibold ">
              {data.datoCmsPageAsbl.titreConseil}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageAsbl.texteConseil,
              }}
            />
          </section>
        </article>
        <SliderFooter />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    datoCmsPageAsbl {
      seo {
        description
        title
        image {
          gatsbyImageData
        }
      }
      immageAsbl {
        alt
        gatsbyImageData(height: 400, width: 1600)
      }
      texteConseil
      texteIntroduction
      titreConseil
      titreIntroduction
      photoConseil {
        alt
        gatsbyImageData
      }
    }
    allDatoCmsListeEquipe(sort: { ordre: ASC }) {
      edges {
        node {
          id
          adresseMail
          fonction
          imageDeLaPersonne {
            alt
            gatsbyImageData(width: 200, height: 200)
          }
          nomEtPrenomDeLaPersonne
          numeroDeTelephone
        }
      }
    }
  }
`;

export default asblPage;
