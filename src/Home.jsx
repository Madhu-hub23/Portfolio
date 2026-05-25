import "./Home.css"
import Photo from "./assets/Photo.png";

function Home() {
  return (
    <div className="home">

   <img src={Photo} alt="profile" />

      <div className="content">
        <h1>Hi, I'm Madhumidha</h1>

        <h2>Aspiring Data Scientist</h2>

        <p>
          Hello! I'm Madhumidha, a Data Science student who loves exploring technology and creating innovative solutions. I am interested in Machine Learning, Artificial Intelligence, and frontend development. I enjoy working on projects that help me improve my technical and problem-solving skills.
        </p>
        <a href="/Resume.pdf" download>
  <button className="resume-btn">
    Download Resume
  </button>
</a>

        
      </div>

    </div>
  )
}

export default Home