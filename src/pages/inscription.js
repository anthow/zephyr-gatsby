import React, { useRef } from "react";
import Layout from "../component/layout";
import SliderFooter from "../component/slider/slider-footer";

const Form = () => {
  return (
    <Layout>
      <main className=" w-10/12 m-auto flex  flex-col gap-10 md:gap-20 mb-20">
        <h1 className="text-3xl text-center mt-10 text-bleu-z font-black">
          {" "}
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
            <input type="hidden" name="form-name" value="inscription" />{" "}
            <div>
              <section className="flex flex-col gap-5 md:gap-x-40  md:grid grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label name="Nom" htmlFor="Nom">
                    Nom{" "}
                  </label>

                  <input className="border" name="Nom" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="Prénom" htmlFor="Prénom">
                    Prénom
                  </label>
                  <input className="border" name="Prénom" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="Rue et N" htmlFor="Rue">
                    Rue et N°
                  </label>
                  <input className="border" name="Rue et N" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="Code postal" htmlFor="Code postal">
                    Code postal
                  </label>
                  <input className="border" name="Code postal" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="ville" htmlFor="Ville">
                    Ville
                  </label>
                  <input className="border" name="ville" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="telephone" htmlFor="Téléphone/GSM">
                    Téléphone/GSM
                  </label>
                  <input className="border" name="telephone" type="text" />
                </div>

                <div className="flex flex-col gap-2">
                  <label name="mail" htmlFor="Mail">
                    Mail
                  </label>
                  <input className="border" name="mail" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="Sexe" name="sexe" class="">
                    Sexe
                  </label>
                  <div>
                    <span class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        name="Sexe"
                        value="M"
                      />
                      <span class="ml-2">M</span>
                    </span>
                    <span class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="Sexe"
                        value="F"
                      />
                      <span class="ml-2">F</span>
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label name="année de naissance" htmlFor="Année de naissance">
                    Année de naissance
                  </label>
                  <input
                    name="année de naissance"
                    className="border"
                    type="number"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    name="type de carte d'identité"
                    htmlFor="type de carte d'identité"
                  >
                    type de carte d'identité
                  </label>
                  <select name="type de carte d'identité" id="cardID">
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
                  </select>{" "}
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    name="Votre carte d'identité expire le"
                    htmlFor="Votre carte d'identité expire le"
                  >
                    Votre carte d'identité expire le:
                  </label>
                  <input
                    name="Votre carte d'identité expire le"
                    className="border"
                    type="date"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="nationalité" htmlFor="nationalité">nationalité</label>
                  <input className="border" name="nationalité" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="Pays d'origine" htmlFor="Pays d'origine">
                    Pays d'origine
                  </label>
                  <input name="Pays d'origine" className="border" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="satut" htmlFor="statut">
                    statut
                  </label>
                  <select name="statut" id="statut">
                    <option value="">--Veuillez choisir une option--</option>
                    <option value="Sans revenu">Sans revenu</option>
                    <option value="CPAS">CPAS</option>
                    <option value="demandeur emploi">Demandeur d'emploi</option>
                    <option value="travailleur">Travailleur</option>
                    <option value="pensionné">Pensionné</option>
                    <option value="etudiant">Etudiant</option>
                  </select>{" "}
                </div>
                <div className="flex flex-col gap-2">
                  <label name="Numéro de registre national" htmlFor="Numéro de registre national">
                    {" "}
                    Numéro de registre national :
                  </label>
                  <input
                    className="border"
                    name="Numéro de registre national"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="Numéro de Forem" htmlFor="Numéro de Forem">
                    {" "}
                    Numéro de Forem :
                  </label>
                  <input
                    className="border"
                    name="Numéro de Forem"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    name="attestation cpas"
                    CPAS
                    htmlFor="Attestation CPAS"
                  >
                    {" "}
                    Attestation CPAS:
                  </label>
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        name="attestation cpas"
                        value="Oui"
                      />
                      <span class="ml-2">Oui</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="attestation cpas"
                        value="Non"
                      />
                      <span class="ml-2">Non</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label name="attestation forem" htmlFor="Attestation Forem:">
                    {" "}
                    Attestation Forem:
                  </label>
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        name="attestation forem"
                        value="Oui"
                      />
                      <span class="ml-2">Oui</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="attestation forem"
                        value="Non"
                      />
                      <span class="ml-2">Non</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    name="Arrivé en Belgique le"
                    htmlFor="Arrivé en Belgique le:"
                  >
                    Arrivé en Belgique le:{" "}
                  </label>
                  <input
                    name="Arrivé en Belgique le"
                    className="border"
                    type="date"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="raison" htmlFor="raison">
                    Raison
                  </label>
                  <select name="raison" id="raison">
                    <option value="">--Veuillez choisir une option--</option>
                    <option value="mariage">Mariage</option>
                    <option value="regroupement familial">
                      Regroupement familial
                    </option>
                    <option value="refugie">Réfugié</option>
                    <option value="demandeur d'asile">Demandeur d'asile</option>
                    <option value="travail">Travail</option>
                    <option value="etudiant">Etudiant</option>
                    <option value="autre">autre</option>
                  </select>{" "}
                </div>
                <div className="flex flex-col gap-2">
                  <label name="objectifs" htmlFor="Mes objectifs">
                    Mes objectifs
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    <div class="flex items-center">
                      <input
                        id="sortir isolement"
                        type="checkbox"
                        value="sortir isolement"
                        name="objectifs"
                        class=""
                      />
                      <label for="sortir isolement" class="ml-2 ">
                        Sortir de l'isolement
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="Devenir autonome"
                        type="checkbox"
                        value="Devenir autonome"
                        name="objectifs"
                        class=""
                      />
                      <label for="sortir isolement" class="ml-2 ">
                        Devenir autonome
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="Aider les enfants à l’école"
                        type="checkbox"
                        value="Aider les enfants à l’école"
                        name="objectifs"
                        class=""
                      />
                      <label for="sortir isolement" class="ml-2 ">
                        Aider les enfants à l’école
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="Participer à la vie sociale"
                        type="checkbox"
                        value="Participer à la vie sociale"
                        name="objectifs"
                        class=""
                      />
                      <label for="sortir isolement" class="ml-2 ">
                        Participer à la vie sociale
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="Trouver un emploi"
                        type="checkbox"
                        value="Trouver un emploi"
                        name="objectifs"
                        class=""
                      />
                      <label for="sortir isolement" class="ml-2 ">
                        Trouver un emploi
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label name="je m'inscris aux" htmlFor="je m'inscris au(x):">
                    je m'inscris au(x):{" "}
                  </label>
                  <div className="flex gap-2 flex-wrap">
                    <div class="flex items-center">
                      <input
                        id="Cours de français"
                        type="checkbox"
                        value="Cours de français"
                        class=""
                        name="je m'inscris aux"
                      />
                      <label for="Cours de français" class="ml-2 ">
                        Cours de français
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="Table de conversation"
                        type="checkbox"
                        value="Table de conversation"
                        class=""
                        name="je m'inscris"
                      />
                      <label for="Table de conversation" class="ml-2 ">
                        Table de conversation
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="Cours de citoyenneté"
                        type="checkbox"
                        value="Cours de citoyenneté"
                        class=""
                        name="je m'inscris"
                      />
                      <label for="Cours de citoyenneté" class="ml-2 ">
                        Cours de citoyenneté
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input
                        id="Ateliers socioculturels"
                        type="checkbox"
                        value="Ateliers socioculturels"
                        class=""
                        name="je m'inscris"
                      />
                      <label for="Ateliers socioculturels" class="ml-2 ">
                        Ateliers socioculturels
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    name="niveau de français"
                    htmlFor="Mon niveau de français"
                  >
                    {" "}
                    Mon niveau de français:
                  </label>
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        name="niveau de français"
                        value="débutant"
                      />
                      <span class="ml-2">Débutant</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="niveau de français"
                        value="A1"
                      />
                      <span class="ml-2">A1</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="niveau de français"
                        value="A2"
                      />
                      <span class="ml-2">A2</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="niveau de français"
                        value="B1"
                      />
                      <span class="ml-2">B1</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    name="equivalence diplome"
                    htmlFor="J'ai une équivalence de diplome:"
                  >
                    {" "}
                    J'ai une équivalence de diplome:
                  </label>
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        name="equivalence diplome"
                        value="Oui"
                      />
                      <span class="ml-2">Oui</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="equivalence diplome"
                        value="Non"
                      />
                      <span class="ml-2">Non</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    name="Dans mon pays j’ai travaillé comme"
                    htmlFor="Dans mon pays j’ai travaillé comme :"
                  >
                    {" "}
                    Dans mon pays j’ai travaillé comme :
                  </label>
                  <input
                    className="border"
                    name="Dans mon pays j’ai travaillé comme"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    name="Je souhaite trouver un emploi en "
                    htmlFor="Je souhaite trouver un emploi en :"
                  >
                    {" "}
                    Je souhaite trouver un emploi en :
                  </label>
                  <input
                    className="border"
                    type="text"
                    name="Je souhaite trouver un emploi en"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="Langue maternelle" htmlFor="Langue maternelle">
                    {" "}
                    Langue maternelle
                  </label>
                  <input className="border" name="Langue maternelle" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    name="Autres langues"
                    htmlFor="Autres langues parlées / écrites :"
                  >
                    {" "}
                    Autres langues parlées / écrites :
                  </label>
                  <input className="border" name="Autres langues" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label name="Dernier diplome" htmlFor="Dernier diplôme *: ">
                    Dernier diplôme *:{" "}
                  </label>
                  <select name="Dernier diplome" id="dernier diplome">
                    <option value="">--Veuillez choisir une option--</option>
                    <option value="Sans">Sans</option>
                    <option value="CEB">CEB- 12 ans</option>
                    <option value="CESI">CESI - 15 ans</option>
                    <option value="CESS">CESS - 18 ans</option>
                    <option value="Bac">BAC</option>
                    <option value="Master">Master</option>
                  </select>{" "}
                </div>
                <div className="flex flex-col gap-2">
                  <label name="Diplomé en" htmlFor="Diplomé en:">
                    Diplomé en:{" "}
                  </label>
                  <input className="border" name="Diplomé en" type="text" />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    name="Je sais lire et écrire dans ma langue"
                    htmlFor="Je sais lire et écrire dans ma langue :"
                  >
                    {" "}
                    Je sais lire et écrire dans ma langue :*
                  </label>
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        name="Je sais lire et écrire dans ma langue"
                        value="Oui"
                      />
                      <span class="ml-2">Oui</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="Je sais lire et écrire dans ma langue"
                        value="Non"
                      />
                      <span class="ml-2">Non</span>
                    </label>
                  </div>{" "}
                </div>
                <div className="flex flex-col gap-2">
                  <label name="Envoyé par" htmlFor="Envoyé par">
                    Envoyé par{" "}
                  </label>
                  <select name="Envoyé par" id="Envoyé par ">
                    <option value="">--Veuillez choisir une option--</option>
                    <option value="Cripel">Cripel</option>
                    <option value="Forem">Forem</option>
                    <option value="CPAS">CPAS</option>
                    <option value="Autre">Autre</option>
                  </select>{" "}
                </div>
                <div className="flex flex-col gap-2">
                  <label name="Utilisation image" htmlFor="Accord à l’A.S.B.L.">
                    Accorde à l’A.S.B.L. Zéphyr à utiliser les photographies et
                    le support audiovisuel fixant mon image et mes propos, dans
                    le cadre de la présentation des activités générales de
                    l’A.S.B.L. Zéphyr.
                  </label>
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        name="Utilisation image"
                        value="Oui"
                      />
                      <span class="ml-2">Oui</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="Utilisation image"
                        value="Non"
                      />
                      <span class="ml-2">Non</span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    name="traitement données"
                    htmlFor="Accepte que l’asbl Zéphyr traite mes données"
                  >
                    {" "}
                    Accepte que l’asbl Zéphyr traite mes données
                  </label>
                  <div>
                    <label class="inline-flex items-center">
                      <input
                        type="radio"
                        class="form-radio"
                        name="traitement données"
                        value="Oui"
                      />
                      <span class="ml-2">Oui</span>
                    </label>
                    <label class="inline-flex items-center ml-6">
                      <input
                        type="radio"
                        class="form-radio"
                        name="traitement données"
                        value="Non"
                      />
                      <span class="ml-2">Non</span>
                    </label>
                  </div>
                  <p>
                    {" "}
                    Vos données personnelles sont utilisées en interne pour la
                    bonne organisation de nos activités et à des fins
                    statistiques. Elles ne seront jamais transmises à d'autres
                    associations ou services. Elles sont conservées 2 ans après
                    la fin de votre formation.
                  </p>
                </div>
              </section>
            </div>
            <button
              className="bg-orange-z rounded-xl px-4 mt-10 p-2 text-white"
              type="submit"
            >
              Envoyer
            </button>
          </form>
        </article>
        <SliderFooter/>
      </main>
    </Layout>
  );
};
export default Form;
