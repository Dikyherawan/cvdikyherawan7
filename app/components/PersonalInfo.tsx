import React from 'react';
import { FaBirthdayCake, FaMars, FaRulerVertical, FaWeight, FaRing, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

// Define interfaces for type safety
interface InfoItem {
  label: string;
  value: string;
  icon: React.ReactNode;
}

interface InfoCardProps {
  info: InfoItem;
}

const myInfos: InfoItem[] = [
  { 
    label: 'Tempat, Tanggal Lahir', 
    value: 'Bandung, 18 November 2002',
    icon: <FaBirthdayCake className="text-xl md:text-2xl" />
  },
  { 
    label: 'Jenis Kelamin', 
    value: 'Laki-laki',
    icon: <FaMars className="text-xl md:text-2xl" /> 
  },
  { 
    label: 'Tinggi Badan', 
    value: '171 cm',
    icon: <FaRulerVertical className="text-xl md:text-2xl" />
  },
  { 
    label: 'Berat Badan', 
    value: '55 kg',
    icon: <FaWeight className="text-xl md:text-2xl" />
  },
  { 
    label: 'Status Pernikahan', 
    value: 'Belum Menikah',
    icon: <FaRing className="text-xl md:text-2xl" />
  },
  { 
    label: 'WhatsApp', 
    value: '+6289510159972',
    icon: <FaWhatsapp className="text-xl md:text-2xl" />
  },
  { 
    label: 'Email', 
    value: 'dikyherawan@gmail.com',
    icon: <FaEnvelope className="text-xl md:text-2xl" />
  }
];

const PersonalInfo: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
          <div className="card-body p-4 sm:p-6 md:p-8">
            {/* Title */}
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold inline-flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="text-primary">Personal</span> 
                <span className="text-secondary">Information</span>
              </h2>
            </div>
            
            {/* Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-6">
              {myInfos.map((info, index) => (
                <InfoCard key={index} info={info} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Separate InfoCard component with proper typing
const InfoCard: React.FC<InfoCardProps> = ({ info }) => {
  return (
    <div className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-base-200 rounded-lg md:rounded-xl hover:bg-base-300 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md">
      {/* Icon Container */}
      <div className="min-w-[2.5rem] w-10 h-10 md:min-w-[3rem] md:w-12 md:h-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
        <span className="text-primary">
          {info.icon}
        </span>
      </div>
      
      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <p className="text-xs md:text-sm font-medium text-base-content/70 mb-0.5">
          {info.label}
        </p>
        <p className="text-sm md:text-base font-semibold text-base-content truncate">
          {info.value}
        </p>
      </div>
    </div>
  );
};

export default PersonalInfo;