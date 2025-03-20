import React, { useRef } from "react";
import Layout from "../component/layout";
import SliderFooter from "../component/slider/slider-footer";
import Seo from "../component/seo"; // Assurez-vous que ce composant existe dans votre projet.

const Form = ({ data }) => {
  return (
    <Layout>
      {data.datoCmsPageFormulaire && data.datoCmsPageFormulaire.seo && (
        <Seo
          title={data.datoCmsPageFormulaire.seo.title}
          description={data.datoCmsPageFormulaire.seo.description}
        />
      )}

      <main className="w-10/12 m-auto flex flex-col gap-10 md:gap-20 mb-20">
        <h1 className="text-3xl text-center mt-10 text-bleu-z font-semibold">
          Formulaire d'inscription
        </h1>
        <article>
          <form
            name="inscription"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="validation-inscription"
          >
            <input type="hidden" name="form-name" value="inscription" />
            <div>
              <section className="flex flex-col gap-5 md:gap-x-40 md:grid grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Nom">
                    Nom
                  </label>
                  <input className="border border-bleu-z" name="Nom" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Prénom">
                    Prénom
                  </label>
                  <input className="border border-bleu-z" name="Prénom" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Rue">
                    Rue et N°
                  </label>
                  <input className="border border-bleu-z" name="Rue et N" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Code postal">
                    Code postal
                  </label>
                  <input className="border border-bleu-z" name="Code postal" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Ville">
                    Ville
                  </label>
                  <input className="border border-bleu-z" name="ville" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Téléphone/GSM">
                    Téléphone/GSM
                  </label>
                  <input className="border border-bleu-z" name="telephone" type="text" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Mail">
                    Mail
                  </label>
                  <input className="border border-bleu-z" name="mail" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Sexe">
                    Sexe
                  </label>
                  <div>
                    <span className="inline-flex items-center">
                      <input type="radio" className="form-radio" name="Sexe" value="M" />
                      <span className="ml-2">M</span>
                    </span>
                    <span className="inline-flex items-center ml-6">
                      <input type="radio" className="form-radio" name="Sexe" value="F" />
                      <span className="ml-2">F</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Année de naissance">
                    Année de naissance
                  </label>
                  <input name="année de naissance" className="border border-bleu-z" type="number" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-normal text-lg" htmlFor="type de carte d'identité">
                    Type de carte d'identité
                  </label>
                  <select className="bg-white border p-1 border-bleu-z" name="type de carte d'identité">
                    <option value="">--Veuillez choisir une option--</option>
                    <option value="CI Belge">CI Belge</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                    <option value="E">E</option>
                    <option value="E+">E+</option>
                    <option value="F">F</option>
                    <option value="F+">F+</option>
                    <option value="autre">autre</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg" htmlFor="Votre carte d'identité expire le">
                    Votre carte d'identité expire le:
                  </label>
                  <input name="Votre carte d'identité expire le" className="border border-bleu-z" type="date" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Numéro de registre national">
                    Numéro de registre national :
                  </label>
                  <input className="border border-bleu-z" name="Numéro de registre national" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="nationalité">
                    Nationalité
                  </label>
                  <input className="border border-bleu-z" name="nationalité" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Pays d'origine">
                    Pays d'origine
                  </label>
                  <input name="Pays d'origine" className="border border-bleu-z" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="statut">
                    Statut
                  </label>
                  <select className="bg-white border p-1 border-bleu-z" name="statut" id="statut">
                    <option value="">--Veuillez choisir une option--</option>
                    <option value="Sans revenu">Sans revenu</option>
                    <option value="CPAS">CPAS</option>
                    <option value="demandeur emploi">Demandeur d'emploi</option>
                    <option value="travailleur">Travailleur</option>
                    <option value="pensionné">Pensionné</option>
                    <option value="etudiant">Etudiant</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Numéro de Forem">
                    Numéro de Forem :
                  </label>
                  <input className="border border-bleu-z" name="Numéro de Forem" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Attestation CPAS">
                    Attestation CPAS:
                  </label>
                  <div>
                    <label className="text-lg font-normal inline-flex mr-2 items-center">
                      <input type="radio" className="form-radio" name="attestation cpas" value="Oui" />
                      <span className="ml-2">Oui</span>
                    </label>
                    <label className="text-lg font-normal inline-flex items-center ml-6">
                      <input type="radio" className="form-radio" name="attestation cpas" value="Non" />
                      <span className="ml-2">Non</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Attestation Forem">
                    Attestation Forem:
                  </label>
                  <div>
                    <label className="text-lg font-normal inline-flex items-center">
                      <input type="radio" className="form-radio" name="attestation forem" value="Oui" />
                      <span className="ml-2">Oui</span>
                    </label>
                    <label className="text-lg font-normal inline-flex items-center ml-6">
                      <input type="radio" className="form-radio" name="attestation forem" value="Non" />
                      <span className="ml-2">Non</span>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Arrivé en Belgique le">
                    Arrivé en Belgique le:
                  </label>
                  <input name="Arrivé en Belgique le" className="border border-bleu-z" type="date" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="raison">
                    Raison
                  </label>
                  <select className="bg-white border p-1 border-bleu-z" name="raison" id="raison">
                    <option value="">--Veuillez choisir une option--</option>
                    <option value="mariage">Mariage</option>
                    <option value="regroupement familial">Regroupement familial</option>
                    <option value="refugie">Réfugié</option>
                    <option value="demandeur d'asile">Demandeur d'asile</option>
                    <option value="travail">Travail</option>
                    <option value="etudiant">Etudiant</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="objectifs">
                    Mes objectifs
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {/* Checkboxes for objectives */}
                    {/* Similar structure for checkboxes */}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="je m'inscris au(x)">
                    Je m'inscris au(x):
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    {/* Checkboxes for courses */}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="niveau de français">
                    Mon niveau de français:
                  </label>
                  <div>
                    {/* Radio buttons for French level */}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="equivalence diplome">
                    J'ai une équivalence de diplôme:
                  </label>
                  <div>
                    {/* Radio buttons for diploma equivalency */}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Dans mon pays j’ai travaillé comme">
                    Dans mon pays j’ai travaillé comme:
                  </label>
                  <input className="border border-bleu-z" name="Dans mon pays j’ai travaillé comme" type="text" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Je souhaite trouver un emploi en">
                    Je souhaite trouver un emploi en:
                  </label>
                  <input className="border border-bleu-z" name="Je souhaite trouver un emploi en" type="text" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Langue maternelle">
                    Langue maternelle
                  </label>
                  <input className="border border-bleu-z" name="Langue maternelle" type="text" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Autres langues parlées / écrites">
                    Autres langues parlées / écrites:
                  </label>
                  <input className="border border-bleu-z" name="Autres langues" type="text" />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Dernier diplôme">
                    Dernier diplôme:
                  </label>
                  <select className="bg-white border p-1 border-bleu-z" name="Dernier diplome" id="dernier diplome">
                    <option value="">--Veuillez choisir une option--</option>
                    <option value="Sans">Sans</option>
                    <option value="CEB">CEB- 12 ans</option>
                    <option value="CESI">CESI - 15 ans</option>
                    <option value="CESS">CESS - 18 ans</option>
                    <option value="Bac">BAC</option>
                    <option value="Master">Master</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-lg font-normal" htmlFor="Diplomé en">
                    Diplomé en:
                  </label>
                  <input className="border border-bleu-z" name="Diplomé en" type="text" />
                </div>
              </section>
            </div>
            <button
              className="bg-orange-z font-medium text-white text-lg rounded-full py-1 px-4 hover:opacity-80"
              type="submit"
            >
              Envoyer
            </button>
          </form>
        </article>
        <SliderFooter />
      </main>
    </Layout>
  );
};

export default Form;
