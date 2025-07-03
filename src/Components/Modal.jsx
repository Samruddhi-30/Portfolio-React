import React, { useState, useEffect } from 'react';
import { X, Star, Award, Calendar, ExternalLink } from 'lucide-react';

const ModalTutorial = () => {
  // Step 1: State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Sample skill data
  const skillsData = {
    languages: {
      title: "Programming Languages",
      color: "bg-blue-600",
      icon: "💻",
      description: "Proficient in multiple programming languages with strong problem-solving abilities and clean code practices.",
      skills: [
        { name: "JavaScript", level: 90, experience: "3 years", projects: 15, description: "Frontend and backend development" },
        { name: "Python", level: 85, experience: "2 years", projects: 8, description: "Data science and web development" },
        { name: "Java", level: 80, experience: "2 years", projects: 6, description: "Enterprise applications" },
        { name: "TypeScript", level: 75, experience: "1 year", projects: 4, description: "Type-safe JavaScript development" }
      ],
      certifications: [
        { name: "JavaScript Algorithms and Data Structures", date: "2023", issuer: "FreeCodeCamp" },
        { name: "Python for Data Science", date: "2023", issuer: "Coursera" }
      ],
      projects: [
        { name: "E-commerce Platform", tech: "JavaScript, React", status: "Completed", link: "#" },
        { name: "Data Analysis Tool", tech: "Python, Pandas", status: "In Progress", link: "#" },
        { name: "Mobile App Backend", tech: "Java, Spring", status: "Completed", link: "#" }
      ]
    },
    webdev: {
      title: "Web Development",
      color: "bg-green-600",
      icon: "🌐",
      description: "Full-stack web development with modern frameworks and best practices for scalable applications.",
      skills: [
        { name: "React", level: 95, experience: "3 years", projects: 20, description: "Component-based UI development" },
        { name: "Node.js", level: 88, experience: "2.5 years", projects: 12, description: "Server-side JavaScript" },
        { name: "CSS/SASS", level: 85, experience: "3 years", projects: 25, description: "Styling and responsive design" },
        { name: "Next.js", level: 80, experience: "1.5 years", projects: 8, description: "Full-stack React framework" }
      ],
      certifications: [
        { name: "React Developer Certification", date: "2023", issuer: "Meta" },
        { name: "AWS Cloud Practitioner", date: "2024", issuer: "Amazon" }
      ],
      projects: [
        { name: "Portfolio Website", tech: "React, Tailwind", status: "Completed", link: "#" },
        { name: "Task Management App", tech: "Next.js, MongoDB", status: "Completed", link: "#" },
        { name: "Real-time Chat App", tech: "Node.js, Socket.io", status: "In Progress", link: "#" }
      ]
    },
    aiml: {
      title: "AI & Machine Learning",
      color: "bg-purple-600",
      icon: "🤖",
      description: "Experience in machine learning algorithms, neural networks, and data analysis for intelligent solutions.",
      skills: [
        { name: "Machine Learning", level: 82, experience: "2 years", projects: 10, description: "Supervised and unsupervised learning" },
        { name: "Deep Learning", level: 78, experience: "1.5 years", projects: 6, description: "Neural networks and CNNs" },
        { name: "TensorFlow", level: 75, experience: "1.5 years", projects: 8, description: "ML framework for production" },
        { name: "Data Science", level: 85, experience: "2 years", projects: 12, description: "Data analysis and visualization" }
      ],
      certifications: [
        { name: "Machine Learning Specialization", date: "2023", issuer: "Stanford/Coursera" },
        { name: "Deep Learning Specialization", date: "2024", issuer: "DeepLearning.AI" }
      ],
      projects: [
        { name: "Image Classification Model", tech: "TensorFlow, CNN", status: "Completed", link: "#" },
        { name: "Stock Price Predictor", tech: "Python, LSTM", status: "Completed", link: "#" },
        { name: "Sentiment Analysis Tool", tech: "NLP, scikit-learn", status: "In Progress", link: "#" }
      ]
    }
  };

  // Step 2: Functions to control modal
  const openModal = (skillKey) => {
    setSelectedSkill(skillKey);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSkill(null);
  };

  // Step 3: Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    // Add event listener when modal is open
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    }

    // Cleanup function
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  // Step 4: Skill Card Component
  const SkillCard = ({ skillKey, skill }) => (
    <div 
      className={`${skill.color} rounded-xl p-6 text-white cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl transform group`}
      onClick={() => openModal(skillKey)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="text-3xl">{skill.icon}</div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ExternalLink size={20} />
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
      <p className="text-sm opacity-90 line-clamp-2">{skill.description}</p>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs opacity-75">{skill.skills.length} skills</span>
        <span className="text-xs opacity-75">{skill.projects.length} projects</span>
      </div>
    </div>
  );

  // Step 5: Modal Component
  const Modal = ({ skill, onClose }) => (
    // Modal Overlay - this creates the darkened background
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose} // Click on overlay to close
    >
      {/* Modal Content - this is the actual modal */}
      <div 
        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between rounded-t-xl">
          <div className="flex items-center space-x-3">
            <div className="text-2xl">{skill.icon}</div>
            <h2 className="text-2xl font-bold text-gray-800">{skill.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Overview Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3 text-gray-700">Overview</h3>
            <p className="text-gray-600 leading-relaxed">{skill.description}</p>
          </div>

          {/* Skills Grid */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">Technical Skills</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {skill.skills.map((s, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">{s.name}</span>
                    <span className="text-sm text-gray-500">{s.experience}</span>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full transition-all duration-1000 ${skill.color}`}
                      style={{ width: `${s.level}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{s.level}% proficiency</span>
                    <span>{s.projects} projects</span>
                  </div>
                  
                  <p className="text-sm text-gray-600">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications and Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Certifications */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
                <Award className="mr-2" size={20} />
                Certifications
              </h3>
              <div className="space-y-3">
                {skill.certifications.map((cert, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-gray-800">{cert.name}</h4>
                        <p className="text-sm text-gray-600">{cert.issuer}</p>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar size={14} className="mr-1" />
                        {cert.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-700 flex items-center">
                <Star className="mr-2" size={20} />
                Featured Projects
              </h3>
              <div className="space-y-3">
                {skill.projects.map((project, idx) => (
                  <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-800">{project.name}</h4>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        project.status === 'Completed' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{project.tech}</p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center">
                      View Project <ExternalLink size={12} className="ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6 rounded-b-xl">
          <div className="flex justify-end space-x-3">
            <button 
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              Close
            </button>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">My Skills</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on any skill card to view detailed information in a modal overlay. 
            This tutorial shows you how to implement modals step by step.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([key, skill]) => (
            <SkillCard key={key} skillKey={key} skill={skill} />
          ))}
        </div>

        {/* Implementation Notes */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-bold mb-4 text-gray-800">💡 How This Works</h2>
          <div className="space-y-4 text-sm text-gray-600">
            <p><strong>Step 1:</strong> State management with <code>useState</code> to control modal visibility</p>
            <p><strong>Step 2:</strong> Modal overlay with <code>fixed inset-0</code> positioning</p>
            <p><strong>Step 3:</strong> Click handlers to open/close modal</p>
            <p><strong>Step 4:</strong> Escape key handling with <code>useEffect</code></p>
            <p><strong>Step 5:</strong> Prevent body scroll when modal is open</p>
            <p><strong>Step 6:</strong> Click outside modal to close (event bubbling)</p>
          </div>
        </div>
      </div>

      {/* Render Modal */}
      {isModalOpen && selectedSkill && (
        <Modal 
          skill={skillsData[selectedSkill]} 
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ModalTutorial;