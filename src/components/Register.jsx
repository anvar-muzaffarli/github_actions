import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

import './Register.css';
import { Link } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  ad: Yup.string().required('Ad hissəsi boş buraxılmamalıdır'),
  soyad: Yup.string().required('Soyad hissəsi boş buraxılmamalıdır'),
  email: Yup.string().email('Elektron poçtu düzgün daxil edin').required('Email hissəsi boş buraxılmamalıdır'),
  cepTelefonu: Yup.string().required('Mobil telefon hissəsi boş buraxılmamalıdır'),
  kabulEdildi: Yup.boolean().oneOf([true], 'Qəbul etməlisiniz'), // checkbox'un değeri true olmalı


});

const Register = () => {

    const [register, setRegister] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    emailjs
      .send('service_61105bk', 'template_mxs9vce', {
        ad: values.ad,
        soyad: values.soyad,
        email: values.email,
        cepTelefonu:values.cepTelefonu,
        kabulEdildi:values.kabulEdildi

      }, 'user_XSVgRv73Ciboc6WRBgZW2')
      .then((response) => {
        console.log('E-posta gönderildi!', response.status, response.text);
        resetForm();
        setRegister(true)
      })
      .catch((error) => {
        console.error('E-posta gönderilirken bir hata oluştu:', error);
        setRegister(false)
      });
  };

  return (

    <>

    {register ? (
        <div className="mesaj">Qeydiyyat uğurla icra edildi. Sizinlə 1 həftə ərzində əlaqə yaradılacaq</div>
    ) : (
        <Formik
        initialValues={{ ad: '', soyad: '', email: '', cepTelefonu:'', kabulEdildi: false }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >

{({ values, isValid,  touched, errors  }) => (
        <Form className="form-container mt-5">
          <div className="form-group">
            <label htmlFor="ad">Ad:</label>
            <Field type="text" id="ad" name="ad" className={`form-control ${touched.ad && errors.ad ? 'is-invalid' : isValid ? '' : ''}`} />
            <ErrorMessage name="ad" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="soyad">Soyad:</label>
            <Field type="text" id="soyad" name="soyad" className={`form-control ${touched.soyad && errors.soyad ? 'is-invalid' : isValid ? '' : ''}`} />
            <ErrorMessage name="soyad" component="div" className="error" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" className={`form-control ${touched.email && errors.email ? 'is-invalid' : isValid ? '' : ''}`}  />
            <ErrorMessage name="email" component="div" className="error" />
          </div>

          <div className='form-group'>
            <label htmlFor="cepTelefonu">Əlaqə nömrəsi:</label>
            <Field 
             className={`form-control ${touched.cepTelefonu && errors.cepTelefonu ? 'is-invalid' : isValid ? '' : ''}`}
             render={({ field }) => (
                <input
                  {...field}
                  type="tel"
                  placeholder="994-50-7928518"
                  className={`form-control ${
                    values.cepTelefonu && !/^\d{3}-\d{2}-\d{7}$/.test(values.cepTelefonu)
                      ? 'is-invalid'
                      : ''
                  }`}
                />
              
              )}
            id="cepTelefonu" name="cepTelefonu" />
            <ErrorMessage name="mobile" component="div" className="hata-mesaji" />
          </div>
  
          <div className="form-group agreement">
             <Link to="/agreement">
                <label htmlFor="">Müqavilə şərtləri ilə razıyam</label>
              </Link>
              <Field
                type="checkbox"
                id="kabulEdildi"
                name="kabulEdildi"
                className="form-check-input"
              />
          </div>
          <button type="submit" className='btn btn-primary' disabled={!isValid || !values.kabulEdildi}>Qeydiyyatdan keç</button>
        </Form>

)}
      </Formik>
    )}

</>
 
  );
};

export default Register;
