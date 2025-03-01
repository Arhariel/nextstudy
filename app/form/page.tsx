'use client'
import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ru from '../context/locales/ru.json';
import kz from '../context/locales/kz.json';

const translations = { ru, kz };

export default function FormPage() {
  const { language } = useLanguage();
  const t = translations[language];
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
    phone: '',
    consent: false,
  });
  const [errors, setErrors] = useState<any>({});

  const validate = () => {
    const newErrors: any = {};

    if (!formData.firstName) {
      newErrors.firstName = t.errors.firstName.required;
    } else if (formData.firstName.length < 3) {
      newErrors.firstName = t.errors.firstName.min;
    } else if (!/^[A-Za-zА-Яа-я]+$/.test(formData.firstName)) {
      newErrors.firstName = t.errors.firstName.letters;
    }

    if (!formData.lastName) {
      newErrors.lastName = t.errors.lastName.required;
    } else if (formData.lastName.length < 3) {
      newErrors.lastName = t.errors.lastName.min;
    } else if (!/^[A-Za-zА-Яа-я]+$/.test(formData.lastName)) {
      newErrors.lastName = t.errors.lastName.letters;
    }

    if (!formData.email) {
      newErrors.email = t.errors.email.required;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.errors.email.invalid;
    }

    const age = Number(formData.age);
    if (!formData.age) {
      newErrors.age = t.errors.age.required;
    } else if (isNaN(age) || age < 18 || age > 99) {
      newErrors.age = t.errors.age.invalid;
    }

    if (!formData.password) {
      newErrors.password = t.errors.password.required;
    } else if (
      formData.password.length < 8 ||
      !/[A-Z]/.test(formData.password) ||
      !/[0-9]/.test(formData.password) ||
      !/[!@#$%^&*]/.test(formData.password)
    ) {
      newErrors.password = t.errors.password.invalid;
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = t.errors.confirmPassword.mismatch;
    }

    if (!formData.phone) {
      newErrors.phone = t.errors.phone.required;
    } else if (!/^\+?\d{10,}$/.test(formData.phone)) {
      newErrors.phone = t.errors.phone.invalid;
    }

    if (!formData.consent) {
      newErrors.consent = t.errors.consent.required;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Форма отправлена", formData);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        password: '',
        confirmPassword: '',
        phone: '',
        consent: false,
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow rounded dark:bg-gray-900 dark:text-gray-100">
      <h2 className="text-xl font-bold mb-4">{t.registration}</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label>{t.firstName}</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 w-full dark:text-gray-600"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
        </div>
        <div>
          <label>{t.lastName}</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 w-full dark:text-gray-600"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
        </div>
        <div>
          <label>{t.email}</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full dark:text-gray-600"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label>{t.age}</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className="border p-2 w-full dark:text-gray-600"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        </div>
        <div>
          <label>{t.password}</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border p-2 w-full dark:text-gray-600"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div>
          <label>{t.confirmPassword}</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="border p-2 w-full dark:text-gray-600"
          />
          {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
        </div>
        <div>
          <label>{t.phone}</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="border p-2 w-full dark:text-gray-600"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
          />
          <label>{t.consent}</label>
        </div>
        {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {t.register}
        </button>
      </form>
    </div>
  );
}
