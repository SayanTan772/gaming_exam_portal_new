
'use client';

import styles from "../../styles/login/section3.module.css";
import { useState, useEffect } from "react";

export default function Section4() {
    const [show, setShow] = useState('none');
    const [error, setError] = useState('');

    const initialFormData = {
      action: 'register',
      id: 0,
      email: '',
      number: '',
      language: 'C',
      password: ''
    }

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
      setFormData((prevData) => ({ ...prevData, [e.target.name]: e.target.value }));
    }

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(formData.email == '' || formData.number == '' || formData.language == '' || formData.password == '') {
        setError('All fields are required!');
        setShow('flex');
        return;
      }
  
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post?action=register&id=0&email=${formData.email}&number=${formData.number}&language=${formData.language}&password=${formData.password}`, {
          method: 'POST',
        });
  
        if (response.ok) {
          console.log('Entry submitted successfully!');
        } else {
          console.error('Failed to submit entry:', response.status, response.statusText);
        }
      } catch (error) {
        console.error('Error submitting entry:', error);
      }
    };

    return (
        <main className={styles.main}>
        <img src="/group.png" alt="404" className={styles.blob} />

        <div className={styles.form_wrapper}>
          <p className={styles.p} style={{ color: '#ffff', fontWeight: '300', letterSpacing: '1px', textAlign: 'right' }}>TO CONTINUE YOU NEED TO <br/> <span className={`${styles.teal} ${styles.bold}`}>Register</span></p>
          <br/><br/>
          <form className={styles.form} method="POST">
            <label className={styles.label}>Programming Language</label><br/>
             <select type="text" className={styles.input} name="language" value={formData.language} onChange={handleChange}>
               <option value="C" className={styles.input} style={{ backgroundColor: '#1b1b1b', paddingRight: '16px' }}>C</option>
               <option value="C++" className={styles.input} style={{ backgroundColor: '#1b1b1b', paddingRight: '16px' }}>C++</option>
               <option value="Java" className={styles.input} style={{ backgroundColor: '#1b1b1b', paddingRight: '16px' }}>Java</option>
               <option value="Python" className={styles.input} style={{ backgroundColor: '#1b1b1b', paddingRight: '16px' }}>Python</option>
               <option value="DSA using C" className={styles.input} style={{ backgroundColor: '#1b1b1b', paddingRight: '16px' }}>DSA using C</option>
               <option value="DSA using C++" className={styles.input} style={{ backgroundColor: '#1b1b1b', paddingRight: '16px' }}>DSA using C++</option>
             </select><br/><br/>
            <input type="email" name="email" className={styles.input} value={formData.email} onChange={(e) => handleChange(e)} placeholder="Enter your Email" /><br/><br/>
            <input type="number" name="number" className={styles.input} value={formData.number} onChange={(e) => handleChange(e)} placeholder="Enter Mobile Number" /><br/><br/>
            <input type="password" name="password" className={styles.input} value={formData.password} onChange={(e) => handleChange(e)} placeholder="Enter Password" /><br/><br/>
            <button className={styles.button} onClick={handleSubmit} >REGISTER</button>
          </form>
        </div>

          <div className={styles.popup} style={{ display: `${show}` }}>
                {/* <img src="/close.png" className={styles.close} onClick={() => setShow('none')} /> */}
                <p className={styles.error_mssg} style={{ color: '#F08080', fontSize: '20px', marginBottom: '16px', fontWeight: '300', letterSpacing: '1px' }}>{ error !== '' ? error : '' }</p>
                <button className={`${styles.btn} ${styles.button} ${styles.popup_btn}`} style={{ backgroundColor: 'teal', fontSize: '14px', padding: '10px 18px' }} onClick={() => setShow('none')}>OKAY</button>
            </div>
        </main>
    );
}