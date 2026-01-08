import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Customer() {
  return (
    <div>
      <Head>
        <title>Register - World Travel</title>
        <meta
          name="description"
          content="Create your account and start planning your next adventure"
        />
      </Head>

      <Navbar />

      {/* Hero Section */}
      <div className="container-home bgimg2">
        <div className="row justify-content-center align-items-center content-mid">
          <div className="col-md-10 text-center">
            <h1 className="top-heading mb-4">Join us to Explore</h1>
          </div>
        </div>
      </div>

      {/* Registration Form */}
      <div className="container register-container">
        <p className="sub-heading mb-5">
          Create your account and start planning your next adventure
        </p>
        <form className="registerform">
          {/* Personal Info Section */}
          <div className="form-section">
            <h3 className="form-section-title">Personal Information</h3>
            <div className="form-row">
              <div className="form-col">
                <label htmlFor="first-name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  placeholder="Jolly"
                />
              </div>
              <div className="form-col">
                <label htmlFor="last-name" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  placeholder="Warner"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Birthday</label>
              <div className="date-select">
                <select name="birthday_month" className="form-select">
                  <option value="0" selected>
                    Month
                  </option>
                  <option value="1">Jan</option>
                  <option value="2">Feb</option>
                  <option value="3">Mar</option>
                  <option value="4">Apr</option>
                  <option value="5">May</option>
                  <option value="6">Jun</option>
                  <option value="7">Jul</option>
                  <option value="8">Aug</option>
                  <option value="9">Sep</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                </select>
                <select name="birthday_day" className="form-select">
                  <option value="0" selected>
                    Day
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">...</option>
                </select>
                <select name="birthday_year" className="form-select">
                  <option value="0" selected>
                    Year
                  </option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                </select>
              </div>
            </div>

            <div className="form-group mt-3">
              <label className="form-label">Gender</label>
              <div className="gender-options">
                <label className="gender-option">
                  <input type="radio" name="gender" value="female" />
                  Female
                </label>
                <label className="gender-option">
                  <input type="radio" name="gender" value="male" />
                  Male
                </label>
              </div>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="form-section">
            <h3 className="form-section-title">Contact Information</h3>
            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="form-control"
                placeholder="123-456-7890"
              />
            </div>

            <div className="form-group mt-3">
              <label className="form-label">Address</label>
              <div className="address-group">
                <div className="address-group-full">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Street Address"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Province"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postal Code"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Account Info Section */}
          <div className="form-section">
            <h3 className="form-section-title">Account Information</h3>
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="name@example.com"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="userid" className="form-label">
                User ID
              </label>
              <input
                type="text"
                id="userid"
                className="form-control"
                placeholder="userid"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="••••••••"
              />
            </div>

            <div className="form-group mt-3">
              <label htmlFor="confirm-password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                className="form-control"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button
              type="reset"
              className="btn btn-outline-primary"
              style={{ flex: "0.5" }}
            >
              Reset
            </button>
            <button type="submit" className="btn btn-primary btn-submit">
              Create Account
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}
