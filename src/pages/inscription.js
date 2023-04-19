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
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

      </article>
    </main>
  </Layout>
);
}
export default Form;

