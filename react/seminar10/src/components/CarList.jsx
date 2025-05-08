export default function CarList({ query }) {
  const pattern = new RegExp(`.*${query}.*`, "i");
  const cars = ["Audi", "BMW", "Mercedes", "Porsche", "Volkswagen"];
  const testQuery = (car) => {
    return !query || pattern.test(car);
  };
  return (
    <div>
      <h1>Car List</h1>
      <ul>
        {cars.map((car, index) => testQuery(car) && <li key={index}>{car}</li>)}
      </ul>
    </div>
  );
}
