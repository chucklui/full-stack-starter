import './AboutMe.scss';
import me from './me.jpg';

function AboutMe() {
  return (
    <div id="about-me">
      <img className="img-fluid mb-3" src={me} alt="My Name" />
      <h1>Chuck Lui</h1>
      <p>Hi! My name is Cheuk Ho Lui but I go by Chuck. I am a recent graduate student from UCM majoring in Bioengineering. Throughout college I was involved in culture clubs as well as Greek community. I'm passion about making an impact on the world through advacned technology and creativity.</p>
    </div>
  );
}

export default AboutMe;
