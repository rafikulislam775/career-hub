import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJob, setAppledJobs] = useState([]);
  const [displayJob, setDisplayJob] = useState([]);

  const handleJobFilter = (filter) => {
    if (filter === "all") {
      setDisplayJob(appliedJob);
    } else if (filter === "remote") {
      const remoteJob = appliedJob.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJob(remoteJob);
    } else if (filter === "onsite") {
      const onsiteJob = appliedJob.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJob(onsiteJob);
    }
  };

  useEffect(() => {
    const storedJobIds = getStoredJobApplication();
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobIds.includes(job.id));
      // console.log(jobs, storedJobIds, jobsApplied);
      setAppledJobs(jobsApplied);
      setDisplayJob(jobsApplied);
    }

    // console.log(jobs, storedJobIds, jobsApplied);
  }, [jobs]);
  // console.log(jobs);
  return (
    <div>
      <h2>applied jobs {displayJob.length}</h2>
      <div>
        <details className="dropdown mb-32">
          <summary className="m-1 btn">Filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <a onClick={() => handleJobFilter("all")}>All</a>
            </li>
            <li>
              <a onClick={() => handleJobFilter("remote")}>remote</a>
            </li>
            <li>
              <a onClick={() => handleJobFilter("onsite")}>onsite</a>
            </li>
          </ul>
        </details>
      </div>
      <div>
        {displayJob.map((job) => (
          <li key={job.id}>{job.remote_or_onsite}</li>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
