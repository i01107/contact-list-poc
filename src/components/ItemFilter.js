import { useDispatch, useSelector } from "react-redux";

// arrFilter = ['Item', initialState]
const ItemFilter = ({ arrFilter }) => {
  const filterState = useSelector((state) => state.filter[arrFilter[0].toLowerCase()])
  const dispatch = useDispatch()

  const updateItemState = item => {
    let newState = [...filterState]
    let idx = newState.findIndex(it => it === item)
    if (idx >= 0) {
      newState.splice(idx, 1)
    } else {
      newState.push(item)
    }
    dispatch({
      type: `UPDATE_FILTER_${arrFilter[0].toUpperCase()}`,
      updatedState: [...newState]
    })
  }

  return (
    <div className="mb-5">
      <b>{arrFilter[0]}</b>
      {
        arrFilter[1].map((item, idx) => (
          <div className="form-check" key={idx}>
            <input
              className="form-check-input"
              type="checkbox"
              checked={filterState.find(it => it === item ) ? true : false}
              id={item}
              onChange={() => updateItemState(item)} />
            <label className="form-check-label" htmlFor={item}>
              {item}
            </label>
          </div>
        ))
      }
    </div>
  )
}

export default ItemFilter;