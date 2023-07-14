import ProfileCard from "./ProfileCard";
import AllexImage from "./images/alexa.png";
import CorntanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">

      <div>Personal Digital Assistance

      </div>
      <div>
        <ProfileCard image = {AllexImage} title = "Abraham Nkomo" handler="@AbrahamNkomo"/>
        <ProfileCard image = {CorntanaImage} title = "Sozabile Nkomo" handler="@SozabileNkomo" />
        <ProfileCard image = {SiriImage} title = "Vusa Nkomo" handler="@VusaNkomo" />
      </div>


    </div>
  );
}

export default App;
