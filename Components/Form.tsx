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
    router.push('/HomePage');
  };

return (
    <div className="flex justify-center items-center h-screen font-sans">
      <div className=" text-gray-800 p-8 rounded-lg">
        <form onSubmit={takeSubmit} className="space-y-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="First Name"
            onChange={takeChange}
            className="px-4 py-2 rounded-md block w-full"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="Last Name"
            onChange={takeChange}
            className="px-4 py-2 rounded-md block w-full"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={takeChange}
            className="px-4 py-2 rounded-md block w-full"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={takeChange}
            className="px-4 py-2 rounded-md block w-full"
          />
          <div className="text-center px-4 py-2 border rounded-md bg-amber-300 ">
            <button type="submit">
             Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;