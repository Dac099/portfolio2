import { useRef, useEffect } from 'react';
import styles from './canvas.module.css';

export const Canvas = () => {
  const canvasRef = useRef(null);
  const particles = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Configurar la densidad de píxeles del canvas para pantallas de alta resolución
    const dpi = window.devicePixelRatio || 1;
    canvas.width = canvas.clientWidth * dpi;
    canvas.height = canvas.clientHeight * dpi;

    ctx.scale(dpi, dpi);

    let animationFrameId;

    // Función para generar un número aleatorio en un rango
    const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

    // Función para crear una partícula
    const createParticle = () => ({
      x: getRandomNumber(0, canvas.width),
      y: getRandomNumber(0, canvas.height),
      radius: getRandomNumber(0.5, 10),
      color: '#7f5af0',
      speedX: getRandomNumber(-2, 2),
      speedY: getRandomNumber(-2, 2),
    });

    // Función para actualizar la posición de las partículas
    const updateParticles = () => {
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Si una partícula sale del canvas, la reiniciamos en una posición aleatoria
        if (particle.x < 0 || particle.x > canvas.width || particle.y < 0 || particle.y > canvas.height) {
          particle.x = getRandomNumber(0, canvas.width);
          particle.y = getRandomNumber(0, canvas.height);
        }
      });
    };

    // Función para dibujar las partículas en el canvas
    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = particle.color;
        ctx.fill();
      });
    };

    // Función para animar las partículas
    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    // Inicialización: Crear 100 partículas
    for (let i = 0; i < 1000; i++) {
      particles.push(createParticle());
    }

    // Iniciar la animación cuando el componente se monte
    animate();

    // Limpiar el intervalo cuando el componente se desmonte
    return () => {
      cancelAnimationFrame(animationFrameId); 
    };
  }, []); // El array vacío garantiza que este efecto solo se ejecute una vez, equivalente a componentDidMount

  return <canvas ref={canvasRef} className={styles.canvas}/>;
};