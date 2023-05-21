import React from 'react';
import styles from "./About.module.css";
import fotoPedro from "../img/fotoPedro.jpg";




export default function About(props) {
    return (
        <div className={styles.aboutMe}>
            
            <img src={fotoPedro} alt="Mi imagen" style={{ borderTopLeftRadius: '8px' }} />
                            
            <h2>Pedro Cavataio</h2>
            <p>tecnologias utilizadas , etc atec, Aquí puedes escribir tu información personal. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque in minus unde rerum nam dolorem deserunt tempora ad reprehenderit, earum est aliquid odio illum quasi assumenda! Cum, quos. Amet, autem.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis animi facere quae provident, accusamus, soluta quo officiis error consequuntur vel doloremque tempore magni reiciendis adipisci architecto quos nesciunt incidunt blanditiis?. Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, et consectetur similique sunt itaque voluptatibus reprehenderit, atque, ipsum tempore fuga recusandae. Quisquam nemo itaque veritatis dolor. Nobis voluptatum ab placeat!</p>
            <ul>
                <li>perro</li>
                <li>gato</li>
            </ul>
      </div>
    );
  }

  
