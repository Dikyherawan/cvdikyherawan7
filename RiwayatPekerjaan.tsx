import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

interface Job {
  title: string;
  company: string;
  period: string;
  description: string;
}

const jobData: Job[] = [
  {
    title: "Software Engineer",
    company: "Tech Solutions Inc.",
    period: "Jan 2020 - Present",
    description: "Developing and maintaining web applications using React and Node.js."
  },
  {
    title: "Junior Developer",
    company: "StartUp Innovations",
    period: "Jun 2018 - Dec 2019",
    description: "Worked on frontend development using HTML, CSS, and JavaScript."
  },
  {
    title: "Intern",
    company: "Digital Creations",
    period: "Jan 2018 - May 2018",
    description: "Assisted in various web development projects and learned industry best practices."
  }
];

const RiwayatPekerjaan: React.FC = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-base-100 to-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-base-content mb-4">Riwayat Pekerjaan</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {jobData.map((job, index) => (
            <div key={index} className="mb-8 relative pl-8">
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <FaBriefcase className="text-primary-content text-sm" />
              </div>
              
              {/* Timeline line */}
              {index !== jobData.length - 1 && (
                <div className="absolute left-[15px] top-8 w-[2px] h-full bg-primary opacity-30"></div>
              )}

              {/* Content */}
              <div className="bg-base-100 rounded-lg shadow-xl p-6 ml-6 transition-shadow duration-300 hover:shadow-2xl">
                <h3 className="text-xl font-bold text-base-content mb-2">{job.title}</h3>
                <p className="text-primary font-semibold mb-1">{job.company}</p>
                <p className="text-base-content/70 text-sm mb-3">{job.period}</p>
                <p className="text-base-content/80">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiwayatPekerjaan;