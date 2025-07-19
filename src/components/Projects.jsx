import React, { useState } from 'react';
import Sanchara from '../assets/Sanchara.png';
import CarServiceHub from '../assets/CarServiceHub.png';
import SmartHire from '../assets/SmartHire.png';
import CarRental from '../assets/CarRental.png';
import TaskManager from '../assets/TaskManager.png';
import Portfolio from '../assets/Portfolio.png';
import Olympics_EDA from '../assets/Olympics_EDA.png';
import Sales_DashBoard from '../assets/Sales_DashBoard.png';
import BritishAirways from '../assets/BritishAirways.png';
import WindTurbine from '../assets/WindTurbine.png';
import '../styles/Projects.css';

const projects = [
  {
    title: 'Sanchara',
    description: 'A complete CourierEase Online Delivery Platform, built with a React-based frontend and a .NET Core + SQL Server backend. This system allows users to book courier shipments, track delivery status, and contact support. Admins and agents can manage users, shipments, and overall operations.',
    tags: ['ASP.NET', 'SQL Server', 'React'],
    animation: 'fade-left',
    url: 'https://github.com/amolgavit26/PG-DAC-FEB-25/tree/main/MS_Dot-Net_Technologies/Project',
    image: Sanchara
  },
  {
    title: 'SmartHire',
    description: 'SmartHire Careers is a fullstack online job portal that connects job seekers and employers. It features user authentication, job management, feedback submission, and role-based access control. The project is built with React.js (Frontend), Node.js/Express.js (Backend), and MySQL (Database).',
    tags: ['React', 'Node.js', 'MySQL'],
    animation: 'fade-right',
    url: 'https://github.com/amolgavit26/PG-DAC-FEB-25/tree/main/Web_Programming_Technologies/Project/Online_Job_Portal',
    image: SmartHire
  },
  {
    title: 'CarServiceHub',
    description: 'A complete CarServiceHub Online Service Portal, consisting of a React-based frontend and a Spring Boot + MySQL backend. This platform allows users to book car service appointments, browse workshops, and give feedback, while admins can manage workshops and view all service requests.',
    tags: ['SpringBoot', 'MySQL', 'React'],
    animation: 'fade-left',
    url: 'https://github.com/amolgavit26/PG-DAC-FEB-25/tree/main/Web-based-Java-Programming/Project/Car_Service',
    image: CarServiceHub
  },
  {
    title: 'Car Rental Web-Pages',
    description: 'This project is part of the PG-DAC FEB 2025 Web Programming Technologies assignment. It demonstrates foundational web development skills using HTML5 and CSS3, with an emphasis on responsive design. The project contains three main web pages: Contact Page, Home Page, and Sign-In Page.',
    tags: ['HTML', 'CSS'],
    animation: 'fade-right',
    url: 'https://github.com/amolgavit26/PG-DAC-FEB-25/tree/main/Web_Programming_Technologies/Assignment/Tarang',
    image: CarRental
  },
  {
    title: 'TaskMaster',
    description: 'A full-stack task management system built with React (frontend), Express (backend), and MySQL (database). Users can create, view, and manage tasks marked as "Pending" or "Completed".',
    tags: ['React', 'Node.js', 'MySQL'],
    animation: 'fade-left',
    url: 'https://github.com/amolgavit26/PG-DAC-FEB-25/tree/main/Web_Programming_Technologies/Assignment/Task_Management_App',
    image: TaskManager
  },
  {
    title: 'Portfolio Site',
    description: 'Welcome to my personal portfolio website built using React.js! This project showcases my work, skills, and contact information in a clean and modern layout.',
    tags: ['React'],
    animation: 'fade-right',
    url: 'https://github.com/amolgavit26/Portfolio',
    image: Portfolio
  },
  {
    title: 'Olympic EDA',
    description: 'This project performs an Exploratory Data Analysis (EDA) on the Olympic Games dataset to uncover insights, trends, and interesting visualizations related to athletes performances, participating countries, medal tallies, and historical data over time.',
    tags: ['Python', 'Plotly', 'Jupyter'],
    animation: 'fade-left',
    url: 'https://github.com/amolgavit26/EDA_on_Olympic_Dataset?tab=readme-ov-file',
    image: Olympics_EDA
  },
  {
    title: 'WondTurbine',
    description: 'This project is a Python-based BME analysis and calculation for horizontal-axis wind turbine (HAWT) blades. It calculates blade parameters such as chord length, angle of attack, and other geometric and aerodynamic properties based on user inputs.',
    tags: ['QBlade', 'MATLAB', 'Python'],
    animation: 'fade-right',
    url: 'https://github.com/amolgavit26/Wind_Turbine',
    image: WindTurbine
  },
  {
    title: 'British Airways Analysis',
    description: 'This project involves web scraping, data cleaning, and sentiment analysis of British Airways customer reviews from Skytrax. Using Python libraries like BeautifulSoup, pandas, and vaderSentiment, it follows a full data science workflow—from collecting and cleaning raw data to building and evaluating predictive models that estimate a customers likelihood of booking a flight.',
    tags: ['Python', 'Vader','Machine Learning', 'Pandas'],
    animation: 'fade-left',
    url: 'https://github.com/amolgavit26/British_Airways_Internship_Project',
    image: BritishAirways
  },
  {
    title: 'Sales Analysis',
    description: 'This Power BI dashboard provides a comprehensive overview of sales performance for XYZ Limited across different locations, product codes, and time periods. It enables stakeholders to gain insights into revenue trends, profitability, and transaction metrics for the financial years 2018–19 and 2019–20.',
    tags: ['PowerBI'],
    animation: 'fade-right',
    url: 'https://github.com/amolgavit26/XYZ_Sales_Dashboard_PBI',
    image: Sales_DashBoard
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      {visibleProjects.map((project, index) => (
        <div
          key={index}
          className={`project-card ${index % 2 !== 0 ? 'reverse' : ''}`}
          data-aos={project.animation}
        >
          <div className="project-image">
            <img
              src={project.image || 'https://via.placeholder.com/400x300?text=No+Image'}
              alt={`${project.title} Screenshot`}
            />
          </div>
          <div className="project-content">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className={`tag ${
                    tag === 'Figma' || tag.includes('Node') || tag.includes('Firebase')
                      ? 'green'
                      : tag.includes('TailwindCSS')
                      ? 'cyan'
                      : ''
                  }`}
                  data-aos={project.animation}
                  data-aos-delay={(idx + 1) * 100} 
                >
                  {tag}
                </span>
              ))}
            </div>
            {project.url ? (
              <a
                href={project.url}
                className="project-button"
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title}`}
              >
                View Project
              </a>
            ) : (
              <button
                className="project-button"
                onClick={() => alert('Project coming soon!')}
              >
                View Project
              </button>
            )}
          </div>
        </div>
      ))}

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button
          className="show-more-button"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  );
};

export default Projects;
