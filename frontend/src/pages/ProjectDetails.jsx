import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsProject from "../components/DetailsProject";
import AboutProject from "../components/AboutDetails";
import BestProject from "../components/BestProjects";
import InterestForm from "../components/InterestForm";
import RelatedProductsSection from "../components/RelatedProductsSection";
import apiRequest from "../services/api.js";

const ProjectDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      try {
        const data = await apiRequest(`/properties/${id}`);
        setProperty(data.data?.item || null);
      } catch (error) {
        console.error(error);
        setProperty(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) loadProject();
  }, [id]);

  if (loading) {
    return <div className="p-10 text-center text-slate-600">Loading project details...</div>;
  }

  if (!property) {
    return <div className="p-10 text-center text-red-500">Project not found</div>;
  }

  return (
    <div>
      <DetailsProject project={property} />
      <AboutProject project={property} />
      <BestProject />
      <InterestForm />
      <RelatedProductsSection />
    </div>
  );
};

export default ProjectDetails;
