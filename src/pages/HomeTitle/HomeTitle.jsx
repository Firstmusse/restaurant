import MainTitle from "../../components/Header/MainTitle/MainTitle";
import WelcomeText from "../../components/Header/WelcomeText/WelcomeText";
import SearchBlock from "../../components/Header/Search/SearchBlock";
import MiddleBody from "../../components/Body/MiddleBody/MiddleBody";
import Establishments from "../../components/Body/Establishments/Establishments";
import Navigation from "../../components/Header/Navigation/Navigation";



function HomeTitle() {
  return (
    <div>
      <Navigation />
      <MainTitle />
      <WelcomeText />
      <SearchBlock />
      <MiddleBody />
      <Establishments />
       

    </div>
  )
}
export default HomeTitle