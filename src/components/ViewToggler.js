import { useDispatch } from "react-redux";

const ViewToggler = () => {
  const dispatch = useDispatch()

  return (
    <>
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
    </>
  )
}

export default ViewToggler