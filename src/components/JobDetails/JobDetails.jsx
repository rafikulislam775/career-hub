import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { saveJobApplication } from "../../utility/localStorage";
const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();

  const job = jobs.find((job) => job.id === parseInt(id));
  console.log(id, job);
  const handleApplyJob = () => {
    saveJobApplication(id);
    toast("you have successfully applied");
  };
  return (
    <div>
      <h2>Job Details of :{id} </h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3">
          <h1>Details coming soon.....</h1>
        </div>
        <div className="border">
          <button onClick={handleApplyJob} className="btn  btn-primary w-full">
            Apply Now
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
