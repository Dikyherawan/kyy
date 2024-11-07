import React from 'react';
import { FaBirthdayCake, FaMars, FaRulerVertical, FaWeight, FaRing, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const myInfos = [
  { 
    label: 'Tempat, Tanggal Lahir', 
    value: 'Bandung, 18 November 2002',
    icon: <FaBirthdayCake className="text-xl" />
  },
  { 
    label: 'Jenis Kelamin', 
    value: 'Laki-laki',
    icon: <FaMars className="text-xl" /> 
  },
  { 
    label: 'Tinggi Badan', 
    value: '171 cm',
    icon: <FaRulerVertical className="text-xl" />
  },
  { 
    label: 'Berat Badan', 
    value: '55 kg',
    icon: <FaWeight className="text-xl" />
  },
  { 
    label: 'Status Pernikahan', 
    value: 'Belum Menikah',
    icon: <FaRing className="text-xl" />
  },
  { 
    label: 'WhatsApp', 
    value: '+6289510159972',
    icon: <FaWhatsapp className="text-xl" />
  },
  { 
    label: 'Email', 
    value: 'dikyherawan@gmail.com',
    icon: <FaEnvelope className="text-xl" />
  }
];

const PersonalInfo = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 p-6">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-3xl font-bold text-center mb-8 flex justify-center items-center gap-2">
            <span className="text-primary">Personal</span> 
            <span className="text-secondary">Information</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {myInfos.map((info, index) => (
              <div 
                key={index} 
                className="group flex items-center gap-4 p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="text-primary">
                    {info.icon}
                  </span>
                </div>
                
                <div className="flex-1">
                  <p className="text-sm font-medium text-base-content/70">
                    {info.label}
                  </p>
                  <p className="font-semibold text-base-content">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;