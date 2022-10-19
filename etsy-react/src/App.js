import './App.css';
import BannerIndex from './components/banner/BannerIndex';
import NavIndex from './components/navBar/NavIndex';
import SectionOneIndex from './components/sectionOne/SectionOneIndex';
import Data from './data.json'

function App() {
  return (
    <div className="App">
      <NavIndex navdata={Data.header.nav}/>
      <BannerIndex bannerData={Data.main}/>
      <SectionOneIndex sectionOneData={Data.main.sectionOne}/>
    </div>
  );
}

export default App;
