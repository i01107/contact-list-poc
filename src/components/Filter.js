import ViewToggler from "./ViewToggler";
import GenderFilter from "./GenderFilter";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Filter = () => {
  const filter = useSelector((state) => state.filter)
  const [filterCount, setFilterCount] = useState(0)

  useEffect(() => {
    let usedFilterCount = 0
    let arr = ["gender"]
    arr.forEach(item => {
      if (filter[item]) {
        usedFilterCount++
      }
    })
    setFilterCount(usedFilterCount)
  }, [filter])

  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          View
          <hr />
          <ViewToggler />
          Filter<span className="badge rounded-pill bg-primary ms-2">{filterCount} applied</span>
          <hr />
          <GenderFilter />
        </div>
      </div>
    </div>
  )
}

export default Filter;