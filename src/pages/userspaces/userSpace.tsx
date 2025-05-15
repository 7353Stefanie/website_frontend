
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function UserSpace() {
  const location = useLocation();
  const username = location.state?.username;

  return (
    <div>
      <h1>Willkommen, {username || 'Unbekannter Benutzer'}!</h1>
    </div>
  );
}