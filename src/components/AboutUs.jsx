import React from 'react';
    
    function AboutUs() {
      return (
        <section className="container p-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <img
                src="https://placekitten.com/600/400"
                alt="Mari or a natural scene"
                className="w-full rounded shadow"
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4 text-left">Acerca de Natuliving</h2>
              <p className="text-lg mb-8 text-left">
                En Natuliving, ayudamos a mujeres y familias a lograr un equilibrio físico, mental y emocional.
              </p>
              <button className="btn btn-primary max-w-md">Conoce Más</button>
            </div>
          </div>
        </section>
      );
    }
    
    export default AboutUs;
