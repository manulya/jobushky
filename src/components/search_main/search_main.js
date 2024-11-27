import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";
import "./search_main.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCompanyAC } from "../../store/companyReducer";
import { fetchCompanies } from "../../http/companyAPI";
import { Dropdown } from "react-bootstrap";

const Search_main = (props) => {
  const dispatch = useDispatch();
  const companies = useSelector((state) => state.companies.companies);
  const jobs = useSelector((state) => state.jobs.jobs);
  const [selectedCompanyId, setSelectedCompanyId] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");
  const [selectedJobName, setselectedJobName] = useState("");
  const [selectedCity, setselectedCity] = useState("");
  const [selectedSearch, setSelectedSearch] = useState("");
  let selected = [];
  let search = "";
  let jobCount = props.jobCount;

  const handlerReset = () => {
    setSelectedCompany("");
    setselectedJobName("");
    setselectedCity("");
    setSelectedCompanyId("");
    selected = [];
    props.onSearch(selected, search);
  };
  const handlerSearch = () => {
    selected = [selectedJobName, selectedCompanyId, selectedCity];
    props.onSearch(selected, search);
  };
  const handlerSort = (params) => {
    selected = [selectedJobName, selectedCompanyId, selectedCity];
    const search = params;
    props.onSearch(selected, search);
  };
  return (
    <section>
      <div className="h-60">
        <div className="container">
          <div className="row">
            <div className="col-md-1 col-lg-8 col-xl-7 mx-auto">
              <div className="card" style={{ backgroundColor: "#edeaea" }}>
                <div className="card-body p-4">
                  <h5
                    className="text-uppercase mt-3 mb-4"
                    style={{ color: "#A38495" }}
                  >
                    Расширенный поиск
                  </h5>
                  <h6
                    className="text-uppercase mt-3 mb-4"
                    style={{ color: "#A38495" }}
                  >
                    Найдено {jobCount} книг
                  </h6>

                  <div className="row">
                    <div className="col-md-4 mb-3">
                      <div className="dropdown">
                        <button
                          className="btn btn-light btn-rounded btn-lg btn-block dropdown-toggle"
                          role="button"
                          type="button"
                          id="dropdownMenuButton"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {selectedJobName ? selectedJobName : "Название"}
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink1"
                        >
                          {jobs.map((job, index) => {
                            return (
                              <li>
                                <a
                                  className="dropdown-item"
                                  key={index}
                                  onClick={() => {
                                    setselectedJobName(job.name);
                                  }}
                                >
                                  {job.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-4 mb-3">
                      <div className="dropdown">
                        <a
                          className="btn btn-light btn-rounded btn-lg btn-block dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink1"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {selectedCompany ? selectedCompany : "Автор"}
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink1"
                        >
                          {companies.map((company, index) => {
                            return (
                              <li>
                                <a
                                  className="dropdown-item"
                                  key={index}
                                  onClick={() => {
                                    setSelectedCompanyId(company.id);
                                    setSelectedCompany(company.name);
                                  }}
                                >
                                  {company.name}
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>

                    {/* <div className="col-md-4 mb-3">
                      <div className="dropdown">
                        <a
                          className="btn btn-light btn-rounded btn-lg btn-block dropdown-toggle"
                          href="#"
                          role="button"
                          id="dropdownMenuLink3"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          {selectedCity ? selectedCity : "Жанр"}
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink1"
                        >
                          {[...new Set(jobs.map((job) => job.city))].map(
                            (city, index) => {
                              return (
                                <li key={index}>
                                  <a
                                    className="dropdown-item"
                                    onClick={() => {
                                      setselectedCity(city);
                                    }}
                                  >
                                    {city}
                                  </a>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    </div>*/}
                  </div> 
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <Dropdown style={{ display: "flex", alignSelf: "center" }}>
                      <Dropdown.Toggle
                        id="dropdown-basic"
                        style={{
                          backgroundColor: "pink",
                          backgroundImage:
                            "linear-gradient(to right, pink,#a38495)",
                          color: "white",
                          borderRadius: "10px",
                        }}
                      >
                        Сортировать по
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item onClick={() => handlerSort("su")}>
                          Возрастанию цены
                        </Dropdown.Item>
                        <Dropdown.Item onClick={() => handlerSort("sd")}>
                          Убыванию цены
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <div>
                      <button
                        onClick={handlerReset}
                        type="button"
                        className="btn btn-link text-pink btn-rounded"
                        data-mdb-ripple-color="dark"
                      >
                        Сбросить
                      </button>
                      <button
                        onClick={handlerSearch}
                        type="button"
                        className="btn btn-rounded purple-gradient text-white"
                      >
                        Поиск
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Search_main;
