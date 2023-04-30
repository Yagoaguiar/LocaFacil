import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdicionarMaquina = () => {
  const navigate = useNavigate();
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

  const handleClick = () => {
    navigate('/todas-as-maquinas');
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
      <h1>Adicionar Máquina</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Descrição:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Código da Máquina:
          <input
            type="text"
            name="machineCode"
            value={formData.machineCode}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Tração:
          <input
            type="text"
            name="traction"
            value={formData.traction}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Valor:
          <input
            type="text"
            name="value"
            value={formData.value}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Imagem:
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        <br />
        <button type="submit">Adicionar Máquina</button>
      </form>
      <div>
        {machines.map(machine => (
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
      <button onClick={handleClick}>Ir para Todas as Máquinas</button>
    </div>
  );
};

export default AdicionarMaquina;
