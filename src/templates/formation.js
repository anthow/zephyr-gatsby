import * as React from "react";
import Layout from "../component/layout";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Seo from "../component/seo";

const formation = ({ data }) => {
  return (
    <Layout>
       <Seo
        title={data.datoCmsListesFormation.seo.title}
        description={data.datoCmsListesFormation.seo.description}
        image={data.datoCmsListesFormation.seo.image.gatsbyImageData}
      />
      <main className="flex flex-col gap-20 mb-20">
        <GatsbyImage
          className=" m-auto max-w-full"
          image={data.datoCmsListesFormation.imageFormation.gatsbyImageData}
          alt={data.datoCmsListesFormation.imageFormation.alt}
        />
        <article className="flex flex-col gap-20 w-10/12 m-auto">
          <section className="flex m-auto md:w-6/12 m-auto flex-row items-center gap-10">
            <h1 className="text-center text-orange-z text-3xl font-black">
              {data.datoCmsListesFormation.nomDeLaFormation}
            </h1>
            <a href="https://tally.so/r/3XLykV" target="_blank">
              <button className="bg-bleu-z p-2 rounded-xl text-white font-black">
                S'inscrire
              </button>
            </a>
          </section>
          <section className="flex flex-col gap-10 md:grid grid-cols-2 md:gap-20">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z font-black">
                {data.datoCmsListesFormation.titreUn}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsListesFormation.publicCible,
                }}
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z font-black">
                {data.datoCmsListesFormation.titreDeux}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsListesFormation.conditionDacces,
                }}
              />
            </div>
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl text-bleu-z font-black">
              {data.datoCmsListesFormation.titreTrois}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  data.datoCmsListesFormation.objectifCommunTousLesCoursDeFle,
              }}
            />
          </section>
          <section className="flex flex-col gap-5">
            <h2 className="text-2xl text-bleu-z  font-black">
              {data.datoCmsListesFormation.titreQuatre}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsListesFormation.organisation,
              }}
            />
            <h3 className="text-xl text-bleu-z font-black">
              {data.datoCmsListesFormation.titreCinq}
            </h3>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsListesFormation.niveaux,
              }}
            />
          </section>

            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z  font-black">{data.datoCmsListesFormation.titreSix}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsListesFormation.quelEstMonNiveau,
                }}
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z  font-black">
                {data.datoCmsListesFormation.titreSept}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsListesFormation.fraisDInscription,
                }}
              />
              </div>
             
         
          </section>
          <section className="flex gap-5 flex-col items-center w-10/12 m-auto">

<h2 className="text-2xl text-bleu-z  font-black">
  {data.datoCmsListesFormation.titreHuit}
</h2>
<div
  dangerouslySetInnerHTML={{
    __html: data.datoCmsListesFormation.conclusion,
  }} className="text-center"
/>
      <a href="https://tally.so/r/3XLykV" target="_blank">
<button className="bg-bleu-z p-2 rounded-xl text-white font-black">
  S'inscrire
</button>
</a>
</section>
        </article>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query formationQuery($slug: String) {
    datoCmsListesFormation(slug: { eq: $slug }) {
      seo {
        description
        title
        image {
          gatsbyImageData
        }
      }
      conclusion
      conditionDacces
      fraisDInscription
      imageFormation {
        gatsbyImageData(height: 400, width: 1400)
        alt
      }
      niveaux
      nomDeLaFormation
      objectifCommunTousLesCoursDeFle
      organisation
      publicCible
      quelEstMonNiveau
      slug
      titreUn
      titreDeux
      titreTrois
      titreQuatre
      titreCinq
      titreSix
      titreSept
      titreHuit
    }
  }
`;

export default formation;

export const Head = () => <title>ASBL</title>;
