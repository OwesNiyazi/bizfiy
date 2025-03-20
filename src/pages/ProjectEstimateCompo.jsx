import ProjectEstimatorForm from "./ProjectEstimatorForm";

const ProjectEstimateCompo = () => {
  return (
    <div className="bg-[#01111f] text-white p-12 mt-12 sm:p-12">
      <nav className="mb-8 sm:mb-16 w-full">
        <h1
          className="text-4xl sm:text-4xl font-bold text-white"
          data-aos="fade-right"
        >
          Check Estimate of Your <span className="text-[#0E62A6]">Project</span>
        </h1>
      </nav>
      <div className="flex justify-between items-center px-16">
        <div className="h-1/3 w-1/3 ">
         <img src="/images/Estimator-Image.png" alt="" />
        </div>
        <ProjectEstimatorForm />
      </div>
    </div>
  );
};

export default ProjectEstimateCompo;
