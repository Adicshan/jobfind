import React, { useState } from "react";
import "./Home.css";
import saraswati_mata from "./images/saraswati_mata.jpg";


const jobsData = [
  { 
    id: 1,
    role: "Full Stack Software Engineer – Assistant Manager (CL4)",
    company: "Deloitte",
    location: "Hyderabad, Telangana, India",
    shortDesc:
      "Work on high-visibility projects using modern cloud and full-stack technologies.",
    experience: "5+ years",
    skills:
      "React, Angular, NodeJS, Python, Java, .NET, Cloud (AWS/Azure/GCP)",
    apply:
      "https://usijobs.deloitte.com/en_US/careersUSI/Login?jobId=320953",
    fullDesc: `As a Full-Stack Software Engineer, you will design, develop and deploy 
    advanced software solutions. You will collaborate with cross-functional teams, 
    apply modern engineering practices, work with cloud-native technologies and 
    deliver scalable, high-quality solutions.`
  },

  {
    id: 2,
    role: "Software Developer",
    company: "IBM",
    location: "India",
    shortDesc:
      "Build hybrid-cloud and AI solutions using modern Java technologies.",
    experience: "3–5 years",
    skills:
      "Java 8+, Spring, Hibernate, OOP, Multithreading, JSP/Servlets",
    apply:
      "https://careers.ibm.com/en_US/careers/JobDetail?jobId=67921",
    fullDesc: `As a Software Developer at IBM, you will participate in the full 
    software development lifecycle including design, coding, testing and support.

    Responsibilities:
    • Analyze and improve existing failures  
    • Engage in all SDLC phases  
    • Drive stakeholder discussions  
    • Build scalable cloud & AI solutions  

    Requirements:
    • Java 8+, Spring, Hibernate  
    • Strong OOP concepts  
    • Multithreading, JVM, Collections  
    • Maven, Git, Design Patterns`
  },

  {
    id: 3,
    role: "Software Development Engineer (SDE I – L4)",
    company: "Amazon (AFFS Team)",
    location: "India",
    shortDesc:
      "Design and build scalable distributed systems in a fast-paced agile environment.",
    experience: "3+ years",
    salary: "₹24–30 LPA (including bonus & sign-on)",
    skills:
      "Java / C++ / Python, Data Structures, Distributed Systems, OOP, System Design",
    apply:
      "https://www.amazon.jobs/",
    fullDesc: `Key Job Responsibilities:
    • Drive business decisions with the team  
    • Design, implement, test, deploy and maintain solutions  
    • Write high-quality distributed system software  
    • Follow best engineering practices  
    • Work in an agile environment  

    Basic Qualifications:
    • 3+ years professional development experience  
    • 2+ years system design experience  
    • Proficiency in at least one programming language  

    Amazon supports inclusive hiring and accommodations.`
  },

  {
    id: 4,
    role: "Data Engineer",
    company: "Atlassian",
    location: "Remote / Hybrid (Global)",
    shortDesc:
      "Build scalable data platforms and multi-petabyte data lakes.",
    experience: "5+ years",
    skills:
      "Python, Java, Scala, SQL, Spark, Databricks, Airflow, AWS, Data Modeling",
    apply:
      "https://www.atlassian.com/company/careers",
    fullDesc: `Key Responsibilities:
    • Partner with PMs, Engineering & Business teams  
    • Build scalable data models & pipelines  
    • ETL from multiple sources into data warehouse  
    • Improve data quality & governance  
    • Implement new data technologies  
    • Coach junior engineers  

    Requirements:
    • BS in CS or equivalent  
    • 5+ years experience as Data/Software Engineer  
    • Strong Python/Java/Scala  
    • SQL & data warehousing knowledge  
    • Experience with Spark, Hive, Airflow  
    • AWS (EMR, Kinesis, S3, RDS, SQS)  
    • Agile, TDD, CI/CD  

    Preferred:
    • Kappa architecture  
    • DBT experience  
    • Open source contributions  

    Benefits:
    • Remote-friendly work  
    • Health & wellbeing perks  
    • Paid volunteer days  
 `

  },
  {
  id: 5,
  role: "Staff Software Engineer – Networking",
  company: "Databricks",
  location: "Bengaluru, India",
  shortDesc:
    "Build large-scale networking services powering Databricks cloud platform.",
  experience: "12+ years",
  salary: "₹23–42 LPA",
  skills:
    "Python / Java / Scala / C++, Distributed Systems, Networking, SaaS",
  apply:
    "https://www.databricks.com/company/careers/engineering---pipeline/staff-software-engineer--networking-7648669002",
  fullDesc: `Responsibilities:
  • Design backend connectivity services  
  • Build systems powering millions of VMs  
  • Lead distributed system architecture  
  • Work with product & infra teams  
  • Solve multi-cloud networking challenges  

  Requirements:
  • 12+ years coding experience  
  • 7+ years building distributed systems  
  • Strong networking background  
  • SaaS / Service-oriented architecture experience  

  Benefits:
  • Competitive salary  
  • Global company exposure  
  • Inclusive work culture`
},
{
  id: 6,
  role: "Applications Developer",
  company: "Oracle",
  location: "Hyderabad, Telangana, India",
  shortDesc:
    "Develop enterprise cloud applications using Java, REST and microservices for Procurement Cloud.",
  experience: "3 – 5+ years",
  skills:
    "Java, Spring, REST, Microservices, JavaScript, SQL, AI Agents",
  apply:
    "https://www.oracle.com/careers/",
  fullDesc: `Key Responsibilities:
    • Analyze, design, develop and debug enterprise applications  
    • Build complex enhancements and resolve critical bugs  
    • Perform unit testing and regression testing  
    • Collaborate with QA and product management teams  
    • Interact with customers to resolve issues  
    • Contribute to AI-driven and microservices-based solutions  

    Technology Stack:
    • Java, JavaScript  
    • Oracle VB/JET  
    • REST APIs  
    • SQL / PL-SQL  
    • Microservices  
    • AI Agents, Gen-AI, Agentic workflows  

    Requirements:
    • BS / MS degree or equivalent experience  
    • 4+ years of software engineering experience  
    • Strong Java & OOPS concepts  
    • Spring, REST, Microservices  
    • JavaScript / JET  

    Preferred:
    • JDBC, XML  
    • Unix/Linux  
    • ADF  
    • AI/ML  
    • Scrum  

    Team:
    • Fusion Procurement Development  
    • Procurement Cloud  
 `
},
{
  id: 7,
  role: "Software Engineer II - UI (Angular)",
  company: "JPMorganChase",
  location: "India",
  shortDesc:
    "Design and develop secure, scalable UI applications using Angular/React within Consumer & Community Banking.",

  experience: "4+ years",

  skills:
    "Angular, React, JavaScript, HTML, CSS, Bootstrap, Angular Material, Micro Frontend, Accessibility",

  apply:
    "https://careers.jpmorganchase.com/",

  fullDesc: `Key Responsibilities:
    • Design, develop and troubleshoot UI applications  
    • Write secure, high-quality code  
    • Work with upstream & downstream systems  
    • Apply SDLC tools for automation  
    • Debug and resolve technical issues  
    • Analyze large datasets for decision making  
    • Follow secure coding standards  
    • Promote inclusive team culture  

    Technology Stack:
    • Angular / React  
    • JavaScript  
    • HTML, CSS  
    • Bootstrap, Angular Material  
    • Micro Frontend Architecture  

    Requirements:
    • 4+ years frontend experience  
    • Strong JavaScript fundamentals  
    • Experience with Angular/React  
    • Corporate project experience  
    • End-to-end SDLC knowledge  
    • CI/CD exposure  
    • Security & resiliency practices  

    Preferred:
    • Accessibility standards  
    • Cloud exposure  
    • AI / ML basics  
    • Mobile development  

    Team:
    • Consumer & Community Banking  
    • Agile Scrum Teams  
 `
}



];




export default function Home() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="home-container">
      <img src={saraswati_mata} alt="Saraswati Mata" className="header-image" />

      <h2 className="title">Latest Job Openings</h2>

      <div className="jobs">
         {jobsData.map((job) => (
          <div
            className="job-card"
            key={job.id}
            onClick={() => setSelectedJob(job)}
          >
            <h3>{job.role}</h3>
            <p><b>Company:</b> {job.company}</p>
            <p><b>Location:</b> {job.location}</p>
            <p>{job.shortDesc}</p>
          </div>
        ))}
        
      </div>
        {selectedJob && (
        <div className="modal">
          <div className="modal-content">

            <span
              className="close"
              onClick={() => setSelectedJob(null)}
            >
              &times;
            </span>

            <h2>{selectedJob.role}</h2>

            <p><b>Company:</b> {selectedJob.company}</p>
            <p><b>Location:</b> {selectedJob.location}</p>
            <p><b>Experience:</b> {selectedJob.experience}</p>
            <p><b>Skills:</b> {selectedJob.skills}</p>

            <p className="full-desc">
              {selectedJob.fullDesc}
            </p>

            <a
              href={selectedJob.apply}
              target="_blank"
              rel="noreferrer"
              className="apply-btn"
            >
              Apply Now
            </a>

          </div>
        </div>
      )}
     
    </div>
  );
}
