import React, { useState, useEffect } from 'react';
import { ChevronRight, Mail, Phone, Github, Linkedin, MapPin, Calendar, Award, Code, Database, Cloud, Wrench, User, Briefcase, GraduationCap, FolderOpen, FileText, Menu, X, CodeXml } from 'lucide-react';
import axios from 'axios';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentFact, setCurrentFact] = useState('');
  const [showFact, setShowFact] = useState(false);


  // 🔥 Call API when page loads
  useEffect(() => {
    const testPing = async () => {
      try {
        const res = await axios.get("https://portfolio-dn2g.onrender.com/ping");
      } catch (err) {
        console.error("Error", err);
      }
    };
    testPing();
  }, []);

  const randomFacts = [
    "🎭 John Cena follows me on Twitter (you can see him)",
    "🚀 I built a self-driving car in Unity",
    "🧩 I can solve a Rubik's cube in under 2 minutes",
    "⚽ I love playing soccer",
    "🏖️ Always a beach person",
    "🎪 My debugging skills are 50% skill, 50% pure mAgIc",
    "🎭 My commit messages are cleaner than my variable names"
  ];

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    setCurrentFact(randomFacts[randomIndex]);
    setShowFact(true);
  };

  const navigation = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  const experiences = [
    {
      title: "Research Assistant (AI/VR)",
      company: "University of North Texas",
      period: "Apr 2024 – Present",
      location: "Texas",
      technologies: ["Unity", "OpenAI Whisper API", "Python", "FAISS", "Qdrant", "React", "Node.js", "MongoDB", "WebSockets", "Unity Render Streaming"],
      achievements: [
        "Integrated OpenAI's Whisper API into Unity VR experience achieving 98% real-time transcription accuracy",
        "Increased user engagement by 40% through improved user experience in focus group sessions",
        "Designed custom LLM-powered retrieval system using FAISS and Qdrant for high-accuracy vector queries",
        "Developed session-based grading application in React, Node.js, and MongoDB for 25+ concurrent users",
        "Implemented real-time audio streaming with Unity Render Streaming achieving <50ms latency"
      ]
    },
    {
      title: "Software Development Intern",
      company: "Paycom",
      period: "May 2025 – Aug 2025",
      location: "Texas",
      technologies: ["React", "TypeScript", ".NET Core", "C#", "Web APIs", "SQL Server", "Stored Procedures"],
      achievements: [
        "Engineered full-stack solution with React (TypeScript) and .NET Core/C# Web APIs",
        "Optimized client engagement tracking and automated feedback reporting",
        "Enhanced SQL queries and stored procedures for cross-client analytics",
        "Decreased data retrieval latency by 30% and improved report generation"
      ]
    },
    {
      title: "Software Developer",
      company: "Deloitte",
      period: "Jun 2021 – Jan 2024",
      location: "",
      technologies: ["Angular", ".NET Core", "C#", "Microsoft SQL Server", "Azure DevOps", "Azure Key Vault", "Tableau", "SQLBulkCopy", "REST APIs"],
      achievements: [
        "Transformed Windows application to web app using Angular, improving performance by 100%",
        "Implemented scalable RESTful APIs in .NET Core/C# reducing code latency by 40%",
        "Optimized database performance with clustered indexing, improving query time by 65%",
        "Deployed applications using Azure DevOps with 30% improvement in deployment efficiency",
        "Optimized complex SQL query reducing execution time from 2-3 minutes to under 10 seconds",
        "Contributed to 20% improvement in on-time delivery through Agile methodology"
      ]
    },
    {
      title: "Software Development Intern",
      company: "Apollo Telehealth Services",
      period: "Feb 2021 – Jun 2021",
      location: "",
      technologies: ["Angular", "NestJS", "MongoDB", "WebRTC", "MongoDB Atlas Charts", "REST APIs", "TypeScript"],
      achievements: [
        "Built large-scale Angular frontend for 100+ clinicians treating 10,000+ patients",
        "Implemented video streaming using WebRTC for telehealth consultations",
        "Developed RESTful APIs using NestJS managing 1M+ records in MongoDB",
        "Achieved 30% increase in API response efficiency through modular architecture",
        "Created 12 data visualization charts using MongoDB Atlas Charts"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "C#", "C/C++", "Java", "JavaScript", "TypeScript", "MATLAB", "SQL"],
    "Web Technologies": ["Angular", ".NET Core Web API", "Node.js", "React", "NestJS", "Django", "Express.js", "REST", "HTML5", "CSS3"],
    "Databases": ["Microsoft SQL Server", "MySQL", "MongoDB", "BigQuery", "Redis"],
    "Cloud Technologies": ["Microsoft Azure", "AWS", "Google Cloud Platform"],
    "Developer Tools": ["Git", "Unity", "Docker", "Postman", "Azure DevOps", "Tableau", "Power BI", "VS Code", "PyCharm"],
    "Core Concepts": ["Data Structures & Algorithms", "Object Oriented Programming (OOP)", "System Design", "RESTful API Design", "Agile Methodologies", "Microservices Architecture", "CI/CD Pipelines", "Test-Driven Development (TDD)"]
  };

  const projects = [
    {
      title: "Dual-Model NLP Retrieval System",
      description: "Built an NLP-powered retrieval system using Python with Qdrant and Faiss to perform similarity search across vector databases generated from JSON files.",
      technologies: ["Python", "Qdrant", "Faiss", "Large Language Models (LLMs)", "Vector Databases", "APIs"],
      achievements: [
        "Designed a dual-model architecture for accurate semantic search and ranking",
        "Implemented efficient vectorization and indexing of JSON data",
        "Integrated Qdrant and Faiss to handle hybrid similarity queries with low latency",
        "Optimized search to return top relevant results in under 200ms for large datasets"
      ]
    },
    {
      title: "Self-Driving Surveillance Car",
      description: "Engineered a self-driving car prototype in Unity with obstacle avoidance capabilities achieving 95% accuracy in defined test cases.",
      technologies: ["Unity", "Python", "Flask", "Redis"],
      achievements: [
        "Built city environment simulation for autonomous navigation testing",
        "Developed Flask application for concurrent alert system supporting 1000+ users",
        "Implemented Redis for efficient task queuing and asynchronous processing",
        "Achieved 90% reduction in email delivery time for emergency notifications"
      ]
    },
    {
      title: "Campus E-Wallet",
      description: "Developed a digital wallet for college students inspired by PayPal, enabling secure transactions and simplified payments within the campus community.",
      technologies: ["Django", "React", "PostgreSQL", "REST APIs"],
      achievements: [
        "Designed a responsive React frontend with real-time transaction updates",
        "Implemented secure user authentication and authorization using Django",
        "Built REST APIs for wallet top-ups, transfers, and payment history"
      ]
    }
  ];

  const SkillIcon = ({ category }) => {
    if (category.includes('Programming')) return <Code className="w-5 h-5" />;
    if (category.includes('Database')) return <Database className="w-5 h-5" />;
    if (category.includes('Cloud')) return <Cloud className="w-5 h-5" />;
    return <Wrench className="w-5 h-5" />;
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-white mb-4">Sai Krishna Doultabad</h1>
              <p className="text-xl text-gray-300 mb-6">Software Engineer (Most Days)</p>
              <div className="flex flex-wrap justify-center gap-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Texas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(940) 343-1307</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>saikrishnadoultabad@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-semibold text-white mb-6">Professional Summary</h2>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <p className="text-gray-300 text-lg leading-relaxed">
                  I build full-stack applications, design scalable systems, and integrate AI/VR experiences. I’ve delivered high-performance, secure, and user-focused solutions using Python, .NET, Angular, React and SQL for organizations like Deloitte, Paycom, and the University of North Texas.

                  I’m passionate about modern frameworks, databases, and cloud platforms, and love turning ideas into real products. I enjoy tackling challenging problems and continuously learning new technologies.
                </p>
              </div>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-8">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-lg text-blue-400 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right text-gray-400 mt-2 lg:mt-0">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      {exp.location && (
                        <div className="flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm border border-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'education':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-8">Education</h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Master of Science in Computer Science</h3>
                    <p className="text-lg text-blue-400 font-medium">University of North Texas</p>
                  </div>
                  <div className="text-right text-gray-400 mt-2 lg:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Jan 2024 – Dec 2025</span>
                    </div>
                    <div className="text-green-400 font-semibold mt-1">GPA: 4.00</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">Bachelor of Technology</h3>
                    <p className="text-lg text-blue-400 font-medium">Indian Institute of Information Technology, Sri City (IIITS)</p>
                  </div>
                  <div className="text-right text-gray-400 mt-2 lg:mt-0">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Aug 2017 – May 2021</span>
                    </div>
                    <div className="text-green-400 font-semibold mt-1">GPA: 3.50</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-semibold text-white mb-8">Certifications</h2>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-white">Microsoft Azure Fundamentals (AZ-900)</h3>
                    <p className="text-gray-300 mt-2">
                      Certified with an 89% score, demonstrating expertise in cloud concepts and Azure services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'skills':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-8">Technical Skills</h2>
            <div className="grid gap-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                  <div className="flex items-center gap-3 mb-4">
                    <SkillIcon category={category} />
                    <h3 className="text-xl font-semibold text-white">{category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-8">Projects</h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors">
                  <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-lg">{project.description}</p>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm border border-blue-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <ChevronRight className="w-4 h-4 mt-1 text-blue-400 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-white mb-8">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-900 p-8 rounded-lg border border-gray-800">
                <p className="text-gray-300 text-lg mb-8 text-center">
                  I'm always interested in discussing new opportunities, innovative projects, and collaborations in software development and AI/VR.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <Mail className="w-6 h-6 text-blue-400" />
                    <div>
                      <h3 className="text-white font-semibold">Email</h3>
                      <a href="mailto:saikrishnadoultabad@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                        saikrishnadoultabad@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <Phone className="w-6 h-6 text-blue-400" />
                    <div>
                      <h3 className="text-white font-semibold">Phone</h3>
                      <a href="tel:(940) 343-1307" className="text-blue-400 hover:text-blue-300 transition-colors">
                        (940) 343-1307
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <Linkedin className="w-6 h-6 text-blue-400" />
                    <div>
                      <h3 className="text-white font-semibold">LinkedIn</h3>
                      <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                        Connect with me
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
                    <Github className="w-6 h-6 text-blue-400" />
                    <div>
                      <h3 className="text-white font-semibold">GitHub</h3>
                      <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                        View my projects
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Random Fact Popup */}
      {showFact && (
        <div className="fixed top-20 right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-md border-2 border-purple-400">
          <div className="flex items-start gap-2">
            <div>
              <h4 className="font-bold text-sm mb-1">Random Fact About Me!</h4>
              <p className="text-sm">{currentFact}</p>
            </div>
            <button
              onClick={() => setShowFact(false)}
              className="text-white hover:text-gray-200 ml-2"
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-2">
              <CodeXml className="w-8 h-8 text-blue-400" />
              <span className="text-xl font-bold text-white">SK Portfolio</span>
              <button
                onClick={getRandomFact}
                className="ml-4 px-3 py-1 bg-purple-600 hover:bg-purple-700 text-white text-sm rounded-full transition-colors"
                title="Get a random fact about me!"
              >
                🎲 Random Fact
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeTab === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-900 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors w-full text-left ${activeTab === item.id
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center text-gray-400">
            <p>© Sai Krishna Doultabad. Built with React</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;