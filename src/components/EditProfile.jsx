

import { useState, useEffect } from "react";



import UserCard from "./UserCard";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";





const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [about, setAbout] = useState(user?.about || "");
  const [skills, setSkills] = useState(user?.skills || []);
  const [photourl, setPhoto] = useState(user?.photourl || "");
  const [location, setLocation] = useState(user?.location || "");
  const [education, setEducation] = useState(user?.education || "");
    const [experience, setExperience] = useState(user?.experience || "");
const [company, setCompany] = useState(user?.company || "");
const [github, setGithub] = useState(user?.github || "");
const [linkedin, setLinkedin] = useState(user?.linkedin || "");
const [portfolio, setPortfolio] = useState(user?.portfolio || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  
useEffect(() => {
  if (user) {
    setFirstName(user.firstName || "");
    setLastName(user.lastName || "");
    setAge(user.age || "");
    setGender(user.gender || "");
    setAbout(user.about || "");
    setSkills(user.skills || []);
    setPhoto(user.photourl || "");


    setLocation(user.location || "");
    setEducation(user.education || "");
    setExperience(user.experience || "");
    setCompany(user.company || "");
    setGithub(user.github || "");
    setLinkedin(user.linkedin || "");
    setPortfolio(user.portfolio || "");
  }
}, [user]);



  

const saveProfile = async () => {
  try {
     setLoading(true);
    setError("");
    setSuccess("");
    const res = await axios.patch(
      BASE_URL + "/profile/edit",
      {
        firstName,
        lastName,
        photourl,
        age,
        gender,
        about,
        skills,
          location,
      education,
      company,
      github,
      linkedin,
      portfolio,
      experience,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res.data);
    
     dispatch(addUser(res?.data?.data));
    setSuccess("Your profile has been updated successfully!");

    setTimeout(() => {
      setSuccess("");
    }, 3000);

    
  } catch (err) {
    setError(err?.response?.data || err.message);
  }
  finally {
    setLoading(false);
  }
};

  return (
    <div className="flex flex-col lg:flex-row justify-center items-start gap-10 my-10 px-8">
      {/* Edit Form */}
      <div className="card bg-base-300 w-96 shadow-xl rounded-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-2xl">
            Edit Profile
          </h2>

          {/* First Name */}
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>

          {/* Last Name */}
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>

          {/* Photo URL */}
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              value={photourl}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </label>

          {/* Age */}
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">Age</span>
            </div>
            <input
              type="number"
              className="input input-bordered"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>

          {/* Gender */}
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">Gender</span>
            </div>
            <select
              className="select select-bordered"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="others">Others</option>
            </select>
          </label>

          {/* Skills */}
          <label className="form-control w-full my-2">
            <div className="label">
              <span className="label-text">Skills</span>
            </div>
            <input
              type="text"
              className="input input-bordered"
              placeholder="React, Node.js, MongoDB"
              value={Array.isArray(skills) ? skills.join(", ") : skills}
              onChange={(e) =>
                setSkills(
                  e.target.value
                    .split(",")
                    .map((skill) => skill.trim())
                    .filter(Boolean)
                )
              }
            />
          </label>

          {/* About */}
          <label className="form-control w-full my-1">
            <div className="label">
              <span className="label-text">About</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-16"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            />
          </label>



          <label className="form-control w-full my-1">
  <div className="label">
    <span className="label-text">Location</span>
  </div>
  <input
    type="text"
    className="input input-bordered w-full"
    value={location}
    onChange={(e) => setLocation(e.target.value)}
  />
</label>

<label className="form-control w-full my-1">
  <div className="label">
    <span className="label-text">Education</span>
  </div>
  <input
    type="text"
    className="input input-bordered w-full"
    value={education}
    onChange={(e) => setEducation(e.target.value)}
  />
</label>



<label className="form-control w-full my-1">
  <div className="label">
    <span className="label-text">Experience</span>
  </div>
  <input
    type="text"
    className="input input-bordered w-full"
    value={experience}
    onChange={(x) => setExperience(x.target.value)}
  />
</label>

<label className="form-control w-full my-1">
  <div className="label">
    <span className="label-text">Company</span>
  </div>
  <input
    type="text"
    className="input input-bordered w-full"
    value={company}
    onChange={(e) => setCompany(e.target.value)}
  />
</label>

<label className="form-control w-full my-1">
  <div className="label">
    <span className="label-text">GitHub</span>
  </div>
  <input
    type="url"
    className="input input-bordered w-full"
    value={github}
    onChange={(e) => setGithub(e.target.value)}
  />
</label>

<label className="form-control w-full my-1">
  <div className="label">
    <span className="label-text">LinkedIn</span>
  </div>
  <input
    type="url"
    className="input input-bordered w-full"
    value={linkedin}
    onChange={(e) => setLinkedin(e.target.value)}
  />
</label>

<label className="form-control w-full my-1">
  <div className="label">
    <span className="label-text">Portfolio</span>
  </div>
  <input
    type="url"
    className="input input-bordered w-full"
    value={portfolio}
    onChange={(e) => setPortfolio(e.target.value)}
  />
</label>

          


          {error && (
            <p className="text-red-500 text-center">{error}</p>
          )}
          {success && (
  <div className="alert alert-success mt-4">
    <span>{success}</span>
  </div>
)}

          {/* <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary"  onClick={saveProfile}>
              Save Profile
            </button>
          </div> */}
          <div className="card-actions justify-center mt-4">
  <button
    className={`btn ${
      success
        ? "btn-success"
        : loading
        ? "btn-neutral"
        : "btn-primary"
    }`}
    onClick={saveProfile}
    disabled={loading}
  >
    {loading
      ? "Saving..."
      : success
      ? "Saved ✓"
      : "Save Profile"}
  </button>
</div>
        </div>
      </div>

      {/* Live Preview Card */}
       <div className="self-start">
    <UserCard
      user={{
        firstName,
        lastName,
        age,
        gender,
        about,
        photourl,
        skills,
          location,
      education,
      company,
      github,
      linkedin,
      portfolio,
      experience
      }}
    />
</div>
    
    </div>
  );
};

export default EditProfile;