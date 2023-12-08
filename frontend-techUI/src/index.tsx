import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LoginUserForm from "./components/LoginUserForm";
import SignupUserForm from "./components/SignupUserForm";
import UserGetInfoForm from "./components/GetUserInfoForm";
import EditUserInfoForm from "./components/UpdateUserInfoForm";
import GetFarmsInfoWidget from "./components/GetFarmsInfoWidget";
import CreateFarmWidget from "./components/CreateFarmWidget";
import GetConcreteFarmInfoWidget from "./components/GetConcreteFarmInfoWidget";
import UpdateFarmWidget from "./components/UpdateFarmWidget";
import HoneyInfoWidget from "./components/GetHoneyInfoWidget";
import RequestInfoWidget from "./components/GetRequestInfoWidget";
import CreateRequestInfoWidget from "./components/CreateRequestInfoWidget";
import UpdateRequestWidget from "./components/UpdateRequestWidget";
import GetConferenceWidget from "./components/GetConferenceWidget";
import CreateConferenceWidget from "./components/CreateConferenceWidget";
import GetConcreteConferenceWidget from "./components/GetConcreteConferenceWidget";
import UpdateConferenceInfoWidget from "./components/UpdateConferenceInfoWidget";
import GetParticipantConferenceWidget from "./components/GetParticipantConferenceWidget";
import UpdateParticipantConferenceWidget from "./components/UpdateParticipantConferenceWidget";
import CreateReviewWidget from "./components/CreateReviewWidget";
import GetReviewWidget from "./components/GetReviewWidget";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/*<App />*/}
      < LoginUserForm/>
      < SignupUserForm/>
      < UserGetInfoForm/>
      <EditUserInfoForm />
      <GetFarmsInfoWidget/>
      <GetConcreteFarmInfoWidget/>
      <CreateFarmWidget/>
      <UpdateFarmWidget/>
      < HoneyInfoWidget />
      < RequestInfoWidget />
      < CreateRequestInfoWidget/>
      < UpdateRequestWidget />
        < GetConferenceWidget />
        < CreateConferenceWidget />
      < GetConcreteConferenceWidget />
        < UpdateConferenceInfoWidget />
      < GetParticipantConferenceWidget/>
      < UpdateParticipantConferenceWidget />
      < GetReviewWidget />
      < CreateReviewWidget />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
