import "../styles/certificaciones.scss";
import certificado_uno from "../assets/certificado_uno.png";
import certificado_dos from "../assets/certificado_dos.png";
import { GrCertificate } from "react-icons/gr";
import { useState } from "react";

function Certificaciones() {
  const [showInfo, setShowInfo] = useState(false);
  const [showInfo2, setShowInfo2] = useState(false);

  const handleInfo = (bool: boolean): void => {
    setShowInfo(bool);
  };
  const handleInfo2 = (bool: boolean): void => {
    setShowInfo2(bool);
  };

  return (
    <section className="certificacionesContainer" id="certificaciones">
      <h1>Certificaciones</h1>
      <p>
        Estoy orgulloso de mis logros obtenidos en mi carrera actual. Espero
        conseguir más logros en mi vida. Qué puedo decir, me encanta el
        desarrollo web y sus ramas derivadas.
      </p>
      <div className="certificaciones">
        <div
          className="boxCertificaciones"
          onMouseEnter={() => handleInfo(true)}
          onMouseLeave={() => handleInfo(false)}
        >
          <div className="imgCertificaciones">
            <img
              src={certificado_dos}
              style={{
                transform: `scale(${showInfo ? 1.05 : 1})`,
              }}
              alt="holberton"
              title="holberton"
            />
          </div>
          <div
            className="infoCertificado"
            style={{ opacity: showInfo ? 1 : 0 }}
          >
            <span className="dateCertificado">06 de Agosto del 2023</span>
            <div className="boxCertificado">
              <a href="https://www.sololearn.com/en/certificates/CC-OW4GW2EL" target="_BLANK">
                <GrCertificate className="icon" />
                <p>ver certificado</p>
              </a>
            </div>
            <h2 className="titleCertificado">Introduction to Python</h2>
            <p>
              Fundamentos de python, estructura de datos, condicionales y
              ejercicios practicos.
            </p>
          </div>
        </div>
        <div
          className="boxCertificaciones"
          onMouseEnter={() => handleInfo2(true)}
          onMouseLeave={() => handleInfo2(false)}
        >
          <div className="imgCertificaciones">
            <img
              src={certificado_uno}
              style={{
                transform: `scale(${showInfo2 ? 1.05 : 1})`,
              }}
              alt="holberton"
              title="holberton"
            />
          </div>
          <div
            className="infoCertificado"
            style={{ opacity: showInfo2 ? 1 : 0 }}
          >
            <span className="dateCertificado">13 de Febrero del 2024</span>
            <div className="boxCertificado">
              <a href="https://drive.google.com/drive/my-drive" target="_BLANK">
                <GrCertificate className="icon" />
                <p>ver certificado</p>
              </a>
            </div>
            <h2 className="titleCertificado">Full-Stack Developer</h2>
            <p>
              Duración: 6 meses, programa intensivo de programación por
              Holberton School Peru.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certificaciones;
