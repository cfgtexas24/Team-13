import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Code as ReactIcon, 
  Server as NodeIcon, 
  Database as DataScienceIcon, 
  Brain as MachineLearningIcon, 
  Paintbrush as DesignIcon 
} from 'lucide-react';

const rooms = [
  { name: 'React', icon: ReactIcon },
  { name: 'Node.js', icon: NodeIcon },
  { name: 'Data Science', icon: DataScienceIcon },
  { name: 'Machine Learning', icon: MachineLearningIcon },
  { name: 'UI/UX Design', icon: DesignIcon }
];

const CandidateCommunity = () => {
  return (
    <div className="p-8 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Community Rooms
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {rooms.map(({ name, icon: Icon }) => (
          <Link key={name} to={`/candidate/community/${name}`} className="block">
            <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 h-full flex flex-col justify-between">
              <div className="flex items-center justify-center mb-4">
                <Icon size={48} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-center text-gray-700 mb-2">{name}</h3>
              <p className="text-sm text-gray-500 text-center">Join the discussion on {name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CandidateCommunity;