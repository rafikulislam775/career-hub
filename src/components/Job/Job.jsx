import { IoLocation } from "react-icons/io5";
import { BsCurrencyYen } from "react-icons/bs";
const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    location,
    remote_or_onsite,
    job_type,
    salary,
  } = job;
  return (
    <div>
      <div className="card card-compact  bg-base-100 shadow-xl">
        <figure>
          <img src={logo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2  mr-4  font-extrabold border rounded border-[#7E90fE] text-[#7E90fE]">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90fE] text-[#7E90fE]">
              {job_type}
            </button>
          </div>
          <div className="flex gap-2 my-4">
            <h2 className="flex gap-2">
              <IoLocation className="text-2xl"></IoLocation>
              {location}
            </h2>
            <h2 className="flex gap-2">
              <BsCurrencyYen className="text-2xl"></BsCurrencyYen>
              {salary}
            </h2>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
