import { Link } from "react-router-dom";

const CompaniesPage = ({ data }) => {
  return (
    <div>
      {data.map((el) => {
        return (
          <div key={el.id}>
            <Link to={`/companies/${el.id}`}>
              <h2>{el.companyName}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CompaniesPage;
