import './index.css'
const Team = () =>{
    return(
        <div className="team-container">
            <h3 className="collegues">Our Team</h3>
        <div className="images">
              <figure>
            < img src="/Media/gladwell.png" alt="" className='team'/>
            <p className="teamshot">Gladwell Wanjiku</p>
            <p className="teamshot">Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/fifi.png" alt="" className='team' />
            <p className="teamshot">Fridah Wothaya</p>
            <p className="teamshot">Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/muna.jpg" alt="" className='team' />
            <p className="teamshot">Mumina Abdo</p>
            <p className="teamshot">Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/ajema.png" alt="" className='team'/>
            <p className="teamshot">Agnes Ajema</p>
            <p className="teamshot">Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/njango.png" alt="" className='team'/>
            <p className="teamshot">Maureen Njango</p>
            <p className="teamshot">Software Engineer</p>
            </figure>
        </div>
    
        </div>
    )
  
}

export default Team;