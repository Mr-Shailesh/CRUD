import axios from "axios";
import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const [data, setData] = useState("");
  const [info, setInfo] = useState("");
  const [images, setImages] = useState("");
  const [videos, setVideos] = useState("");
  const [loading, setLoading]= useState(false)

  const fetchData = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getData = async () => {
    await axios
      .get("https://reqres.in/api/users")
      .then((res) => {
        console.log(res.data.data);
        setInfo(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getImage = async () => {
    await axios
      .get("https://pixabay.com/api/?key=29073580-b7134d28013b081c833bce56c")
      .then((res) => {
        console.log(res.data.hits);
        setImages(res.data.hits);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getVideo = async () => {
    setLoading(true)
    await axios
      .get(
        "https://pixabay.com/api/videos/?key=29073580-b7134d28013b081c833bce56c"
      )
      .then((res) => {
        console.log("=====>",res.data.hits);
        setVideos(res.data.hits.videos);
        console.log("videos =>",res.data.hits.videos);
        setLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setLoading(true)
      });
  };
console.log("videos =>",videos);
  // const deleteHandler = (id) => {
  //   console.log("Deletee")
  //   setData((data) =>  data.filter((i) => i.id !== id))
  // }

  // console.log(info);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Fetch Data</h1>
      <button className="btn" onClick={() => fetchData()}>
        Fetch Data
      </button>
      <button className="btn" onClick={() => getData()}>
        Get Data
      </button>
      <button className="btn" onClick={() => getImage()}>
        Get Image
      </button>
      <button className="btn" onClick={() => getVideo()}>
        Get Video
      </button>
      <div className="App">
        {data && data.map((data) => <Card key={data.id} data={data} />)}
      </div>
      <div className="App">
        {info &&
          info.map((info) => (
            <div key={info.id}>
              <img src={info.avatar} alt="" />
              <h5>{info.first_name}</h5> <h6>{info.last_name}</h6>
              <p>{info.email}</p>
            </div>
          ))}
      </div>
      <div className="App">
        {images &&
          images.map((image) => (
            <div key={image.id}>
              <img src={image.previewURL} alt="" />
            </div>
          ))}
      </div>
      <div className="App">
        {loading && <p>Loading....</p>}
        {videos &&
          videos.map((video) => (
            <div key={video.id}>

              {/* <img src={video.url} alt="" /> */}
             <p>{video.user_id} </p>
            </div>
          ))}
      </div>
    </>
  );
}

export default App;
