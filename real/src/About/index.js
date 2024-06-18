import './index.css'
const About = () =>{
    return(
        <div className='wholepage'>
        <div className='about'>
            <h1>About Us</h1>
            <p>Real fashion is about more than just finding
              <br></br>
               amazing fashion , It's about givivng real time
               <br></br>
               analytics of the trending fashion. The clothes 
               <br></br>
               will have power to create change.</p>
        </div>
        <h1 className='collegues'>Our Team</h1>
        <div className='images'>
        <figure>
            < img src="/Media/glady.jpg" alt="" className='team'/>
            <p>Gladwell Wanjiku</p>
            <p>Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/fifi.png" alt="" className='team' />
            <p>Fridah Wothaya</p>
            <p>Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/muna.jpg" alt="" className='team' />
            <p>Mumina Abdo</p>
            <p>Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/ajema.png" alt="" className='team'/>
            <p>Agnes Ajema</p>
            <p>Software Engineer</p>
            </figure>
            <br></br>
            <figure>
            < img src="/Media/njango.png" alt="" className='team'/>
            <p>Maureen Njango</p>
            <p>Software Engineer</p>
            </figure>
          
        </div>
        </div>
        
    )
}
export default About;


