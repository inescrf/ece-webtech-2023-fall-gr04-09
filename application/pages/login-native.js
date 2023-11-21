// pages/login-native.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (formData) => {
    setSubmittedData(formData);
  };

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Login Page</h1>
        <LoginForm onSubmit={handleFormSubmit} />
        {submittedData && (
          <div className="mt-4">
            <h2 className="text-2xl font-bold mb-2">Submitted Data:</h2>
            <pre>{JSON.stringify(submittedData, null, 2)}</pre>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default LoginPage;
