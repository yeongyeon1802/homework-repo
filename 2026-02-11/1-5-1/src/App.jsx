import { LanguageProvider } from "./contexts/LanguageContext";
import MainLayout from "./components/layout/MainLayout";
import Translate from "./components/Translate";

function App() {
  return (
    <>
      <LanguageProvider>
        <MainLayout>
          <Translate></Translate>
        </MainLayout>
      </LanguageProvider>
    </>
  );
}

export default App;
