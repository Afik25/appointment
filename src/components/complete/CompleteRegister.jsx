import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowForwardIos, FaCamera } from "../../middlewares/icons";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import swal from "sweetalert";
import { useSelector } from "react-redux";
import useAxiosPrivate from "../../hooks/context/state/useAxiosPrivate";
import {
  isEmpty,
  wait,
  validationCompleteInscriptionStepOne,
  validationCompleteInscriptionStepTwo,
  validationCompleteInscriptionStepThree,
  validationCompleteInscriptionStepFour,
} from "../../utils/utils";

import countries from "../../middlewares/countries.json";
import useLogout from "../../hooks/context/state/useLogout";
import {
  completeRegister,
  completeActivation,
} from "../../services/authentication";

const CompleteRegister = () => {
  const axiosPrivate = useAxiosPrivate();
  const { t } = useTranslation();
  const [activeOption, setActiveOption] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orgaLogo, setOrgaLogo] = useState("");
  //
  const navigate = useNavigate();
  const logout = useLogout();
  const signOut = async () => {
    await logout();
    navigate("/login");
  };
  //
  const user = useSelector(
    (state) => state.setInitConf.initConnectedUser.connectedUserData
  );

  let validations = {
    0: validationCompleteInscriptionStepOne,
    1: validationCompleteInscriptionStepTwo,
    2: validationCompleteInscriptionStepThree,
    3: validationCompleteInscriptionStepFour,
  };
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(validations[activeOption]),
    defaultValues: {
      orga_id: user.userInfo?.organization?.id,
      orga_name: user.userInfo?.organization?.name,
      orga_country: user.userInfo?.organization?.country,
      entity_id: user.userInfo?.entity?.id,
      department_id: user.userInfo?.department?.id,
      department_title: user.userInfo?.department?.title,
      service_id: user.userInfo?.service?.id,
      service_title: user.userInfo?.service?.title,
      id: user.userInfo?.user_id,
      firstname: user.userInfo?.firstname,
      lastname: user.userInfo?.lastname,
      is_completed: true,
    },
  });
  const onSubmit = async (data) => {
    await wait(400);
    if (activeOption < 2) {
      setActiveOption((prev) => prev + 1);
    }
    if (activeOption === 2) {
      setIsSubmitting(!isSubmitting);
      completeRegister(axiosPrivate, data)
        .then((result) => {
          let response = result;
          if (response?.data?.status === 1) {
            setIsSubmitting(false);
            swal({
              title: "Registration completion",
              text: `${response?.data?.message}. Code : ${response?.data?.code}`,
              icon: "success",
              button: "Ok",
            }).then((_) => {
              swal("An activation's code was sent to provided number by SMS.");
              setActiveOption((prev) => prev + 1);
            });
          }
        })
        .catch((error) => {
          setIsSubmitting(false);
          if (!error?.response) {
            swal({
              title: "Oups!",
              text: "No server response!",
              icon: "warning",
              buttons: true,
            });
          } else {
            swal({
              title: "Process failed!",
              text: error?.response?.data?.message,
              icon: "warning",
              buttons: true,
            });
          }
        });
    }
    if (activeOption === 3) {
      setIsSubmitting(!isSubmitting);
      completeActivation(axiosPrivate, data)
        .then((result) => {
          let response = result;
          if (response?.data?.status === 1) {
            setIsSubmitting(false);
            swal({
              title: "Registration completion - Activation",
              text: response?.data?.message,
              icon: "success",
              button: "Ok",
            }).then((_) => {
              swal(
                "The system will disconnect you automatically in order to take care of update. Please get connected again !"
              );
              signOut();
            });
          }
        })
        .catch((error) => {
          setIsSubmitting(false);
          if (!error?.response) {
            swal({
              title: "Oups!",
              text: "No server response!",
              icon: "warning",
              buttons: true,
            });
          } else {
            swal({
              title: "Process failed!",
              text: error?.response?.data?.message,
              icon: "warning",
              buttons: true,
            });
          }
        });
    }
  };
  
  let fragments = {
    0: (
      <div className="steps">
        <p className="title t-2">Complete your Personal Informations</p>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("firstname")}
          />
          <label htmlFor="firstname" className="label-form">
            First name
          </label>
          {errors.firstname && (
            <span className="fade-in">{errors.firstname.message}</span>
          )}
        </div>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("lastname")}
          />
          <label htmlFor="lastname" className="label-form">
            Last name
          </label>
          {errors.lastname && (
            <span className="fade-in">{errors.lastname.message}</span>
          )}
        </div>
        <div className="input-div">
          <select className="input-form" {...register("gender")}>
            <option value="" style={{ color: "grey" }} selected>
              Gender
            </option>
            <option value="Female">Female</option>
            <option value="Male">Male</option>
          </select>
          {errors.gender && (
            <span className="fade-in">{errors.gender.message}</span>
          )}
        </div>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("telephone")}
          />
          <label htmlFor="telephone" className="label-form">
            Telephone
          </label>
          {errors.telephone && (
            <span className="fade-in">{errors.telephone.message}</span>
          )}
        </div>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("mail")}
          />
          <label htmlFor="mail" className="label-form">
            E-mail
          </label>
          {errors.mail && (
            <span className="fade-in">{errors.mail.message}</span>
          )}
        </div>
        <div className="input-div">
          <input
            type="date"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("birth")}
          />
          <label htmlFor="birth" className="label-form">
            Date of Birth
          </label>
          {errors.birth && (
            <span className="fade-in">{errors.birth.message}</span>
          )}
        </div>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("birth_location")}
          />
          <label htmlFor="birth_location" className="label-form">
            Birth location
          </label>
          {errors.birth_location && (
            <span className="fade-in">{errors.birth_location.message}</span>
          )}
        </div>
        <div className="input-div">
          <select className="input-form" {...register("nationality")}>
            <option value="" style={{ color: "grey" }}>
              Nationality
            </option>
            {isEmpty(countries) ? (
              <option value="" selected>
                No country available!
              </option>
            ) : (
              countries.map((item, i) => (
                <option key={i} value={item.name.official}>
                  {item.name.official}
                </option>
              ))
            )}
          </select>
          {errors.nationality && (
            <span className="fade-in">{errors.nationality.message}</span>
          )}
        </div>
      </div>
    ),
    1: (
      <div className="steps">
        <p className="title t-2">
          Complete informations about the Organization.
        </p>
        <div className="input-files">
          <div className="file-wrapper">
            <div className="image">
              {isEmpty(orgaLogo) ? (
                <p>Your logo here</p>
              ) : (
                // <img src={URL.createObjectURL(orgaLogo)} alt="orga-logo" />
                <p>Test render</p>
              )}
            </div>
            <div className="files">
              <input
                type="file"
                id="orga_logo"
                {...register("orga_logo", {
                  onChange: (e) => {
                    setOrgaLogo(e.target.files[0]);
                  },
                })}
                accept="image/png, image/PNG, image/jpg, image/JPG, image/jpeg, image/JPEG"
              />
              <label htmlFor="orga_logo" className="label">
                <div>
                  <FaCamera />
                  <p>Insert your logo</p>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("orga_name")}
          />
          <label htmlFor="orga_name" className="label-form">
            Organization's name
          </label>
          {errors.orga_name && (
            <span className="fade-in">{errors.orga_name.message}</span>
          )}
        </div>
        <div className="input-div">
          <select className="input-form" {...register("orga_type")}>
            <option value="" style={{ color: "grey" }} selected>
              Organization's type
            </option>
            <option value="boutique d'habillement">
              Boutique d'Habillement
            </option>
            <option value="bar">Bar</option>
            <option value="salon de coiffure">Salon de coiffure</option>
          </select>
          {errors.orga_type && (
            <span className="fade-in">{errors.orga_type.message}</span>
          )}
        </div>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("entity_telephone")}
          />
          <label htmlFor="entity_telephone" className="label-form">
            Organization's Telephone (General Direction)
          </label>
          {errors.entity_telephone && (
            <span className="fade-in">{errors.entity_telephone.message}</span>
          )}
        </div>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("entity_mail")}
          />
          <label htmlFor="entity_mail" className="label-form">
            Organization's e-mail (General Direction)
          </label>
          {errors.entity_mail && (
            <span className="fade-in">{errors.entity_mail.message}</span>
          )}
        </div>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("entity_address")}
          />
          <label htmlFor="entity_address" className="label-form">
            Organization's Physic Address (General Direction)
          </label>
          {errors.entity_address && (
            <span className="fade-in">{errors.entity_address.message}</span>
          )}
        </div>
        <div className="input-div">
          <select className="input-form" {...register("orga_country")}>
            <option value="" style={{ color: "grey" }}>
              Organization's country
            </option>
            {isEmpty(countries) ? (
              <option value="" selected>
                No country available!
              </option>
            ) : (
              countries.map((item, i) => (
                <option key={i} value={item.name.official}>
                  {item.name.official}
                </option>
              ))
            )}
          </select>
          {errors.orga_country && (
            <span className="fade-in">{errors.orga_country.message}</span>
          )}
        </div>
        <div className="input-div">
          <textarea
            type="text"
            className="input-textarea"
            autoComplete="none"
            placeholder=" "
            {...register("orga_description")}
          ></textarea>
          <label htmlFor="orga_description" className="label-form">
            Organization's Description
          </label>
          {errors.orga_description && (
            <span className="fade-in">{errors.orga_description.message}</span>
          )}
        </div>
      </div>
    ),
    2: (
      <div className="steps">
        <p className="title t-2">
          Complete informations about Department & Service for General Direction
        </p>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("department_title")}
          />
          <label htmlFor="department_title" className="label-form">
            Department Title (General Direction)
          </label>
          {errors.department_title && (
            <span className="fade-in">{errors.department_title.message}</span>
          )}
        </div>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("service_title")}
          />
          <label htmlFor="service_title" className="label-form">
            Service Title (Department)
          </label>
          {errors.service_title && (
            <span className="fade-in">{errors.service_title.message}</span>
          )}
        </div>
      </div>
    ),
    3: (
      <div className="steps">
        <p className="title t-2">
          By validate, a confirmation code will be sent by SMS to provided phone
          number at the first step (Complete your Personal Informations).
        </p>
        <div className="input-div">
          <input
            type="text"
            className="input-form"
            autoComplete="none"
            placeholder=" "
            {...register("confirmation_code")}
          />
          <label htmlFor="username" className="label-form">
            Confirmation code
          </label>
          {errors.confirmation_code && (
            <span className="fade-in">{errors.confirmation_code.message}</span>
          )}
        </div>
      </div>
    ),
  };
  return (
    <div className="complete-register">
      <div className="cr-head">
        <div className={activeOption === 0 ? "cr-tab active-tab" : "cr-tab"}>
          <span>Personal informations</span>
        </div>
        <div className="cr-tab">
          <MdOutlineArrowForwardIos />
        </div>
        <div className={activeOption === 1 ? "cr-tab active-tab" : "cr-tab"}>
          <span>Organization & Direction</span>
        </div>
        <div className="cr-tab">
          <MdOutlineArrowForwardIos />
        </div>
        <div className={activeOption === 2 ? "cr-tab active-tab" : "cr-tab"}>
          <span>Department & Service</span>
        </div>
        <div className="cr-tab">
          <MdOutlineArrowForwardIos />
        </div>
        <div className={activeOption === 3 ? "cr-tab active-tab" : "cr-tab"}>
          <span>Activation</span>
        </div>
      </div>
      <div className="cr-body">
        <form onSubmit={handleSubmit(onSubmit)}>
          {fragments[activeOption]}
          <div
            className={
              activeOption > 0 && activeOption < 3
                ? "buttons display-flex justify-content-space-between"
                : "buttons"
            }
          >
            {activeOption > 0 && activeOption < 3 && (
              <button
                type="button"
                className="button previous"
                onClick={() => setActiveOption((prev) => prev - 1)}
              >
                Previous
              </button>
            )}
            {isSubmitting ? (
              <div className="loader"></div>
            ) : (
              <button type="submit" className="button validate">
                {activeOption < 3 ? "Valider" : "Confirmer & Activer"}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CompleteRegister;
