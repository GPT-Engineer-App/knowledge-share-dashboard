import React from 'react';
import { ClerkProvider, SignUp } from '@clerk/clerk-react';

const clerkFrontendApi = 'your-clerk-frontend-api'; // Replace with your Clerk Frontend API

const Register = () => {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <div className="flex items-center justify-center min-h-screen bg-white">
        <div className="p-6 bg-white rounded shadow-md">
          <h2 className="mb-4 text-2xl font-bold text-eco-green">Register</h2>
          <SignUp path="/register" routing="path" />
        </div>
      </div>
    </ClerkProvider>
  );
};

export default Register;