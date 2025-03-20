import React from 'react';

const TeamMember = ({ name, role, linkedIn, avatar }) => (
  <div className="cursor-pointer p-6 bg-black/30 rounded-lg text-center border border-gray-600 transition-transform duration-300 ease-in-out hover:bg-white/10 hover:-translate-y-4 hover:shadow-lg hover:brightness-125">
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 border-2 border-gray-600 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-gray-600">
        {avatar}
      </div>
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-green-500 mb-4">{role}</p>
      <a 
        href={linkedIn} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-white/80 hover:text-white flex items-center gap-1 transition-colors"
      >
        LinkedIn
        <svg 
          className="w-4 h-4 rotate-45" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M14 5l7 7m0 0l-7 7m7-7H3" 
          />
        </svg>
      </a>
    </div>
  </div>
);

const TeamPage = () => {
  const teamMembers = [
    {
      name: "Liam Davis",
      role: "CEO",
      linkedIn: "#",
      avatar: (
        <div className="text-2xl">👨‍💼</div>
      )
    },
    {
      name: "Elliot Jones",
      role: "CCO",
      linkedIn: "#",
      avatar: (
        <div className="text-2xl">👨‍💼</div>
      )
    },
    {
      name: "Rob Smith",
      role: "CTO",
      linkedIn: "#",
      avatar: (
        <div className="text-2xl">👨‍💼</div>
      )
    },
    {
      name: "Bella Garcia",
      role: "Head of Content",
      linkedIn: "#",
      avatar: (
        <div className="text-2xl">👩‍💼</div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8 text-white">
      <h1 className="text-4xl font-bold mb-12">
        Meet the <span className="text-green-500">team</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            role={member.role}
            linkedIn={member.linkedIn}
            avatar={member.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
