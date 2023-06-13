import React from 'react';
import { useNavigate } from 'react-router-dom';

function Disbursement() {
  const navigate = useNavigate();
  return (
    <div>
      Hello from disbursement
      <button onClick={() => navigate('/')}>Go HOME</button>
    </div>
  );
}

export default Disbursement;
