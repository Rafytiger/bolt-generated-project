import React from 'react';
    
    function Hero() {
      return (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-primary opacity-75"></div>
          <div className="container relative z-10 flex flex-col items-center justify-center p-8 text-center">
            <h1 className="text-5xl font-serif font-bold text-gradient mb-4">
              Donde el bienestar se une con la naturaleza.
            </h1>
            <p className="text-xl font-light text-neutral mb-8">
              Transforma tu salud y tu vida con hábitos reales y sostenibles.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary">Explorar Productos</button>
              <button className="btn btn-secondary">Únete Ahora</button>
            </div>
          </div>
        </section>
      );
    }
    
    export default Hero;
