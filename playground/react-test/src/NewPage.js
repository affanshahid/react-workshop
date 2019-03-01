import { Header } from "./components/Header";
import Footer from "./components/Footer";
import { withLayout } from "./components/Layout";

function SomePage() {
  return (
    <div>
      <p>Affan</p>
    </div>
  );
}

export default withLayout(SomePage);