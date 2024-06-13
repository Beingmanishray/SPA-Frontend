// Button.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Button.scss';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ to, onClick, children }) => {
  if (to) {
    return (
      <Link to={to} className="button">
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
