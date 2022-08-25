import '../styles/components/Section001.scss';

const Section001 = (props) => {
  return (
    <header className='section001 snap-section' id='section001'>
      <div className='container'>
        <div className='text-aling'>
          <span className='text-span header'>Hola, soy</span>

          <h1 className='title-h1 header'>Satory Asensio</h1>
        </div>
        <h2 className='title-h2 header'>
          <span className='span span-left'>Frontend Developer</span>
          <span className='span-center'>&</span>
          <span className='span span-right'>UX/UI Designer</span>
        </h2>
        <p className='text-p quote'>
          Creo en el potencial de combinar códigos sólidos y elegantes con un
          buen diseño, como el mejor camino para crear aplicaciones que sean
          realmente útiles y lleguen a las personas.
        </p>
      </div>
    </header>
  );
};

export default Section001;
