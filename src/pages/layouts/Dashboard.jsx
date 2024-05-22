import React, { useState } from "react";
import { MdMenuBook, MdQuiz, FaBookReader } from "../../middlewares/icons";
import Chart from "react-apexcharts";
import ReactApexChart from "react-apexcharts";

const Dashboard = () => {
  const [data, setData] = useState({
    schedule_requests_by_gender: {
      series: [50, 50],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Home", "Femme"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    },
    members_by_gender: {
      series: [78, 22],
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: ["Homme", "Femme"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    },
    pastors_by_gender: {
      series: [45, 55],
      options: {
        chart: {
          width: 380,
          type: "donut",
        },
        labels: ["Homme", "Femme"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    },
    schedule_requests: {
      series: [
        {
          name: "Demande effectuées",
          data: [23, 56, 24, 57, 22, 42, 30],
        },
        {
          name: "Rendez-vous tenus",
          data: [10, 73, 11, 84, 9, 19, 27],
        },
        {
          name: "Rendez-vous Annulés",
          data: [36, 29, 37, 40, 15, 25, 53],
        },
      ],
      options: {
        title:{
          text:"Evaluation de demandes de rendez-vous"
        },
        xaxis:{
          title:{
            text:"Totale par Jours/Mois"
          },
          categories:['20 Mai 2024', '21 Mai 2024', '22 Mai 2024', '23 Mai 2024', '24 Mai 2024', '25 Mai 2024', '26 Mai 2024']
        },
        yaxis:{
          title:{
            text:"Totale rendez-vous"
          },
        },
        stroke: {
          curve: 'smooth', //'straight'
        },
      },
    },
  });
  return (
    <div className="student-dashboard">
      <div className="container">
        <div className="sd-left">
          <div className="item">
            <div className="i-inscribed">
              <p className="title t-3">Total rendez-vous demandés</p>
              <h3 className="t-2">100</h3>
            </div>
            <div className="i-inscribed">
              <p className="title t-3">Total membres inscrit</p>
              <h3 className="t-2">100</h3>
            </div>
            <div className="i-inscribed">
              <p className="title t-3">Total Pasteurs inscrit</p>
              <h3 className="t-2">10</h3>
            </div>
          </div>
          <div className="item">
            <div className="chart">
              <ReactApexChart
                options={data.schedule_requests_by_gender.options}
                series={data.schedule_requests_by_gender.series}
                type="pie"
                width="100%"
                height="100%"
              />
            </div>
            <div className="chart">
              <ReactApexChart
                options={data.members_by_gender.options}
                series={data.members_by_gender.series}
                type="pie"
                width="100%"
                height="100%"
              />
            </div>
            <div className="chart">
              <ReactApexChart
                options={data.pastors_by_gender.options}
                series={data.pastors_by_gender.series}
                type="donut"
                width="100%"
                height="100%"
              />
            </div>
          </div>
          <div className="item">
            <h3 className="title t-2">Vue générale de Rendez-vous</h3>
            <p className="title t-3">
              Dernier demande, <span>Mon 20 May at 9:32 PM</span>
            </p>
            <p className="title t-2">
              Evaluer par dates
            </p>
            <form className="row">
              <div className="input-div">
                <input
                  type="datetime-local"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  // {...register("start")}
                />
                <label htmlFor="start" className="label-form">
                  Start Date
                </label>
                {/* {errors.start && (
                  <span className="fade-in">{errors.start.message}</span>
                )} */}
              </div>
              <div className="input-div">
                <input
                  type="datetime-local"
                  className="input-form"
                  autoComplete="none"
                  placeholder=" "
                  // {...register("end")}
                />
                <label htmlFor="end" className="label-form">
                  End Date
                </label>
                {/* {errors.end && (
                  <span className="fade-in">{errors.end.message}</span>
                )} */}
              </div>
            </form>
            <div className="chart">
              <Chart
                options={data.schedule_requests.options}
                series={data.schedule_requests.series}
                type="line"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="sd-right">
          <h3 className="title t-2">Les rendez-vous du jour</h3>
          <div className="schedule-count">
            <div className="sc-item">
              <h3 className="title t-2">5</h3>
              <p className="title t-3">Au Total</p>
            </div>
            <div className="sc-item">
              <h3 className="title t-2">5</h3>
              <p className="title t-3">Tenus</p>
            </div>
            <div className="sc-item">
              <h3 className="title t-2">5</h3>
              <p className="title t-3">Transferés</p>
            </div>
            <div className="sc-item">
              <h3 className="title t-2">5</h3>
              <p className="title t-3">Annulés</p>
            </div>
          </div>
          <div className="schedule-timeline">
            <div className="st-item">
              <div className="st-status on-going"></div>
              <div className="st-details">
                <h3 className="title t-3">Pasteur Eric Ralph Kionga</h3>
                <span className="title t-4">Reçois Fr. Amisi Deffy</span>
              </div>
            </div>
            <div className="st-item">
              <div className="st-status on-pending"></div>
              <div className="st-details">
                <h3 className="title t-3">Pasteur Eric Ralph Kionga</h3>
                <span className="title t-4">En attente de recevoir</span>
              </div>
            </div>
            <div className="st-item">
              <div className="st-status on-going"></div>
              <div className="st-details">
                <h3 className="title t-3">Pasteur Eric Ralph Kionga</h3>
                <span className="title t-4">Reçois Fr. Amisi Deffy</span>
              </div>
            </div>
            <div className="st-item">
              <div className="st-status on-pending"></div>
              <div className="st-details">
                <h3 className="title t-3">Pasteur Eric Ralph Kionga</h3>
                <span className="title t-4">En attente de recevoir</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
