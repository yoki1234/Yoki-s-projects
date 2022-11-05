import './App.css';
import BannerIndex from './components/banner/BannerIndex';
import NavIndex from './components/navBar/NavIndex';
import SectionOneIndex from './components/sectionOne/SectionOneIndex';
import SectionTwo from './components/sectionTwo/SectionTwo';
import Data from './data.json'

function App() {
  return (
    <div className="App">
      <NavIndex navdata={Data.header.nav}/>
      <BannerIndex bannerData={Data.main}/>
      <SectionOneIndex sectionOneData={Data.main.sectionOne}/>
      <SectionTwo sectionTwoData={Data.main.sectionTwo}/>
    </div>
  );
}

export default App;
