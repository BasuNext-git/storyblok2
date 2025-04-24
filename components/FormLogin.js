// if you're on Next.js 13/14 with app directory

import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

export default function FormLogin({ blok }) {
  const router = useRouter();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Replace this with your real login API
      const res = await fetch('/api/fake-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      console.log(data);
      //const data = await res.json(); // THIS is what will throw if res is not JSON

      if (!res.ok) throw new Error(data.message || 'Login failed');

      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify(data));

      // Redirect if needed
      if (blok.redirectUrl) router.push(blok.redirectUrl);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>{blok.title}</h2>

      {blok.fields?.map((field, i) => (
        <div key={i} className="form-field">
          <label>{field.label}</label>
          <input
            type={field.type}
            name={field.name}
            required={field.required}
            onChange={handleChange}
          />
        </div>
      ))}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">{blok.submitLabel || 'Login'}</button>
    </form>
  );
}
