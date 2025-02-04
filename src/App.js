import React, { useState } from "react";
import "./App.scss";

// creating Data
const formData = {
  name: "",
  gender: "",
  email: "",
  age: "",
  degree: "",
  yearsOfExp: "",
  lookingFor: "",
  currentCTC: "",
  expectedCTC: "",
};

const App = () => {
  // crating data state
  const [data, setData] = useState(formData);
  const [tab, setTab] = useState("profile");
  const [show, setShow] = useState(false);
  const [newData, setNewData] = useState({});

  console.log(data);

  // handleInputChange
  const handleChange = (field, value) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  // Submit handling
  const handleProfileSubmit = (e) => {
    e.preventDefault();
    setTab("edu");
  };
  const handleEduBack = () => {
    setTab("profile");
  };
  const handleEduSubmit = () => {
    setTab("final");
  };
  const handleFinalBack = () => {
    setTab("edu");
  };
  const handleFinalSubmit = (e) => {
    e.preventDefault();
    setNewData(data);
    setTab("profile");
    setData(formData);

    setShow(true);
  };

  return (
    <div className="form-container">
      <div className="form-container-title">Multistep form</div>
      <div className="form-container-tabs">
        <div
          className={`form-container-tabs-item ${
            tab === "profile" && "active-tab"
          }`}
        >
          Profile
        </div>
        <div
          className={`form-container-tabs-item ${
            tab === "edu" && "active-tab"
          }`}
        >
          Education
        </div>
        <div
          className={`form-container-tabs-item ${
            tab === "final" && "active-tab"
          }`}
        >
          Details
        </div>
      </div>
      <div className="form-container-form">
        <form>
          {tab === "profile" && (
            <div className="form-section">
              <div className="form-section-title">Profile</div>
              <div className="form-section-item">
                <strong className="text-input-label">Name</strong>
                <input
                  className="text-input"
                  placeholder="Enter your name"
                  required
                  type="text"
                  value={data.name}
                  id="Name"
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="form-section-item">
                <strong className="text-input-label">Email</strong>
                <input
                  type="email"
                  id="Email"
                  placeholder="Eg. prat..@21.com"
                  name="Email"
                  value={data.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className="form-section-item">
                <strong>Gender</strong>
                <span className="form-section-gender-item">
                  <input
                    type="radio"
                    name="Gender"
                    id="Male"
                    value="Male"
                    checked={data.gender === "Male"}
                    onChange={(e) => {
                      handleChange("gender", e.target.value);
                    }}
                  />
                  <label className="radio-label" htmlFor="Male">
                    Male
                  </label>
                </span>
                <span className="form-section-gender-item">
                  <input
                    style={{ marginLeft: 14 }}
                    type="radio"
                    name="Gender"
                    id="Female"
                    value="Female"
                    checked={data.gender === "Female"}
                    onChange={(e) => {
                      handleChange("gender", e.target.value);
                    }}
                  />
                  <label className="radio-label" htmlFor="Female">
                    Female
                  </label>
                </span>
              </div>
              <div className="form-section-item">
                <strong>Age</strong>
                <input
                  placeholder="Enter your age"
                  type="number"
                  id="Age"
                  value={data.age}
                  onChange={(e) => {
                    handleChange("age", e.target.value);
                  }}
                  className="text-input"
                />
              </div>
              <button
                type="submit"
                disabled={
                  !data.name || !data.email || !data.gender || !data.age
                }
                onClick={handleProfileSubmit}
              >
                Next
              </button>
            </div>
          )}

          {tab === "edu" && (
            <div className="form-section">
              <div className="form-section-title">Education</div>
              <div className="form-section-item">
                <strong className="text-input-label">Degree</strong>
                <select
                  name="Degree"
                  id="Degree"
                  value={data.degree}
                  onChange={(e) => handleChange("degree", e.target.value)}
                >
                  <option value="" disabled>
                    Select Education
                  </option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="PHD">PHD</option>
                </select>
              </div>
              <div className="form-section-item">
                <strong className="text-input-label">
                  Years of Experience
                </strong>
                <select
                  name="YoE"
                  id="YoE"
                  value={data.yearsOfExp}
                  onChange={(e) => handleChange("yearsOfExp", e.target.value)}
                >
                  <option value="" disabled>
                    Select YoE
                  </option>

                  <option value="0-2">0-2</option>
                  <option value="3-5">3-5</option>
                  <option value="5+">5+</option>
                </select>
              </div>
              <div className="form-section-buttons">
                <button onClick={handleEduBack}>Back</button>
                &nbsp; &nbsp; &nbsp;
                <button
                  type="submit"
                  disabled={!data.yearsOfExp || !data.degree}
                  onClick={handleEduSubmit}
                >
                  Next
                </button>
              </div>
            </div>
          )}
          {tab === "final" && (
            <div className="form-section">
              <div className="form-section-title">Details</div>

              <div className="form-section-item">
                <strong className="text-input-label">Looking for</strong>
                <input
                  className="text-input"
                  placeholder="Eg. Full Stack Developer"
                  required
                  type="text"
                  value={data.lookingFor}
                  id="lookingFor"
                  onChange={(e) => handleChange("lookingFor", e.target.value)}
                />
              </div>
              <div className="form-section-item">
                <strong>
                  Current CTC {"("}in Lakhs per Annum{")"}
                </strong>
                <input
                  placeholder="Eg. 10"
                  type="number"
                  id="CurrenctCTC"
                  value={data.currentCTC}
                  onChange={(e) => {
                    handleChange("currentCTC", e.target.value);
                  }}
                />
              </div>
              <div className="form-section-item">
                <strong>
                  Expected CTC {"("}in Lakhs per Annum{")"}
                </strong>
                <input
                  placeholder="Eg. 12"
                  type="number"
                  id="expectedCTC"
                  value={data.expectedCTC}
                  onChange={(e) => {
                    handleChange("expectedCTC", e.target.value);
                  }}
                />
              </div>
              <div className="form-section-buttons">
                <button onClick={handleFinalBack}>Back</button>
                &nbsp; &nbsp; &nbsp;
                <button
                  type="submit"
                  disabled={
                    !data.lookingFor || !data.yearsOfExp || !data.degree
                  }
                  onClick={handleFinalSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
      {show && (
        <div className="show-data">
          <div className="show-data-item">{newData.name}</div>
          <div className="show-data-item">{newData.gender}</div>
          <div className="show-data-item">{newData.email}</div>
          <div className="show-data-item">{newData.age}</div>
          <div className="show-data-item">{newData.degree}</div>
          <div className="show-data-item">{newData.yearsOfExp}</div>
          <div className="show-data-item">{newData.lookingFor}</div>
          <div className="show-data-item">{newData.currentCTC}</div>
          <div className="show-data-item">{newData.expectedCTC}</div>
        </div>
      )}
    </div>
  );
};

export default App;
