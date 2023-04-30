import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import "mdb-ui-kit/js/mdb.min.js";
import "./search_main.css";
import { useDispatch, useSelector } from "react-redux";
import { selectCompanyAC } from "../../store/companyReducer";

const Search_main = () => {
  const dispatch = useDispatch();
  const companies=useSelector((state)=>state.companies.companies);
  const selectedCompany = useSelector((state) => state.companies.selectedCompany);
const clickCompanyHandler=(companyName)=>{
  dispatch(selectCompanyAC(companyName))
}

  return (
    <section className="intro">
      <div className="mask d-flex align-items-center h-100">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
              <div
                className="card mb-2"
                style={{
                  borderRadius: "10em",
                  background: "linear-gradient(to right, #F0B6D5, #A38495)",
                }}
              >
                <div className="card-body p-2">
                  <div className="input-group input-group-lg">
                    <input
                      type="text"
                      className="form-control form-control-lg rounde bg-transparent text-white"
                      placeholder="Введите профессию, компанию или должность"
                      aria-label="Type Keywords"
                      aria-describedby="basic-addon2"
                    />
                    <span
                      className="input-group-text border-0"
                      id="basic-addon2"
                    >
                      <i className="fas fa-search fa-lg text-white"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card" style={{ backgroundColor: "#edeaea" }}>
                <div className="card-body p-4">
                  <h6
                    className="text-uppercase mt-3 mb-4"
                    style={{ color: "#A38495" }}
                  >
                    Расширенный поиск
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
                          Профессия
                        </button>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
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
                          Компания
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink1"
                        >
                          {companies.map((company, index) => {
                            return (
                              <li>
                                <a className="dropdown-item" onClick={()=>clickCompanyHandler(company.companyName)}>
                                  {company.name}
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
                          id="dropdownMenuLink3"
                          data-mdb-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Город
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby="dropdownMenuLink3"
                        >
                          <li>
                            <a className="dropdown-item" href="#">
                              Action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <p className="mb-0" style={{ color: "#939597" }}>
                      <span className="text-pink font-weight-bold">108 </span>
                      результатов
                    </p>
                    <div>
                      <button
                        type="button"
                        className="btn btn-link text-pink btn-rounded"
                        data-mdb-ripple-color="dark"
                      >
                        Сбросить
                      </button>
                      <button
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
