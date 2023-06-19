"use client";
import React, { useState, FormEvent } from "react";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [contact, setContact] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, contact, query);
    setName('');
    setEmail('');
    setContact('');
    setQuery('');
  };
  return (
    <form className={styles.sendQueryForm} onSubmit={handleSubmit}>
      <div className={styles.formGroup}>
        <input
          className={styles["form-input"]}
          placeholder="Name*"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <input
          className={styles["form-input"]}
          placeholder="Email*"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <input
          className={styles["form-input"]}
          placeholder="Contact*"
          type="text"
          id="contact"
          name="contact"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
          required
        />
      </div>
      <div className={styles.formGroup}>
        <input
          className={styles["form-input"]}
          id="query"
          placeholder="Query*"
          name="query"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
      </div>
      <button type="submit" className={styles.sendButton}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
