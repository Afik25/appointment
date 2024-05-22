import React from "react";
import {
  FaPlus,
  FaRegFileAlt,
  FaFileSignature,
  FaRegFile,
  FaFileInvoice,
} from "../../middlewares/icons";

const Appointment = () => {
  return (
    <div className="appointments">
      <div className="appointment-head">
        <h3 className="title t-2">Appointments</h3>
        <div className="appointment-filter">
          <div className="af-item">
            <div className="input-div">
              <input
                type="datetime-local"
                className="input-form"
                autoComplete="none"
                placeholder=" "
                // {...register("username")}
              />
              <label htmlFor="username" className="label-form">
                Start Date
              </label>
              {/* {errors.username && (
                    <span className="fade-in">{errors.username.message}</span>
                  )} */}
            </div>
            <div className="input-div">
              <input
                type="datetime-local"
                className="input-form"
                autoComplete="none"
                placeholder=" "
                // {...register("username")}
              />
              <label htmlFor="username" className="label-form">
                End Date
              </label>
              {/* {errors.username && (
                    <span className="fade-in">{errors.username.message}</span>
                  )} */}
            </div>
            <button className="button">Search</button>
          </div>
          <div className="af-item">
            <div className="input-div">
              <input
                type="text"
                className="input-form"
                autoComplete="none"
                placeholder=" "
                // {...register("username")}
              />
              <label htmlFor="username" className="label-form">
                Type member's name
              </label>
              {/* {errors.username && (
                    <span className="fade-in">{errors.username.message}</span>
                  )} */}
            </div>
            <button className="button">Search</button>
          </div>
        </div>
      </div>
      <div className="appointment-body">
        <div className="appointment-container">
          <div className="tc-head">
            <h3 className="title t-3">Demandes de Rendez-vous</h3>
            <span>5</span>
          </div>
          <div className="tc-content">
            <div className="appointment-item">
              <h3 className="title t-3">appointment title</h3>
              <p className="title t-4">appointment Description</p>
              <div className="appointment-icons-progress">
                <FaRegFileAlt className="icon" />
              </div>
              <p className="title t-5">
                From Wed 15 May at 7:36 AM to Thursday 16 May at 7:36
              </p>
              <div className="appointment-assignation">
                <img
                  src={process.env.PUBLIC_URL + "/user.png"}
                  alt="appointment-user"
                />
                <h3 className="title t-3">Pasteur Eric Ralph Kionga</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="appointment-container">
          <div className="tc-head">
            <h3 className="title t-3">Rendez-vous annulés</h3>
            <span>5</span>
          </div>
          <div className="tc-content">
            <div className="appointment-item">
              <h3 className="title t-3">appointment title</h3>
              <p className="title t-4">appointment Description</p>
              <div className="appointment-icons-progress">
                <FaRegFileAlt className="icon" />
                <FaFileSignature className="icon" />
              </div>
              <p className="title t-5">
                From Wed 15 May at 7:36 AM to Thursday 16 May at 7:36
              </p>
              <div className="appointment-assignation">
                <img
                  src={process.env.PUBLIC_URL + "/user.png"}
                  alt="appointment-user"
                />
                <h3 className="title t-3">Pasteur Eric Ralph Kionga</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="appointment-container">
          <div className="tc-head">
            <h3 className="title t-3">Rendez-vous tenus</h3>
            <span>5</span>
          </div>
          <div className="tc-content">
            <div className="appointment-item">
              <h3 className="title t-3">appointment title</h3>
              <p className="title t-4">appointment Description</p>
              <div className="appointment-icons-progress">
                <FaRegFileAlt className="icon" />
                <FaFileSignature className="icon" />
                <FaRegFile className="icon" />
              </div>
              <p className="title t-5">
                From Wed 15 May at 7:36 AM to Thursday 16 May at 7:36
              </p>
              <div className="appointment-assignation">
                <img
                  src={process.env.PUBLIC_URL + "/user.png"}
                  alt="appointment-user"
                />
                <h3 className="title t-3">Pasteur Eric Ralph Kionga</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="appointment-container">
          <div className="tc-head">
            <h3 className="title t-3">Rendez-vous en cours</h3>
            <span>5</span>
          </div>
          <div className="tc-content">
            <div className="appointment-item">
              <h3 className="title t-3">appointment title</h3>
              <p className="title t-4">appointment Description</p>
              <div className="appointment-icons-progress">
                <FaRegFileAlt className="icon" />
                <FaFileSignature className="icon" />
                <FaRegFile className="icon" />
                <FaFileInvoice className="icon" />
              </div>
              <p className="title t-5">
                From Wed 15 May at 7:36 AM to Thursday 16 May at 7:36
              </p>
              <div className="appointment-assignation">
                <img
                  src={process.env.PUBLIC_URL + "/user.png"}
                  alt="appointment-user"
                />
                <h3 className="title t-3">Pasteur Eric Ralph Kionga</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
