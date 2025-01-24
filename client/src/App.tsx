import Separator from "./components/Separator"
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import MainArea from "./layout/MainArea";
import Navigation from "./layout/Navigation";

function App() {

  return (
      <div className="block">
        <Header />
        <Navigation />
        <div className="relative top-0 h-96">
        </div>
        <div className="relative top-0 h-12">
        </div>
        <MainArea />
        <Separator />
        <Footer />
      </div>
  )
}

export default App
