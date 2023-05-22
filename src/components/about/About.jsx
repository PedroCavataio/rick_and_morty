import React, { useState } from 'react';
import styles from "./About.module.css";
import fotoPedro from "../img/fotoPedro.jpg";
import { Link } from 'react-router-dom';

export default function About(props) {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    props.onClose(); // Llamar a la función onClose pasada como prop
  };

  if (!isOpen) {
    return null; 
  }

  return (
    <div className={styles.aboutMe}>
      <Link to={"/home"}>
      <button className={styles.closeButton} onClick={handleClose}>X</button>
      </Link>
      <img src={fotoPedro} alt="Mi imagen" style={{ borderTopLeftRadius: '8px' }} />
      <h2 className={styles.nombre}>Pedro Cavataio</h2>
      <p className={styles.texto}>
        Tecnologías utilizadas, etc. Aquí puedes escribir tu información personal. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque in minus unde rerum nam dolorem deserunt tempora ad reprehenderit, earum est aliquid odio illum quasi assumenda! Cum, quos. Amet, autem.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis animi facere quae provident, accusamus, soluta quo officiis error consequuntur vel doloremque tempore magni reiciendis adipisci architecto quos nesciunt incidunt blanditiis?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, et consectetur similique sunt itaque voluptatibus reprehenderit, atque, ipsum tempore fuga recusandae. Quisquam nemo itaque veritatis dolor. Nobis voluptatum ab placeat!
      </p>
      <ul>
        <li>React.</li>
        <li>AJAX.</li>
        <li>Métodos HTTP.</li>
        <li>Eventos.</li>
        <li>Módulos.</li>
        <li>Exportación.</li>
        <li>Webpack.</li>
        <li>Componentes.</li>
        <li>Webpack.</li>
        <li>Legacy.</li>
        <li>Inline Styling.</li>
        <li>CSS modules.</li>
        <li>Styled Components.</li>
        <li>Estado.</li>
        <li>Ciclo de vida.</li>
        <li>Hooks.</li>
        <li>Configuración.</li>
        <li>Navegación.</li>
        <li>Formularios.</li>
        <li>Keys.</li>
        <li>Redux.</li>
        <li>Flow de Redux.</li>
      </ul>
    </div>
  );
}
