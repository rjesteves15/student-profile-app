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
  // const [editData, setEditdata] = useState({
  //       id: e.target[0].id,
  //       firstName: e.target[1].firstName,
  //       lastName: e.target[2].lastName,
  //       email: e.target[3].email,
  //       contact: e.target[4].contact,
  //       courses: e.target[5].courses,
  //       gender: e.target[6].gender,
  //       gender: e.target[7].gender,
  //       file: e.target[8].file,

  // })

  const handleDelete = (id) => {
      setData(data.filter((data) => data.id !== id))
  }

  return (
    <div className="mainContainer">
      <Header search={search} setSearch={setSearch} data={data} searchData={searchData} setSearchData={setSearchData}/>
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