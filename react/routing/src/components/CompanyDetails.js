import { useParams } from "react-router-dom";

const CompanyDetails = ({ data }) => {
  const { id } = useParams();
  const companyData = data.find((el) => el.id === id);
  return (
    <div>
      <h1>Details Page</h1>

      <h1>{companyData?.companyName}</h1>
      <h3>{companyData?.companyDescription}</h3>
      <p>{companyData?.detailedDescription}</p>
    </div>
  );
};
export default CompanyDetails;
