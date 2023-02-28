import React from 'react';
import { useNavigate } from 'react-router-dom';

const permission = false;

const AdminPage = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!permission) {
      navigate('/login');
    }
  });

  if (permission) {
    return <h3>Panel admina - witaj szefie</h3>;
  }
};

export default AdminPage;
