import React, { useState } from "react";
import { iContactForm } from "../interfaces/contact_form.interface";
import Styles from "../styles/modules/Contact.module.scss"

const ContactPage = () => {

  const [form, setForm] = useState<iContactForm>({
    name: "",
    email: "",
    issue: "",
    message: "",
    phone: undefined
  });

  const handleInput = (newvalue: string|number, key: keyof iContactForm) => {
    const temp = {...form, [key]: newvalue};
    setForm(temp)
    console.log(form)
  }


  return (
    <div className={Styles.contact}>
      <h1>Solicita gratis tu primera consulta</h1>
      <p>En cualquier tipo de asunto legal, la primera consulta es gratis.</p>
      <form action="" id="form" className={Styles["contact-form"]}>
       <div className={Styles["contact-form-data"]}>
        <div className={Styles["contact-form-data-item"]}>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" placeholder="Ej: Pablo Salas" onChange={event=>handleInput(event.target.value, "name")} pattern="^[A-Za-zÀ-ÿ ,.'-]+$" required/>
          </div>
          <div className={Styles["contact-form-data-item"]}>
            <label htmlFor="correo">Correo electrónico:</label>
            <input type="email" placeholder="Ej: correo@gmail.com" onChange={event=>handleInput(event.target.value, "email")} pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,5}" required />
          </div>
          <div className={Styles["contact-form-data-item"]}>
            <label htmlFor="telefono">Celular:</label>
            <input type="number" placeholder="Ej: 987654321" onChange={event=>handleInput(event.target.value, "phone")} />
          </div>
          <div className={Styles["contact-form-data-item"]}>
            <label htmlFor="asunto">Asunto legal:</label>
            <input type="text" placeholder="Ej: Causas penales" onChange={event=>handleInput(event.target.value, 'issue')} required/>
          </div>
       </div>
        <label htmlFor="mensaje">Mensaje:</label>
        <textarea rows={5} minLength={5} placeholder="Descripción" onChange={event=>handleInput(event.target.value, 'message')} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default ContactPage;