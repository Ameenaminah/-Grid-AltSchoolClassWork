import { range } from "./utils";

function Grid({ numRows, numCols }) {
  const rowNumbers = range(numRows);

  return (
    <div className="grid">
      {
        /* TODO */
        rowNumbers.map((rowNumber) => (
          <div key={rowNumber} className="row">
            {range(numCols).map((colNumber) => (
              <div key={colNumber} className="cell"></div>
            ))}
          </div>
        ))
      }
    </div>
  );
}

export default Grid;
