import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const GenderFilter = () => {
  const genderFilter = useSelector((state) => state.filter.gender)
  const dispatch = useDispatch()
  const [male, setMale] = useState(false)
  const [female, setFemale] = useState(false)

  useEffect(() => {
    let setGenderState = male || female
    if (setGenderState !== genderFilter) {
      dispatch({
        type: 'UPDATE_FILTER_GENDER',
        gender: setGenderState
      })
    }
  }, [male, female]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <b>Gender</b>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={male}
          id="checkMale"
          onChange={() => setMale(!male)} />
        <label className="form-check-label" htmlFor="checkMale">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={female}
          id="checkFemale"
          onChange={() => setFemale(!female)} />
        <label className="form-check-label" htmlFor="checkFemale">
          Female
        </label>
      </div>
    </>
  )
}

export default GenderFilter;