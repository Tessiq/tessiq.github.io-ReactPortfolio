import ME from './Images/ME.png'
const App = (props) =>{
  return (
    <div className="App">
      <div id='header'>
        <h3>Coder</h3>
        <h1>Brandon Grigg</h1>
        <h3>Designer</h3>
      </div>
      <div id='about'>
        <h2>About Me</h2>
        <p>Hello! I'm Brandon, a passionate and driven individual with a deep love for coding and technology. From a young age, I've been fascinated by the power of programming to shape our world and solve complex problems. I am constantly seeking opportunities to expand my knowledge and skills, always staying up to date with the latest advancements in the field. With a strong foundation in critical thinking and problem-solving, I enjoy tackling challenges head-on and finding creative solutions. I thrive in collaborative environments where I can contribute my expertise while learning from others. I am excited to embark on a journey to leverage my programming skills to make a positive impact and drive innovation. Let's connect and explore how we can create something amazing together!</p>
      </div>
      <div id='skills'>
        <h2>My Skills</h2>
        <p><b>Critical Thinking</b> - Using logic and reasoning to identify the strengths and weaknesses of alternative
          solutions, conclusions or approaches to problems.</p>
        <p><b>Programming</b> - Writing computer programs for various purposes.</p>
        <p><b>Complex Problem Solving</b> - Identifying complex problems and reviewing related information to
          develop and evaluate options and implement solutions.</p>
        <p><b>Systems Analysis</b> - Determining how a system should work and how changes in conditions, operations, and
          the environment will affect outcomes.</p>
        <p><b>Time Management</b> - Managing one&#39;s own time and the time of others.</p>
      </div>
      <div id='projects'>
        <h2>Projects</h2>
        {
          props.data.map(content => (
            <div className='box'>
              <h3>{content.title}</h3>
              <p>{content.date}</p>
              <p>{content.description}</p>
              <a target='_blank' rel='noreferrer' href={content.link}>Click here to view!</a>
            </div>
          ))
        }
      </div>
      <div id='contact'>
        <h2>Contact Me</h2>
        <h4>Phone: <a href="tel:6028214052">(602)-821-4052</a></h4>
        <h4>Email: <a href='mailto:tessiqb@gmail.com'>tessiqb@gmail.com</a> </h4>
        <h4>Github: <a target='_blank' rel='noreferrer' href='https://github.com/Tessiq'>https://github.com/Tessiq</a></h4>
      </div>
    </div>
  );
}

export default App;
