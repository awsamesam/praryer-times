//Css
import "./App.css";

// import
import Card1 from "./Card";
import { useEffect, useState } from "react";

//axios
import axios from "axios";


type City = {
  lat: number;
  long: number;
};
type Cities = {
  [key: string]: City;
};
type PrayerTimes = {
  Fajr?: string;
  Dhuhr?: string;
  Asr?: string;
  Maghrib?: string;
  Isha?: string;
};

const cities:Cities = {
    غزة: { lat: 31.5, long: 34.466 },
    نابلس: { lat: 32.2211, long: 35.2544 },
    القدس: { lat: 31.7683, long: 35.2137 },
    حيفا: { lat: 32.794, long: 34.9896 },
    يافا: { lat: 32.054, long: 34.7518 },
    عكا: { lat: 32.9236, long: 35.0818 },
   طولكرم: { lat: 32.3104, long: 35.0286 },
  };

function App() {
  const [city, setCity] = useState<string>("غزة");

  

  function handleClickChangeLatLong(event:React.ChangeEvent<HTMLSelectElement>) {
    setCity(event.target.value);
   

  }

  const [prayerTimes, setPrayerTimes] = useState<PrayerTimes>({});

  //api
  useEffect(() => {
     const latLong = cities[city];
    axios
      .get(
        `https://api.aladhan.com/v1/timings?latitude=${latLong.lat}&longitude=${latLong.long}&method=3`,
        {
          params: {
            postId: 5,
          },
        },
      )
      .then((response) => {
        const timings = response.data.data.timings;
        setPrayerTimes(timings);
        console.log("*********");
        console.log(latLong.lat, latLong.long);
      })
      .catch((error) => {
        alert(error);
      });
  }, [city]);

  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          minWidth: "100%",
          display: "flex",
          background: `
          linear-gradient(
            135deg,
  #1e1b4b,
#312e81,
#4338ca,
#0f172a
        `,
          direction: "rtl",

          textAlign: "center",
          alignItems: "center",
        }}
      >
        {/* All item */}
        <div style={{ height: "100%", width: "100%", marginBottom: "50px" }}>
          <h1 style={{ fontSize: "50px", color: "#fbbf24" }}>مواقيت الصلاة </h1>
          <h2 style={{ fontSize: "40px", marginBottom: "0px",color:"#c7d2fe" }}>المدينة</h2>
          <select
            style={{
              backgroundColor: "#1e293b",
              color:"white",
              border: "1px solid #475569",
              borderRadius: "8px",
              padding: "5px",
              width: "100px",
              height: "30px",
            }}
            onChange={handleClickChangeLatLong}
          >
            <option>غزة</option>
            <option>نابلس</option>
            <option>القدس</option>
            <option>حيفا</option>
            <option>يافا</option>
            <option>عكا</option>
            <option>طولكرم</option>
          </select>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "20px",
              marginTop: "30px",
            }}
          >
            <Card1
              name={"اذان الفجر"}
              time={"الساعة"}
              time2={prayerTimes.Fajr}
            />
            <Card1
              name={"اذان الضهر"}
              time={"الساعة"}
              time2={prayerTimes.Dhuhr}
            />
            <Card1
              name={"اذان العصر"}
              time={"الساعة"}
              time2={prayerTimes.Asr}
            />
            <Card1
              name={"اذان المغرب"}
              time={"الساعة"}
              time2={prayerTimes.Maghrib}
            />
            <Card1
              name={"اذان العشاء"}
              time={"الساعة"}
              time2={prayerTimes.Isha}
            />
          </div>
        </div>
        {/*======== All item =======*/}
      </div>
    </>
  );
}

export default App;
