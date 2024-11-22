export default function Pagination({ flightsPerPage, totalFlights, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalFlights / flightsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav id="page-nav">
      <ul className="pagination justify-content-center">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                className="page-link page-item"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
