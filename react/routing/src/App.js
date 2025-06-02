import { Route, Routes } from "react-router-dom";
import "./App.css";
import React, { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import { companiesData } from "./data/data";
import Header from "./components/Header";

const HomePage = lazy(() => import("./components/HomePage"));
const AboutPage = lazy(() => import("./components/AboutPage"));
const CompaniesPage = lazy(() => import("./components/CompaniesPage"));
const CompanyDetails = lazy(() => import("./components/CompanyDetails"));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/companies"
            element={<CompaniesPage data={companiesData} />}
          />
          <Route
            path="/companies/:id"
            element={<CompanyDetails data={companiesData} />}
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
