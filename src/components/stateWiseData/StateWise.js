import React, { useState, useEffect } from "react";
import "./stateWise.css";

const StateWise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    // try {
    //   const res = await fetch(
    //     "https://api.rootnet.in/covid19-in/stats/latest"
    //   );
    //   const actualData = await res.json();
    //   setData(actualData.data.regional);
    // } catch (e) {
    //   console.log(e);
    // }

    try {
      const res = await fetch(
        "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
      );
      const actualData = await res.json();
      console.log(actualData.regionData);
      //   console.log(actualData.lastUpdatedAtApify);
      setData(actualData.regionData);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main_heading">
          <h1 className="mb-5 text-center">
            <span className="font-weight-bold">INDIA</span> COVID-19 Dashboard
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Active Cases</th>
                <th>Deaths</th>
                <th>New Deaths</th>
                <th>New Infected</th>
                <th>New Recovered</th>
                <th>Recovered</th>
                <th>Total Infected</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, ind) => {
                console.log(curElem);
                return (
                  <tr key={ind}>
                    <th>{curElem.region}</th>
                    <td>{curElem.activeCases}</td>
                    <td>{curElem.deceased}</td>
                    <td>{curElem.newDeceased}</td>
                    <td>{curElem.newInfected}</td>
                    <td>{curElem.newRecovered}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.totalInfected}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default StateWise;

//When the page will be reloaded, only then will the useEffect() will be called

//We will use async await function to fetch the API data
// actualData.data.regional[0]
// actualData.data.regional[ind].loc

//    <th>{curElem.loc}</th>
//   <th>{curElem.state}</th>
//   <td>{curElem.confirmed}</td>
//   <td>{curElem.recovered}</td>
//   <td>{curElem.deaths}</td>
//   <td>{curElem.active}</td>
//   <td>{curElem.lastupdatedtime}</td>

// <tr>
//                 <th>State</th>
//                 <th>Total Confirmed</th>
//                 <th>Recovered</th>
//                 <th>Deaths</th>
//                 <th>Active</th>
//               </tr>

/* <tr key={ind}>
                    <th>{curElem.loc}</th>
                    <td>{curElem.totalConfirmed}</td>
                    <td>{curElem.discharged}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.totalConfirmed}</td>
    </tr> */

/* <tbody>
          {data.map((curElem, ind) => {
            console.log(curElem);
            return (
  <tr key={ind}>
    <th>{curElem.regionData.region}</th>
    <td>{curElem.regionData.activeCases}</td>
    <td>{curElem.regionData.deceased}</td>
    <td>{curElem.regionData.newDeceased}</td>
    <td>{curElem.regionData.newInfected}</td>
    <td>{curElem.regionData.newRecovered}</td>
    <td>{curElem.regionData.recovered}</td>
    <td>{curElem.regionData.totalInfected}</td>
    <td>{curElem.lastUpdatedAtApify}</td>
  </tr>
            );
          })}
        </tbody> */

{
  /* <tr key={ind}>
                    <th>{curElem.regionData.region}</th>
                    <td>{curElem.regionData.activeCases}</td>
                    <td>{curElem.regionData.deceased}</td>
                    <td>{curElem.regionData.newDeceased}</td>
                    <td>{curElem.regionData.newInfected}</td>
                    <td>{curElem.regionData.newRecovered}</td>
                    <td>{curElem.regionData.recovered}</td>
                    <td>{curElem.regionData.totalInfected}</td>
                    <td>{curElem.lastUpdatedAtApify}</td>
                  </tr> */
}
