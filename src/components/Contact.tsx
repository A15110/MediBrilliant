import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { useApi } from '../hooks/useApi';
import { useApiContext } from '../context/ApiContext';
import type { Lead } from '../types/lead';

export default function Contact() {
  const api = useApiContext();
  const [formData, setFormData] = useState<Omit<Lead, 'status'>>({
    full_name: '',
    email: '',
    practice_name: '',
    claims_volume: 'Less than 500',
    message: ''
  });

  const { loading: isSubmitting, execute: submitForm } = useApi(
    api.leads.create,
    {
      successMessage: 'Thank you! We\'ll be in touch soon.',
      errorMessage: 'Failed to submit form. Please try again.',
      onSuccess: () => {
        setFormData({
          full_name: '',
          email: '',
          practice_name: '',
          claims_volume: 'Less than 500',
          message: ''
        });
      }
    }
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Rest of the component remains the same...
}