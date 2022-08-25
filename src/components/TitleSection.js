import '../styles/components/TitleSection.scss';

const TitleSection = (props) => {
  return (
    <div className='title-section'>
      <span className='number'>{props.number ? props.number : '01'}</span>
      <h2 className='title'>{props.title ? props.title : 'Título'}</h2>
    </div>
  );
};

export default TitleSection;
