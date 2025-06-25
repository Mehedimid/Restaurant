import Banner from "./components/home/banner/Banner";
import Footer from "./components/home/footer/Footer";
import HomePage from "./components/home/Home";


export default function Home() {
  return (
    <div className="max-w-[1900px] mx-auto">
      <Banner />

        <HomePage />

      <Footer />
    </div>
  );
}
