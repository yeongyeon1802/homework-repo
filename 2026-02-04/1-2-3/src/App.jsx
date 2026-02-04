import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100vh",
          padding: "32px",
          background: "linear-gradient(45deg, #F0F9FF 0%, #94B3C7 100%)",
        }}
      >
        <Header />
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
