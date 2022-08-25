import '../styles/components/Project.scss';

const Project = (props) => {
  // Añado y quito la clase "hoverJS" en función de si el ratón está o no encima de una revisualización de proyecto. Sirve para mostrar la información del mismo.
  const handleMouseOver = (ev) => {
    let img = document.querySelector('.classSrcImg');
    img.classList.add('hoverJS');

    let info = ev.currentTarget;
    info.classList.add('hoverJS');
  };

  const handleMouseOut = (ev) => {
    let img = document.querySelector('.classSrcImg');
    img.classList.remove('hoverJS');

    let info = ev.currentTarget;
    info.classList.remove('hoverJS');
  };

  // Añado de forma dinámica las "skills" del proyecto, recorriendo el array de las mismas con un ".map()".
  let htmlSkills = '';
  htmlSkills = props.skills.map((item) => {
    return <span className='skill-tag-work'>{item}</span>;
  });

  return (
    <div
      className='project'
      // className='project hoverJS'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className={`classSrcImg csi ${props.classSrcImg}`}></div>
      <div className='info'>
        <h4 className='title-h4 work'>{props.title}</h4>
        <p className='text-p work white-space-jump'>{props.description}</p>

        <p className='info-skills skills-line'>{htmlSkills}</p>

        <div className='btn-view-more-project'>
          <div className='iconBtn iconLink'></div>
          <a href={`${props.url}`} target='_blank'>
            Ver proyecto
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
