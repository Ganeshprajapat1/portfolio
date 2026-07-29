import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import { Toaster } from "react-hot-toast";

const App = () => {
  return(
    <Layout>
      <Home />
    </Layout>
  );
}

export default App