import React, {useState} from "react";
import Header from "./component/header/Header";
import Output from "./component/output/Output";
import Footer from "./component/footer/Footer";
import Registration from "./component/registration/Registration";


const App = () => {

  const [data, setData] = useState([]);
  const [file, setFile] = useState();

  return (
    <div className="mainContainer">
      <Header />
      <div className="section">
          <div className="leftContainer">
             <Registration data={data} setData={setData} file={file} setFile={setFile}/>
          </div>
          <div className="rightContainer">
             <Output data={data} file={file}/>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;