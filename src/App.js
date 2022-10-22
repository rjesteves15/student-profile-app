import React, {useState} from "react";
import Header from "./component/header/Header";
import Output from "./component/output/Output";
import Footer from "./component/footer/Footer";
import Registration from "./component/registration/Registration";


const App = () => {

  const [data, setData] = useState([]);
  const [file, setFile] = useState();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([]);


  //Search Data Functionality
  const handleSearch = () => {
    if (search.length !== 0) {
      const found = data.filter((info) => info.firstName.includes(search));
      setSearchData(found);
      if (found.length === 0) {
        window.alert("NOT FOUND");
      }
    }
    if (search.length === 0) {
      window.alert("NOT FOUND");
    }
  };
  
  //Detele Functionality
  const handleDelete = (id) => {
      setData(data.filter((data) => data.id !== id))
  }

  return (
    <div className="mainContainer">
      <Header search={search} setSearch={setSearch} data={data} searchData={searchData} setSearchData={setSearchData} handleSearch={handleSearch}/>
      <div className="section">
          <div className="leftContainer">
             <Registration data={data} setData={setData} file={file} setFile={setFile}/>
          </div>
          <div className="rightContainer">
             <Output data={data} file={file} handleDelete={handleDelete} searchData={searchData} setSearch={setSearch}/>
          </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;