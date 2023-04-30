import React, { useState } from 'react';

const AllMachinesPage = () => {
  const [machines, setMachines] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    machineCode: '',
    traction: '',
    value: '',
    image: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: URL.createObjectURL(imageFile)
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMachine = { ...formData, id: Date.now() };
    setMachines((prevMachines) => [...prevMachines, newMachine]);
    setFormData({
      title: '',
      description: '',
      machineCode: '',
      traction: '',
      value: '',
      image: null
    });
  };

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
              <img src={machine.image} alt="Imagem da Máquina" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMachinesPage;
