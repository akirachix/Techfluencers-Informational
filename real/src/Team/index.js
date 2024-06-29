import './index.css'
const Team = () =>{
    return(
        <div className="wholepage">
            <h3 className="collegues">Our Team</h3>
        <div className="images">
              <figure>
            < img src="/Media/glady.jpg" alt="" className='team'/>
            <p className="attributes">Gladwell Wanjiku</p>
            <p className="attributes">Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/fifi.png" alt="" className='team' />
            <p className="attributes">Fridah Wothaya</p>
            <p className="attributes">Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/muna.jpg" alt="" className='team' />
            <p className="attributes">Mumina Abdo</p>
            <p className="attributes">Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/ajema.png" alt="" className='team'/>
            <p className="attributes">Agnes Ajema</p>
            <p className="attributes">Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/njango.png" alt="" className='team'/>
            <p className="attributes">Maureen Njango</p>
            <p className="attributes">Software Engineer</p>
            </figure>
        </div>
    
        </div>
    )
  
}

export default Team;