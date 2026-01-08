import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login() {
  return (
    <div>
      <Head>
        <title>Login - World Travel</title>
        <meta name="description" content="Login to your World Travel account" />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div className="container-home bgimg4">
        <div className="row justify-content-center align-items-center content-mid">
          <div className="col-md-10 text-center">
            <h1 className="top-heading">Login</h1>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <main>
        <section className="login-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <fieldset>
                  <legend>Login Details</legend>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      id="username"
                      placeholder="Enter your username"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mt-3">
                    Login
                  </button>
                </fieldset>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
