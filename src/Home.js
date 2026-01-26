import React, { useState } from "react";
import "./Home.css";


const jobsData = [
  {
    id: 1,
    role: "Full Stack Software Engineer – Assistant Manager (CL4)",
    company: "Deloitte",
    logo: "/images/deloitte.webp",
    location: "Hyderabad, Telangana, India",
    package: "₹18 – 30 LPA",
    shortDesc:
      "Work on high-visibility projects using modern cloud and full-stack technologies.",
    experience: "5+ years",
    skills:
      "React, Angular, NodeJS, Python, Java, .NET, AWS, Azure, GCP",
    apply:
      "https://usijobs.deloitte.com/en_US/careersUSI/Login?jobId=320953",
    fullDesc: `Design, develop and deploy advanced software solutions in a cloud-native environment.`
  },

  {
    id: 2,
    role: "Software Developer",
    company: "IBM",
    logo: "/images/ibm.webp",
    location: "India",
    package: "₹10 – 18 LPA",
    shortDesc:
      "Build hybrid-cloud and AI solutions using modern Java technologies.",
    experience: "3–5 years",
    skills:
      "Java, Spring, Hibernate, OOP, Multithreading, JSP, Servlets",
    apply:
      "https://careers.ibm.com/",
    fullDesc: `Work across the full SDLC to build scalable enterprise applications.`
  },

  {
    id: 3,
    role: "Software Development Engineer (SDE I – L4)",
    company: "Amazon",
    logo: "/images/amazon.webp",
    location: "India",
    package: "₹24 – 30 LPA",
    shortDesc:
      "Design and build scalable distributed systems in a fast-paced environment.",
    experience: "3+ years",
    skills:
      "Java, C++, Python, Data Structures, OOP, System Design",
    apply:
      "https://www.amazon.jobs/",
    fullDesc: `Build and maintain highly available distributed systems at scale.`
  },

  {
    id: 4,
    role: "Data Engineer",
    company: "Atlassian",
    logo:"/images/atlassian.webp",
    location: "Remote / Hybrid",
    package: "₹20 – 35 LPA",
    shortDesc:
      "Build scalable data platforms and multi-petabyte data lakes.",
    experience: "5+ years",
    skills:
      "Python, Java, Scala, Spark, SQL, Databricks, AWS",
    apply:
      "https://www.atlassian.com/company/careers",
    fullDesc: `Design high-performance data pipelines and analytics platforms.`
  },

  {
    id: 5,
    role: "Staff Software Engineer – Networking",
    company: "Databricks",
    logo: "/images/databricks.webp",
    location: "Bengaluru, India",
    package: "₹23 – 42 LPA",
    shortDesc:
      "Build large-scale networking services for cloud infrastructure.",
    experience: "12+ years",
    skills:
      "Python, Java, C++, Distributed Systems, Networking, SaaS",
    apply:
      "https://www.databricks.com/company/careers",
    fullDesc: `Lead architecture and design of multi-cloud networking systems.`
  },

  {
    id: 6,
    role: "Applications Developer",
    company: "Oracle",
    logo: "/images/oracle.webp",
    location: "Hyderabad, Telangana, India",
    package: "₹12 – 20 LPA",
    shortDesc:
      "Develop enterprise cloud applications using Java and microservices.",
    experience: "3 – 5+ years",
    skills:
      "Java, Spring, REST APIs, Microservices, SQL",
    apply:
      "https://www.oracle.com/careers/",
    fullDesc: `Develop and enhance Oracle Procurement Cloud applications.`
  },

  {
    id: 7,
    role: "Software Engineer II – UI (Angular)",
    company: "JPMorganChase",
    logo: "/images/JpmorganChase.webp",
    location: "India",
    package: "₹14 – 22 LPA",
    shortDesc:
      "Build secure, scalable UI applications for banking platforms.",
    experience: "4+ years",
    skills:
      "Angular, React, JavaScript, HTML, CSS, Bootstrap",
    apply:
      "https://careers.jpmorganchase.com/",
    fullDesc: `Develop enterprise-grade UI solutions with accessibility standards.`
  },

  {
    id: 8,
    role: "Software Engineer / Software Developer I",
    company: "Oracle",
    logo: "/images/oracle.webp",
    location: "Bengaluru, Karnataka, India",
    package: "₹8 – 14 LPA",
    shortDesc:
      "Develop and debug enterprise software applications.",
    experience: "1 – 3+ years",
    skills:
      "Java, Python, SQL, DSA, OOPS",
    apply:
      "https://eeho.fa.us2.oraclecloud.com/",
    fullDesc: `Entry-level role focused on core software engineering fundamentals.`
  }
];





export default function Home() {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="home-container">
      <img src="/images/saraswati_mata.webp" alt="Saraswati Mata" className="header-image" />

 

      <div className="jobs">
  {jobsData.map((job) => (
    <div
      className="job-card"
      key={job.id}
      onClick={() => setSelectedJob(job)}
    >
      {/* Header */}
      <div className="job-header">
       <div className="company-row">
    <img
      src={job.logo}
      alt={job.company}
      className="company-logo"
    />
    <p className="company-name">{job.company}</p>
  </div>
  
          <h3 className="job-role">{job.role}</h3>
       
      </div>

      {/* Info */}
      <div className="job-info">
        <p><b>Location:</b> {job.location}</p>
        <p><b>Package:</b> {job.package}</p>

      </div>

      {/* Footer */}
      <div className="job-footer">
        <button className="view-btn">
          View Details
        </button>
      </div>
    </div>
  ))}
</div>

{selectedJob && (
  <div className="job-modal-overlay" onClick={() => setSelectedJob(null)}>
    <div
      className="job-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="job-close"
        onClick={() => setSelectedJob(null)}
      >
        ✕
      </button>

      {/* Top Section */}
      <div className="job-top">
        <img
          src={selectedJob.logo}
          alt={selectedJob.company}
          className="job-logo"
        />

        <div className="job-title">
          <h2>{selectedJob.role}</h2>
          <span>{selectedJob.company}</span>
        </div>
      </div>

      {/* Meta Info */}
      <div className="job-meta">
        <div>
          <label>Location</label>
          <p>{selectedJob.location}</p>
        </div>

        <div>
          <label>Experience</label>
          <p>{selectedJob.experience}</p>
        </div>

        <div>
          <label>Package</label>
          <p>{selectedJob.package}</p>
        </div>
      </div>

      {/* Short Description */}
      <div className="job-highlight">
        {selectedJob.shortDesc}
      </div>

      {/* Skills */}
      <div className="job-section">
        <h3>Required Skills</h3>
        <div className="skill-tags">
          {selectedJob.skills.split(",").map((skill, i) => (
            <span key={i}>{skill.trim()}</span>
          ))}
        </div>
      </div>

      {/* Full Description */}
      <div className="job-section">
        <h3>Job Description</h3>
        <p className="job-desc">{selectedJob.fullDesc}</p>
      </div>

      {/* Footer */}
      <div className="job-footer">
        <a
          href={selectedJob.apply}
          target="_blank"
          rel="noreferrer"
          className="job-apply"
        >
          Apply on Deloitte Careers
        </a>
      </div>
    </div>
  </div>
)}


    </div>
  );
}
