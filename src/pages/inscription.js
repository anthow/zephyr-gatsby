import React, { useRef } from 'react'
import Layout from "../component/layout";
import { useForm } from 'react-hook-form'
import { toPdf } from '@react-pdf/renderer'
import { PDFViewer } from '@react-pdf/renderer'
import html2canvas from 'html2canvas'

const Form = () => { 
  const { register, handleSubmit } = useForm()
  const pdfRef = useRef(null)

  
  const onSubmit = async (data) => {
    // Convertir le formulaire en PDF
    const canvas = await html2canvas(pdfRef.current)
    const dataUrl = canvas.toDataURL('image/jpeg', 1.0)
    const pdf = await toPdf(dataUrl)

    // Envoyer le PDF par e-mail

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'anthonyenglebert@gmail.com',
        pass: 'jesuis6250'
      }
    })

    const mailOptions = {
      from: 'anthonyenglebert@gmail.com',
      to: 'anthonyenglebert@gmail.com',
      subject: 'Formulaire en PDF',
      attachments: [
        {
          filename: 'formulaire.pdf',
          content: pdf
        }
      ]
    }

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
    })
  }
  
  return (<Layout>

    <main className=" w-10/12 m-auto flex  flex-col gap-10 md:gap-20 mb-20">
      <h1 className="text-3xl text-center mt-10 text-bleu-z font-black">
        {" "}
        Formulaire d'inscription
      </h1>
      <article>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div ref={pdfRef}>
          <section className="flex flex-col gap-5 md:gap-x-40  md:grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="Nom" >Nom</label>
              <input className="border" ref={register({ required: true })} type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Prénom">Prénom</label>
              <input className="border" ref={register({ required: true })}  type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Rue">Rue et N°</label>
              <input className="border" ref={register({ required: true })} type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Code postal">Code postal</label>
              <input className="border" ref={register({ required: true })} type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Ville">Ville</label>
              <input className="border" ref={register({ required: true })} type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Téléphone/GSM">Téléphone/GSM</label>
              <input className="border" ref={register({ required: true })} type="text" />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="Mail">Mail</label>
              <input className="border" ref={register({ required: true })} type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Sexe"  class="">Sexe</label>
              <div>
                <span class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="Sexe"
                    value="M"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">M</span>
                </span>
                <span class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="Sexe"
                    value="F"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">F</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Année de naissance">Année de naissance</label>
              <input className="border" type="number" ref={register({ required: true })}/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="type de carte d'identité">type de carte d'identité</label>
              <select name="carte ident" ref={register({ required: true })} id="cardID">
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
              <label htmlFor="Votre carte d'identité expire le">Votre carte d'identité expire le:</label>
              <input className="border" ref={register({ required: true })} type="date" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nationalité">nationalité</label>
              <input className="border" ref={register({ required: true })} type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Pays d'origine">Pays d'origine</label>
              <input className="border" ref={register({ required: true })} type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="statut">statut</label>
              <select name="statut" ref={register({ required: true })} id="statut">
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
              <label htmlFor="Numéro de Forem"> Numéro de Forem :</label>
              <input className="border" type="text" ref={register({ required: true })} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Attestation CPAS:"> Attestation CPAS:</label>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="attestation cpas"
                    value="Oui"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Oui</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="attestation cpas"
                    value="Non"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Non</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Attestation Forem:"> Attestation Forem:</label>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="attestation forem"
                    value="Oui"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Oui</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="attestation forem"
                    value="Non"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Non</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Arrivé en Belgique le:">Arrivé en Belgique le: </label>
              <input className="border" ref={register({ required: true })} type="date" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Raison">Raison</label>
              <select name="raison" id="raison" ref={register({ required: true })}>
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
              <label htmlFor="Mes objectifs">Mes objectifs</label>
              <div className="flex gap-2 flex-wrap">
                <div class="flex items-center">
                  <input
                    id="sortir isolement"
                    type="checkbox"
                    value="sortir isolement"
                    class=""
                    ref={register({ required: true })}
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
                    class=""
                    ref={register({ required: true })}
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
                    class=""
                    ref={register({ required: true })}
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
                    class=""
                    ref={register({ required: true })}
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
                    class=""
                    ref={register({ required: true })}
                  />
                  <label for="sortir isolement" class="ml-2 ">
                    Trouver un emploi
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="je m'inscris au(x):">je m'inscris au(x): </label>
              <div className="flex gap-2 flex-wrap">
                <div class="flex items-center">
                  <input
                    id="Cours de français"
                    type="checkbox"
                    value="Cours de français"
                    class=""
                    ref={register({ required: true })}
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
                    ref={register({ required: true })}
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
                    ref={register({ required: true })}
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
                    ref={register({ required: true })}
                  />
                  <label for="Ateliers socioculturels" class="ml-2 ">
                    Ateliers socioculturels
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Mon niveau de français"> Mon niveau de français:</label>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="niveau de français"
                    value="débutant"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Débutant</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="niveau de français"
                    value="A1"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">A1</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="niveau de français"
                    value="A2"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">A2</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="niveau de français"
                    value="B1"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">B1</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="J'ai une équivalence de diplome:"> J'ai une équivalence de diplome:</label>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="equivalence diplome"
                    value="Oui"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Oui</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="equivalence diplome"
                    value="Non"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Non</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Dans mon pays j’ai travaillé comme :"> Dans mon pays j’ai travaillé comme :</label>
              <input className="border" type="text" ref={register({ required: true })} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Je souhaite trouver un emploi en :"> Je souhaite trouver un emploi en :</label>
              <input className="border" type="text" ref={register({ required: true })} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Langue maternelle"> Langue maternelle</label>
              <input className="border" type="text" ref={register({ required: true })} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Autres langues parlées / écrites :"> Autres langues parlées / écrites :</label>
              <input className="border" type="text" ref={register({ required: true })} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Dernier diplôme *: ">Dernier diplôme *:  </label>
              <select name="Dernier diplome" ref={register({ required: true })} id="dernier diplome">
                <option value="">--Veuillez choisir une option--</option>
                <option value="Sans">Sans</option>
                <option value="CEB" >
                    CEB- 12 ans
                              </option>
                <option value="CESI">CESI - 15 ans</option>
                <option value="CESS">CESS - 18 ans</option>
                <option value="Bac">BAC</option>
                <option value="Master">Master</option>
              </select>{" "}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Diplomé en:">Diplomé en: </label>
              <input className="border" ref={register({ required: true })} type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Je sais lire et écrire dans ma langue :"> Je sais lire et écrire dans ma langue :*</label>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="Je sais lire et écrire dans ma langue :*"
                    value="Oui"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Oui</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="Je sais lire et écrire dans ma langue :*"
                    value="Non"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Non</span>
                </label>
              </div>            </div>
              <div className="flex flex-col gap-2">
              <label htmlFor="Envoyé par">Envoyé par  </label>
              <select name="Envoyé par " ref={register({ required: true })} id="Envoyé par ">
                <option value="">--Veuillez choisir une option--</option>
                <option value="Cripel">Cripel</option>
                <option value="Forem" >
                    Forem
                              </option>
                <option value="CPAS">CPAS</option>
                <option value="Autre">Autre</option>
              </select>{" "}
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Accord à l’A.S.B.L.">Accorde à l’A.S.B.L. Zéphyr à utiliser les photographies et le support audiovisuel fixant mon image et mes propos, dans le cadre de la présentation des activités générales de l’A.S.B.L. Zéphyr.</label>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="Utilisation image"
                    value="Oui"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Oui</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="Utilisation image"
                    value="Non"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Non</span>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Accepte que l’asbl Zéphyr traite mes données"> Accepte que l’asbl Zéphyr traite mes données</label>
              <div>
                <label class="inline-flex items-center">
                  <input
                    type="radio"
                    class="form-radio"
                    name="données"
                    value="Oui"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Oui</span>
                </label>
                <label class="inline-flex items-center ml-6">
                  <input
                    type="radio"
                    class="form-radio"
                    name="données"
                    value="Non"
                    ref={register({ required: true })}
                  />
                  <span class="ml-2">Non</span>
                </label>
              </div>
           <p>  Vos données personnelles sont utilisées en interne pour la bonne organisation de nos activités et à des fins statistiques.
Elles ne seront jamais transmises à d'autres associations ou services.
Elles sont conservées 2 ans après la fin de votre formation.</p> 
            </div>
          </section>
          </div>
          <button className="bg-orange-z rounded-xl px-4 mt-10 p-2 text-white" type="submit">Envoyer</button>
          <PDFViewer style={{ width: '100%', height: 400 }}>
        <Document file={pdf}>
          <Page pageNumber={1} />
        </Document>
      </PDFViewer>
        </form>
      </article>
    </main>
  </Layout>
);
}
export default Form;

