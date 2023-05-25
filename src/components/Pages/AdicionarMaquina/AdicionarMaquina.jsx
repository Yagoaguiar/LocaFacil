import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./Machine.module.css";

const AdicionarMaquina = () => {
  const navigate = useNavigate();
  const [machines, setMachines] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    machineCode: "",
    traction: "",
    value: "",
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: URL.createObjectURL(imageFile),
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newMachine = { ...formData, id: Date.now() };
    setMachines((prevMachines) => [...prevMachines, newMachine]);
    setFormData({
      title: "",
      description: "",
      machineCode: "",
      traction: "",
      value: "",
      image: null,
    });
  };

  return (
    <div className={style.formContainer}>
      <form className={style.Mainform} onSubmit={handleSubmit}>
        <h1 className={style.TittleOne}>Adicionar Máquina</h1>
        <label className={style.mainLabel}>
          Título:
          <input
            className={style.mainInput}
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className={style.mainLabel}>
          Descrição:
          <input
            className={style.mainInput}
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className={style.mainLabel}>
          Código da Máquina:
          <input
            className={style.mainInput}
            type="text"
            name="machineCode"
            value={formData.machineCode}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className={style.mainLabel}>
          Tração:
          <input
            className={style.mainInput}
            type="text"
            name="traction"
            value={formData.traction}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className={style.mainLabel}>
          Valor:
          <input
            className={style.mainInput}
            type="text"
            name="value"
            value={formData.value}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className={style.mainLabel}>
          Imagem:
          <input
            className={style.mainInput}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </label>
        <br />
        <button type="submit">Adicionar Máquina</button>
      </form>
      <div>
        {machines.map((machine) => (
          <div key={machine.id}>
            <h3>{machine.title}</h3>
            <p>{machine.description}</p>
            <p className={style.teste}>
              Código da Máquina: {machine.machineCode}
            </p>
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

export default AdicionarMaquina;
