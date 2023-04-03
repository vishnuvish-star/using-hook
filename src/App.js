import { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./index.css";
const link = "https://course-api.com/react-tabs-project";

const App = () => {
  // initial state
  const [start, setStart] = useState(true);
  // data fetching state
  const [getData, setGetData] = useState([]);
  // value state
  const [value, setValue] = useState(0);

  // fetching data using async
  const fetchData = async () => {
    const response = await fetch(link);
    const data = await response.json();
    // console.log(data);
    setStart(false);
    setGetData(data);
    // console.log(getData);
  };

  // useEffect
  useEffect(() => {
    fetchData();
  }, []);

  if (start) {
    return <div className="loading">Loading...</div>;
  }
  // destructure
  const { title, duties, dates } = getData[value];
  // component return
  return (
    <article className="container">
      <div className="title">Tabs</div>
      <div className="underline"></div>
      <div></div>
      <div className="title">
        <h1>Tabs</h1>
        <div className="underline"></div>
      </div>
      <div className="btn-container">
        {getData.map((val, index) => {
          return (
            <>
              <button
                key={index}
                className={`job-btn   ${value === index ? "active-btn" : null}`}
                onClick={() => {
                  setValue(index);
                }}
              >
                {val.company}
              </button>
            </>
          );
        })}
      </div>
      <div className="">
        <h3 className="job-info">{title}</h3>
        <h4 className="job-date">{dates}</h4>
        <div className="job-desc">
          {duties.map((description) => {
            return (
              <>
                <p key={uuidv4()}>{description}</p>
              </>
            );
          })}
        </div>
      </div>
    </article>
  );
};
export default App;
