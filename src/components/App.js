import React from "react";
import "../styles/App.css";
import Loader from "./Loader";

const [showLoader, setShowLoader] = React.useState(false);

const handleOnClick = () => {
   // Show loader when button clicked
   setShowLoader(true);

   // Fetch user data after 2 seconds
   setTimeout(() => {
      fetch(`${BASE_URL}/${userId}`)
         .then((response) => response.json())
         .then((data) => {
            setUserData(data);
            setShowLoader(false);
         });
   }, 2000);
};



const LoadingStatus = {
  NOT_STARTED: "NOT_STARTED",
  IN_PROGRESS: "IN_PROGRESS",
  SUCCESS: "SUCCESS",
};

const App = () => {
  const BASE_URL = "https://content.newtonschool.co/v1/pr/main/users";
  const [userId, setUserId] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(LoadingStatus.NOT_STARTED);
  const [userData, setUserData] = React.useState({
    id: "",
    email: "",
    name: "",
    phone: "",
    webiste: "",
  });

  const handleOnClick = () => {};

  const onChangeHandler = (event) => {
    setUserId(event.target.value);
  };

  return (
    <div id="main">
      <label htmlFor="number">Enter an id for the user between 1 to 100</label>
      <input
        type="number"
        value={userId}
        onChange={onChangeHandler}
        id="input"
        min={1}
        max={10}
      />
      <button id="btn" onClick={handleOnClick}>
        Get User
      </button>

    <div id="data">
   {showLoader ? (
      <Loader />
   ) : (
      <>
         <h1>{userData.name}</h1>
         <h4 id="id">{userData.id}</h4>
         <h4 id="email">{userData.email}</h4>
         <h4 id="phone">{userData.phone}</h4>
         <h4 id="website">{userData.website}</h4>
      </>
   )}
</div>
    </div>
  );
};

export default App;
