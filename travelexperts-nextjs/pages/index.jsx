import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import TabContent from "../components/TabContent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>World Travel - Home</title>
        <meta
          name="description"
          content="World Travel - Your gateway to unforgettable vacations"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div className="bgimg">
        <div className="row justify-content-center align-items-center content-mid">
          <div className="col-md-10 text-center">
            <h1 className="top-heading mb-4">Travel Packages</h1>
            <h4 className="sub-heading mb-8">
              Where is your dream vacation? Explore our{" "}
              <a href="/vacation">Vacation Package</a> and share!
            </h4>
          </div>
        </div>
      </div>

      <SearchBar />
      <TabContent />
      <Footer />
    </div>
  );
}
