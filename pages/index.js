import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Radio } from "@mantine/core";
import { useState } from "react";

export default function Home() {
  const [checked, setChecked] = useState(false);
  const {
    handleSubmit,
    handleChange,
    values,
    touched,
    errors,
    handleBlur,
    resetForm,
  } = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      price: "",
      email: "",
      phone: "",
      comment: "",
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .trim()
        .required("Fornavn feltet må fylles ut")
        .min(2, "Må være mer enn 2 bokstaver")
        .max(20, "Må være mindre enn 20 bokstaver"),

      lastname: Yup.string()
        .trim()
        .required("Etternavn feltet må fylles ut")
        .min(2, "Må være mer enn 3 bokstaver")
        .max(20, "Må være mindre enn 20 bokstaver"),

      price: Yup.string().trim().required("Pris feltet må fylles ut"),

      email: Yup.string()
        .email("Må være en gyldig e-post")
        .required("E-post feltet må fylles ut"),

      phone: Yup.string()
        .trim()
        .required("Mobil feltet må fylles ut")
        .min(8, "Må være mer enn 7 siffer")
        .max(8, "Må være midre enn 9 siffer"),

      comment: Yup.string().trim(),
    }),
    onSubmit: () => {
      resetForm();
      alert("Takk for gaven");
    },
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Kodeintervju</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="description"
          content="This is a test site for a codeing interview at the blindforbundet organization"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.main_info}>
          <h1>Gi en gave</h1>
          <p>
            Å miste synet er en livskrise der det meste må læres på nytt. En
            gave fra deg gjør oss i stand til å hjelpe et menneske til å ta det
            første skrittet tilbake til hverdagen etter et synstap. Blir du
            fastgiver er du med på hele reisen.
          </p>

          {/* <Image
            src={
              "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            }
            alt='Bilde av en dame med mynter og en lapp i hånden som sier "Make a change"'
            height={400}
            width={400}
            layout="fixed"
          /> */}
        </div>
        <div className={styles.main_form}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.form_control}>
              <label htmlFor="name" className={styles.form_label}>
                Fornavn
              </label>
              <input
                type="text"
                name="firstname"
                placeholder="Ahmed"
                value={values.firstname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.firstname && errors.firstname ? (
                <div className={styles.text_danger}>{errors.firstname}</div>
              ) : null}
            </div>

            <div className={styles.form_control}>
              <label htmlFor="lastname" className={styles.form_label}>
                Etternavn
              </label>
              <input
                type="text"
                name="lastname"
                placeholder="Jibril"
                value={values.lastname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.lastname && errors.lastname ? (
                <div className={styles.text_danger}>{errors.lastname}</div>
              ) : null}
            </div>

            <div className={styles.form_control}>
              <label htmlFor="pris" className={styles.form_label}>
                Pris
              </label>
              <input
                type="number"
                name="price"
                placeholder="100kr"
                value={values.price}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.price && errors.price ? (
                <div className={styles.text_danger}>{errors.price}</div>
              ) : null}
            </div>

            <Radio.Group label="Betalingstype" spacing="sm" color="red">
              <Radio value="Vipps" label="Vipps" />
              <Radio value="Kort" label="Kort" />
            </Radio.Group>

            <div className={styles.form_control}>
              <label htmlFor="email" className={styles.form_label}>
                E-post
              </label>
              <input
                type="email"
                name="email"
                placeholder="testing@hotmail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.email && errors.email ? (
                <div className={styles.text_danger}>{errors.email}</div>
              ) : null}
            </div>

            <div className={styles.form_control}>
              <label htmlFor="phone" className={styles.form_label}>
                Mobil
              </label>
              <input
                type="number"
                name="phone"
                placeholder="123 45 678"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {touched.phone && errors.phone ? (
                <div className={styles.text_danger}>{errors.phone}</div>
              ) : null}
            </div>

            <div className={styles.form_control_checkbox}>
              <label htmlFor="tax" className={styles.form_label}>
                Jeg ønsker skattefradrag
              </label>
              <input
                type="checkbox"
                name="tax"
                checked={checked}
                onClick={() => {
                  setChecked(!checked);
                }}
                className={styles.form_input_checkbox}
              />
            </div>

            <div className={checked ? styles.form_control : styles.hide}>
              <label htmlFor="date_of_birth" className={styles.form_label}>
                Fødselsdato
              </label>
              <input type="date" name="date_of_birth" />
            </div>

            <div className={styles.form_control}>
              <label htmlFor="about" className={styles.form_label}>
                Kommentar
              </label>
              <textarea
                type="text"
                name="comment"
                placeholder="Lyst til å fortelle oss noe?"
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                className={styles.form_input_comment}
              />
              {touched.comment && errors.comment ? (
                <div className={styles.text_danger}>{errors.comment}</div>
              ) : null}
            </div>
            <div className={styles.form_actions}>
              <button
                type="reset"
                onClick={resetForm}
                className={styles.form_button_reset}
              >
                Nullstill
              </button>
              <button type="submit" className={styles.form_button_submit}>
                Doner
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
