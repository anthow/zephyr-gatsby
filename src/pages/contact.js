import * as React from "react";
import Layout from "../component/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import Seo from "../component/seo";
import SliderFooter from "../component/slider/slider-footer";

const ContactPage = ({ data }) => (
  <Layout>
    {data.datoCmsPageContact.seo && (
      <Seo
        title={data.datoCmsPageContact.seo.title}
        description={data.datoCmsPageContact.seo.description}
      />
    )}
    <main className="w-10/12 m-auto flex flex-col gap-10 md:gap-20 mb-20">
      <h1 className="text-3xl text-center text-bleu-z mt-10 font-semibold">
        {" "}
        Contact{" "}
      </h1>
      <article className="flex flex-col md:gap-20 gap-10 md:grid grid-cols-2">
        <section>
          <GatsbyImage
            image={data.datoCmsPageContact.imageFormulaireDeContact.gatsbyImageData}
            alt={data.datoCmsPageContact.imageFormulaireDeContact.alt}
          />
        </section>
        <section>
          <form
            className="flex flex-col gap-2"
            name="formulaire de contact"
            method="POST"
            action="https://formspree.io/f/xrgvrzwp"
          >
            <label>Votre nom</label>
            <input
              type="text"
              name="Nom"
              required
              className="border-2 border-bleu-z"
            />
            <label>Votre prénom</label>
            <input
              type="text"
              name="Prénom"
              required
              className="border-2 border-bleu-z"
            />
            <label>Votre adresse mail</label>
            <input
              type="email"
              name="mail"
              required
              className="border-2 border-bleu-z"
            />
            <label
              id="contact-form-message-label"
              for="contact-form-message"
              class="form-label"
            >
              Message
            </label>

            <textarea
              name="message"
              id="contact-form-message"
              aria-labelledby="contact-form-message-label"
              className="border-2 w-full border-bleu-z "
              required
            ></textarea>
            <button
              className="bg-orange-z font-medium w-max text-white text-lg rounded-full py-1 px-4 hover:opacity-80"
              value="Envoyer"
            >
              Envoyer
            </button>
          </form>
        </section>
        <section>
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPageContact.ouvertureDesBureaux,
            }}
          />
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPageContact.adresse,
            }}
          />
        </section>
        <section>
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPageContact.prendreRendezVous,
            }}
          />
        </section>
      </article>
      <article className="flex flex-col gap-10">
        <section>
          <a
            href={data.datoCmsPageContact.urlGoogleMap}
            target="_blank"
            rel="noopener"
          >
            <GatsbyImage
              image={data.datoCmsPageContact.imageGoogleMap.gatsbyImageData}
              alt={data.datoCmsPageContact.imageGoogleMap.alt}
            />
          </a>
        </section>
        <section className="flex flex-col gap-5">
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPageContact.texteZoneBleue,
            }}
          />
          <GatsbyImage
            image={data.datoCmsPageContact.imageZoneBleue.gatsbyImageData}
            alt={data.datoCmsPageContact.imageZoneBleue.alt}
          />
        </section>
      </article>
      <SliderFooter />
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
`;

export default ContactPage;
