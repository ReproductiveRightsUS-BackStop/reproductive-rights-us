import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header"
import MainArea from "./layout/MainArea"


function App() {
 

  return (
    <>
      <div className="box-border block p-12">
        <p className="text-purple text-3xl font-bold">Your Reproductive rights</p>
        <p className="text-purple text-sm font-bold">This is salvaging from the internet archives</p>
        <Header />
        <MainArea />
        <Footer />
      </div>
      
    </>
  )
}

export default App
