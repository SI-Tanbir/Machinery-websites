// components/Certificates.js
import React from 'react';
const certificatesData = [
  {
    id: 1,
    title: 'AWS Certified Solutions Architect',
    icon: 'https://dummyimage.com/150x150/000/fff&text=AWS+Certified',
    description: 'Expertise in designing distributed systems on AWS.',
    link: 'https://example.com/aws-certificate',
  },
  {
    id: 2,
    title: 'Google Cloud Professional Data Engineer',
    icon: 'https://dummyimage.com/150x150/000/fff&text=GCP+Certified',
    description: 'Proficient in data engineering on Google Cloud Platform.',
    link: 'https://example.com/gcp-certificate',
  },
  {
    id: 3,
    title: 'Microsoft Certified: Azure Administrator',
    icon: 'https://dummyimage.com/150x150/000/fff&text=Azure+Certified',
    description: 'Skilled in managing Azure cloud services.',
    link: 'https://example.com/azure-certificate',
  },
];

const Certificates = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Certificates and Licenses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificatesData.map((cert) => (
          <div
            key={cert.id}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <figure className="px-10 pt-10">
              <img src={cert.icon} alt={cert.title} className="w-16 h-16" />
            </figure>
            <div className="card-body items-center text-center">
              <h3 className="card-title text-xl font-semibold">{cert.title}</h3>
              <p className="text-gray-600">{cert.description}</p>
              <div className="card-actions mt-4">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  View Certificate
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;