import * as React from "react";
import Layout from "../component/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Seo from "../component/seo"


const ContactPage = ({ data }) => (
  <Layout>
      <Seo title={data.datoCmsPageContact.seo.title } description={data.datoCmsPageContact.seo.description} image={data.datoCmsPageContact.seo.image.gatsbyImageData} />
    <main className=" w-10/12 m-auto flex flex-col gap-10 md:gap-20 mb-20">
      <h1 className="text-3xl text-center text-bleu-z mt-10 font-black"> Contact </h1>
      <article className="flex flex-col gap-10 md:grid grid-cols-2">
        <section>
        <GatsbyImage image={data.datoCmsPageContact.imageFormulaireDeContact.gatsbyImageData} alt={data.datoCmsPageContact.imageFormulaireDeContact.alt} />

        </section>
        <section>
            <form className="flex flex-col gap-2">
                <label>Votre nom</label>
                <input type="text" className="border-2 border-bleu-z" />
                <label>Votre prénom</label>
                <input type="text" className="border-2 border-bleu-z" />
                <label>Votre adresse mail</label>
                <input type="email" className="border-2 border-bleu-z" />
                <label>Votre message</label>
                <textarea className="border-2 border-bleu-z"/>
                <input type="submit" className="bg-orange-z p-2 rounded-xl text-white font-black rounded w-max mt-5" value="Envoyer"/>
            </form>
        </section>
        <section>
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageContact.ouvertureDesBureaux }}/> 
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageContact.adresse }}/> 


        </section>
        <section>
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageContact.prendreRendezVous }}/> 

        </section>
      </article>
      <article className="flex flex-col gap-10">
        <section>
            <a href={data.datoCmsPageContact.urlGoogleMap} target="_blank"  rel="noopener">
            <GatsbyImage image={data.datoCmsPageContact.imageGoogleMap.gatsbyImageData} alt={data.datoCmsPageContact.imageGoogleMap.alt} />

            </a>
        </section>
        <section className="flex flex-col gap-5">
        <div dangerouslySetInnerHTML={{ __html: data.datoCmsPageContact.texteZoneBleue }}/> 
            <GatsbyImage image={data.datoCmsPageContact.imageZoneBleue.gatsbyImageData} alt={data.datoCmsPageContact.imageZoneBleue.alt} />

        </section>
</article>
    </main>
  </Layout>
);

export const query = graphql`
  query {
    datoCmsPageContact {
      seo {
        description
        title
        image {
          gatsbyImageData
        }
      }
      adresse
      imageFormulaireDeContact {
        alt
        gatsbyImageData
      }
      ouvertureDesBureaux
      prendreRendezVous
      imageGoogleMap {
        alt
        gatsbyImageData
      }
      imageZoneBleue {
        alt
        gatsbyImageData
      }
      urlGoogleMap
      texteZoneBleue
    }
  }
`

export default ContactPage;

