import React, { useState } from 'react';
import machineImage from '../../../assets/maquinatestes.jpeg';

const AllMachinesPage = () => {
  const [machines, setMachines] = useState([
    {
      id: 1,
      title: 'Máquina 1',
      description: 'Esta é a descrição da Máquina 1',
      machineCode: 'ABC123',
      traction: 'Tração A',
      value: 'R$ 100.00',
      image: machineImage
    }
  ]);

  return (
    <div>
      <h1>Todas as Máquinas</h1>
      <div>
        {machines.map((machine) => (
          <div key={machine.id}>
            <h3>{machine.title}</h3>
            <p>{machine.description}</p>
            <p>Código da Máquina: {machine.machineCode}</p>
            <p>Tração: {machine.traction}</p>
            <p>Valor: {machine.value}</p>
            {machine.image && (
              <img
                src={machine.image}
                alt="Imagem da Máquina"
                style={{ width: '300px', height: 'auto' }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMachinesPage;
