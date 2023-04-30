import React, { useState } from 'react';
import TodasAsMaquinas from '../TodasAsMaquinas/index';


const Card = ({ title, description, machineCode, traction, value }) => {
  return (
    <div className="machine-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Código da máquina:</strong> {machineCode}</p>
      <p><strong>Tração:</strong> {traction}</p>
      <p><strong>Valor:</strong> {value}</p>
    </div>
  );
};

export default Card;
