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
    router.push('/Home');
  };

  return (
    <div className="flexflex-col items-center justify-center h-screen">
     <div className="self-center bg-blue-900 text-gray-800 p-8 rounded-lg">
      <form onSubmit={takeSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="Type your first name here!"
            onChange={takeChange}
            className="px-4 py-2 rounded-md"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Type your last name here!"
            onChange={takeChange}
            className="px-4 py-2 rounded-md"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Type your email here!"
            onChange={takeChange}
            className="px-4 py-2 rounded-md"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Type your password here!"
            onChange={takeChange}
            className="px-4 py-2 rounded-md"
          />
        </div>
        <div className="justify-items-center px-4 py-2 rounded-md bg-blue-500 text-white">
            <Link href="/">Submit</Link>
        </div>
       </form>
      </div>
    </div>
  );
};

export default Form;