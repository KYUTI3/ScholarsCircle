'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const Form: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const takeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const takeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    router.push('/success');
  };

  return (
    <div className="absolute self-center bg-blue-900 text-gray-800">
      <form onSubmit={takeSubmit}>
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="Type your first name here!"
            onChange={takeChange}
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Type your last name here!"
            onChange={takeChange}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Type your email here!"
            onChange={takeChange}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Type your password here!"
            onChange={takeChange}
          />
        </div>
        <div className="bg-amber-300 justify-items-center">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;