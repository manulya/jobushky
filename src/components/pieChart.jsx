import React, { useEffect } from "react";
import { Chart } from "react-google-charts";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../http/jobAPI";
import { fetchCompanies } from "../http/companyAPI";

export function ChartPie() {
  const jobs = useSelector((state) => state.jobs.jobs);
  const companies = useSelector((state) => state.companies.companies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobs());
    dispatch(fetchCompanies());
  },  []);


  function filterCompaniesWithJobs(companies, jobs) {
    const companyIdsWithJobs = jobs.map((job) => job.companyid);
    const filteredCompanies = companies.filter((company) =>
      companyIdsWithJobs.includes(company.id)
    );
    return filteredCompanies;
  }
  const filteredCompanies = filterCompaniesWithJobs(companies, jobs);

  const data = [["Company", "Vacancies"]];
  filteredCompanies.forEach((company) => {
    const vacanciesCount = jobs.filter((job) => job.companyid === company.id).length;
    data.push([company.name, vacanciesCount]);
  });


  const options = {
    title: "Количество вакансий по компаниям",
    backgroundColor: "none",
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"105%"}
      height={"500px"}
    />
  );
}
