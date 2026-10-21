import React from "react";
// import { useParams } from "react-router-dom";
// import { PROJECTS } from "../data/projects";
import DetailsProject from "../components/DetailsProject";
import AboutProject from "../components/AboutDetails";
import BestProject from "../components/BestProjects";
import InterestForm from "../components/InterestForm";
import RelatedProductsSection from "../components/RelatedProductsSection";

const ProjectDetails = () => {
  // const { id } = useParams();
  // const project = PROJECTS.find((p) => p.id === Number(id));

  // if (!project) {
  //   return <div className="p-10 text-center text-red-500">Project not found</div>;
  // }

  return (
    <div>
      {/* Pass project data to your components */}
      {/* <DetailsProject project={project} />
      <AboutProject project={project} /> */}
      <DetailsProject/>
      <AboutProject />
      <BestProject />
      <InterestForm />
      <RelatedProductsSection/>
    </div>
  );
};

export default ProjectDetails;
