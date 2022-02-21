import React, { useState, useEffect } from "react";
import "./stateWise.css";

const StateWise = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      // const res = await fetch(
      //   "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
      // );

      const res = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
      const actualData = await res.json();
      // console.log(actualData.regional);
      console.log(actualData.data.regional);
      setData(actualData.data.regional);
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
            {/* <tbody>
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
            </tbody> */}
          </table>
        </div>
      </div>
    </>
  );
};

export default StateWise;
///////////////////////////////////////////////////////////////////////////////////

// import React, { useState, useEffect } from "react";
// import "./stateWise.css";

// const StateWise = () => {
//   const [data, setData] = useState([]);
//   const getCovidData = async() => {
//     try{
//       const res = await fetch('url');
//       const actualData = await res.json();

//       setData(actualData.regionData);
//     }
//     catch(e){console.log(e)}

//   }
//   useEffect(() => {getCovidData();},[]);

// return (
//   <>
//     <div className="container-fluid mt-5">
//       <div className="main_heading">
//         <h1 className="mb-5 text-center">
//           <span className="font-weight-bold">INDIA</span> COVID-19 Dashboard
//         </h1>
//       </div>
//       <div className="table-responsive">
//         <table className="table table-hover">
//           <thead className="thead-dark">
//             <tr>
//               <th>State</th>
//               <th>Active Cases</th>
//               <th>Deaths</th>
//               <th>New Deaths</th>
//               <th>New Infected</th>
//               <th>New Recovered</th>
//               <th>Recovered</th>
//               <th>Total Infected</th>
//             </tr>
//           </thead>
//           <tbody>
//             {
//               data.map((curElem, ind) => {
//                 return(
//                   <tr key={ind}>

//                   </tr>
//                 );
//               })
//             }
//           </tbody>
//         </table>
//       </div>
//     </div>
//   </>
// );

// export default StateWise;
