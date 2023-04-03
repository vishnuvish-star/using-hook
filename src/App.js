import "../src/index.css";
import { useState } from "react";
import { useEffect } from "react";

const link = "https://course-api.com/react-tabs-project";

const App = () => {
  // initial state
  const [start, setStart] = useState(true);
  // data fetching state
  const [getData, setGetData] = useState([]);

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
    <h2>Loading..!!</h2>;
  }
  // component return
  return (
    <>
      <section className="section">
        <div>
          {getData.map((val, index) => {
            {
              console.log(val);
            }
            return (
              <div key={index}>
                <h2>{val[1]}</h2>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default App;
