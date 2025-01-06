import React from 'react';
    import { FaCheckCircle, FaHeart, FaUsers, FaBook } from 'react-icons/fa';
    
    function MembershipBenefits() {
      return (
        <section className="container p-8 bg-neutral">
          <h2 className="section-title">Beneficios de la Membresía</h2>
          <div className="flex flex-col md:flex-row justify-between gap-8">
            <div className="text-center p-4">
              <FaCheckCircle className="text-5xl text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Planes Personalizados</h3>
              <p className="text-lg">Planes adaptados a tus necesidades.</p>
            </div>
            <div className="text-center p-4">
              <FaHeart className="text-5xl text-secondary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Seguimiento del Bienestar</h3>
              <p className="text-lg">Monitorea tu progreso.</p>
            </div>
            <div className="text-center p-4">
              <FaUsers className="text-5xl text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Comunidad Solidaria</h3>
              <p className="text-lg">Conéctate con otros miembros.</p>
            </div>
            <div className="text-center p-4">
              <FaBook className="text-5xl text-secondary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Contenido Exclusivo</h3>
              <p className="text-lg">Accede a recursos únicos.</p>
            </div>
          </div>
        </section>
      );
    }
    
    export default MembershipBenefits;
