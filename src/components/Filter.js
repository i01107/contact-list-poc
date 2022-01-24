import { useDispatch } from "react-redux";

const Filter = () => {
  const dispatch = useDispatch()

  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          View
          <hr />
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="viewToggler"
              id="tabular"
              onChange={() => dispatch({ type: 'SET_VIEW', tabular: true })} />
            <label className="form-check-label" htmlFor="tabular">
              Tabular view
            </label>
          </div>
          <div className="form-check mb-5">
            <input
              className="form-check-input"
              type="radio"
              name="viewToggler"
              id="card"
              onChange={() => dispatch({ type: 'SET_VIEW', tabular: false })} />
            <label className="form-check-label" htmlFor="card">
              Card view
            </label>
          </div>
          Filter
          <hr />
        </div>
      </div>
    </div>
  )
}

export default Filter;