import ProjectDetailed from "./projectDetailed"

export default function AllProjects() {
    return(
        <>
        <div className="container px-4 py-4" id="icon-grid">
      <h2 className="pb-5 border-bottom">PROJECTS</h2>
     
      <div
        className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5"
        style={{
          backgroundColor: " #fcd357",
          borderRadius: "15px",
        }}
      >
        <ProjectDetailed 
        title="MentalWell (AI Mental Health Assistant)"
        description = {`An AI-powered mental health chatbot providing empathetic support with 
            emotion detection and sentiment analysis. Ensures complete privacy through local 
            processing, encrypted storage, and federated learning.`}
        techStack ={`Python, Machine Learning (NLP, emotion classification), Flask, 
            encryption, transformer models.`} 
        />
        <ProjectDetailed 
        title="Web Scraper-Product Price Tracker"
        description={`Automated e-commerce price monitoring tool that extracts real-time product 
            data (title, price, availability) with 95%+ accuracy. Stores data in CSV format for 
            historical trend analysis and price comparison.`} 
        techStack={`Python, BeautifulSoup, Pandas, CSV`}
        />
        <ProjectDetailed 
        title="Full Stack Blog Platform"
        description={`A full-stack blogging platform where users can register, log in, create, 
            edit, and delete posts with secure authentication and database integration.`}
        techStack={`Django, Python, SQLite, HTML, CSS, Bootstrap`}
        />
        <ProjectDetailed
        title="WeatherScope"
        description={`A React app that fetches live weather data based on city input using an 
            external weather API. Displays temperature, condition, and location dynamically.`}
        techStack={`node js , Express , REST API, JavaScript, CSS`}
        />
        </div>
        </div>
    </>
    );
};