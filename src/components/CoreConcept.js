export default function CoreConcept({ name, content, link }) {
    return (
        <div className="container">
        <div className="box" >
        <span></span>
        <div className="content">
          <h2>{name}</h2>
          <p>{content}</p>
          <a href={link} className="Rbutton">Read more »</a>
        </div>
      </div>
      </div>
    );
  }