// pages/login-controlled.js
import React from 'react';
import Layout from '../components/Layout';
import LoginFormControlled from '../components/LoginFormControlled';

const LoginControlledPage = () => {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Controlled Login Page</h1>
        <LoginFormControlled />
      </div>
    </Layout>
  );
};

export default LoginControlledPage;
