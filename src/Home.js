import React, { useState } from "react";
import "./Home.css";

const jobsData = [
    { id: 1,
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
  }
]


export default function Home() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="home-container">

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
