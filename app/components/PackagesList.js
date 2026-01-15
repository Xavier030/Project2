// components/PackagesList.js
"use client";

import { useEffect, useState } from "react";

export default function PackagesList() {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPackages() {
      try {
        const response = await fetch("/api/packages");
        const result = await response.json();

        console.log("API Response:", result);

        if (result.success) {
          setPackages(result.data);
          console.log("First package:", result.data[0]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPackages();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!packages.length) return <div>No packages found</div>;

  return (
    <div className="container">
      <h1>Travel Packages</h1>

      <div className="row">
        {packages.map((pkg) => (
          <div key={pkg.packageid} className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">
                  {pkg.pkgname || "Unnamed Package"}
                </h5>
                <p className="card-text">
                  <strong>Description:</strong>{" "}
                  {pkg.pkgdsec || "No description"}
                </p>
                <ul className="list-unstyled">
                  <li>
                    <strong>Start:</strong>{" "}
                    {new Date(pkg.pkgstartdate).toLocaleDateString()}
                  </li>
                  <li>
                    <strong>End:</strong>{" "}
                    {new Date(pkg.pkgenddate).toLocaleDateString()}
                  </li>
                  <li>
                    <strong>Price:</strong> $
                    {parseFloat(pkg.pkgbaseprice).toFixed(2)}
                  </li>
                  <li>
                    <strong>Commission:</strong> $
                    {parseFloat(pkg.pkgagencycommission || 0).toFixed(2)}
                  </li>
                </ul>

                <button
                  className="btn btn-sm btn-outline-secondary mt-2"
                  onClick={() => console.log("Package data:", pkg)}
                >
                  Debug Data
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
