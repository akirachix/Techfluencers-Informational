import "./index.css";
const Team = () => {
  return (
    <div className="team-container">
      <h3 className="collegues">Our Team</h3>
      <div className="images">
        <figure>
          <img src="/Images/gladwell.png" alt="Gladwell" className="squad" />
          <p className="teamshot">Gladwell Wanjiku</p>
          <p className="teamshot">Software Engineer</p>
        </figure>

        <figure>
          <img src="/Images/fifi.png" alt="Wothaya" className="squad" />
          <p className="teamshot">Fridah Wothaya</p>
          <p className="teamshot">Software Engineer</p>
        </figure>

        <figure>
          <img src="/Images/muna.jpg" alt="Mumina" className="squad" />
          <p className="teamshot">Mumina Abdo</p>
          <p className="teamshot">Software Engineer</p>
        </figure>

        <figure>
          <img src="/Images/ajema.png" alt="Agnes" className="squad" />
          <p className="teamshot">Agnes Ajema</p>
          <p className="teamshot">Software Engineer</p>
        </figure>
       
        <figure>
          <img src="/Images/njango.png" alt="Maureen" className="squad" />
          <p className="teamshot">Maureen Njango</p>
          <p className="teamshot">Software Engineer</p>
        </figure>
      </div>
    </div>
  );
};

export default Team;
