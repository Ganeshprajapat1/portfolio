import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import { Toaster } from "react-hot-toast";

const App = () => {
  return(
    <Layout>
      <Toaster position="top-right" />
      <Home />
    </Layout>
  );
}

export default App