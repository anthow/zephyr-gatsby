import React, { useRef } from 'react'
import Layout from "../component/layout";

const Form = () => { 

  return (<Layout>

    <main className=" w-10/12 m-auto flex  flex-col gap-10 md:gap-20 mb-20">
      <h1 className="text-3xl text-center mt-10 text-bleu-z font-black">
        {" "}
        Formulaire d'inscription
      </h1>
      <article>
        <form name="inscription" method="POST" data-netlify="true">
        <div>
          <section className="flex flex-col gap-5 md:gap-x-40  md:grid grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="Nom" >Nom</label>
              <input className="border"  type="text" />
            </div>
            
          </section>
          </div>
          <input type="hidden" name="inscription" value="inscription"></input>
          <button className="bg-orange-z rounded-xl px-4 mt-10 p-2 text-white" type="submit">Envoyer</button>
        </form>
      </article>
    </main>
  </Layout>
);
}
export default Form;

