import MainTitle from "../../components/Header/MainTitle/MainTitle";
import WelcomeText from "../../components/Header/WelcomeText/WelcomeText";
import SearchBlock from "../../components/Header/Search/SearchBlock";
import MiddleBody from "../../components/Body/MiddleBody/MiddleBody";
import Establishments from "../../components/Body/Establishments/Establishments";




function HomeTitle() {
  return (
    <div>
        
      <MainTitle />
      <WelcomeText />
      <SearchBlock />
      <MiddleBody />
      <Establishments />
       

    </div>
  )
}
export default HomeTitle