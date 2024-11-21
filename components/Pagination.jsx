export default function Pagination({ flightsPerPage, totalFlights, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFlights / flightsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => {
          return (
            <li key={number}>
              <a onClick={() => paginate(number)}>{number}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
