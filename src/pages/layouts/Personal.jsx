import React from "react";
import {
  BsPinAngle,
  RiAttachment2,
  FaPlus,
} from "../../middlewares/icons";

const Personal = () => {
  return (
    <div className="personals">
      <div className="head">
        <div className="left">
          <h2 className="title t-1">Peoples (10)</h2>
          <p className="title t-3">Personnel management.</p>
        </div>
        <div className="right">
          <button
            type="button"
            className="button"
          >
            <FaPlus />
            &nbsp; New Personnel
          </button>
        </div>
      </div>
      <div className="body">
        <form className="filter">
          <div className="input-div">
            <input
              type="text"
              className="input-form"
              autoComplete="none"
              placeholder=" "
              // {...register("prename")}
            />
            <label htmlFor="prename" className="label-form">
              Research peoples by names...
            </label>
            {/* {errors.prename && (
              <span className="fade-in">{errors.prename.message}</span>
            )} */}
          </div>
          <div className="input-div">
            <select className="input-select">
              <option value="">Research peoples by position...</option>
              <option value="signer">Pastors</option>
              <option value="in-copy">Ministers</option>
            </select>
          </div>
        </form>
        <div className="container">
          <div className="item">
            <div className="up">
              <BsPinAngle className="icon" />
            </div>
            <div className="content">
              <img
                src={process.env.PUBLIC_URL + "/user.png"}
                className="image"
              />
              <h2 className="title t-1">Eric Ralph Kionga</h2>
              <p className="title t-2">Pastor</p>
              <p className="title t-3">(243) 81 xx xx xxx</p>
              <p className="title t-4">eric.ralph.kionga@gmail.com</p>
            </div>
          </div>
          <div className="item">
            <div className="up">
              <RiAttachment2 className="icon" />
            </div>
            <div className="content">
              <img
                src={process.env.PUBLIC_URL + "/user.png"}
                className="image"
              />
              <h2 className="title t-1">Eric Ralph Kionga</h2>
              <p className="title t-2">Minister</p>
              <p className="title t-3">(243) 81 xx xx xxx</p>
              <p className="title t-4">eric.ralph.kionga@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;
