import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { updateContacts } from "../store/actions";

const errorLib = {
  "required": "This field is required",
  "textPattern": "Only alphabet allowed",
  "emailPattern": "Please use proper email pattern"
}

const ShowError = ({ type }) => {
  return (
    <div className="form-text text-danger">{errorLib[type]}</div>
  )
}

const Form = ({ contact, idx }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const submitHandler = contact => {
    if (!idx) {
      contact.id = uuidv4()
    }
    
    dispatch({
      type: idx || idx === 0 ? 'UPDATE_CONTACT' : 'ADD_CONTACT',
      payload: { contact, idx }
    })

    navigate("/")
  }

  if (idx || idx === 0) {
    console.log(contact)
    setValue("name", contact.name)
    setValue("email", contact.email)
    setValue("phone", contact.phone)
    setValue("gender", contact.gender)
    setValue("nat", contact.nat)
    setValue("picture", contact.picture)
  }

  return (
    <form className="w-50" onSubmit={handleSubmit(submitHandler)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input className="form-control" id="name"
          {...register("name", { required: true, pattern: /^[A-Za-z\s]+$/i })} />
        {errors?.name?.type === "required" && <ShowError type="required" />}
        {errors?.name?.type === "pattern" && <ShowError type="textPattern" />}
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email"
          {...register("email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ })} />
        {errors?.email?.type === "required" && <ShowError type="required" />}
        {errors?.email?.type === "pattern" && <ShowError type="emailPattern" />}
      </div>

      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input className="form-control" id="phone"
          {...register("phone", { required: true })} />
        {errors?.phone?.type === "required" && <ShowError type="required" />}
      </div>

      <div className="mb-3">
        <label htmlFor="gender" className="form-label">Gender</label>
        <select className="form-select" {...register("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="nat" className="form-label">Nationality</label>
        <select className="form-select" {...register("nat")}>
          <option value="US">United States</option>
          <option value="FR">France</option>
          <option value="DK">Denmark</option>
          <option value="GB">United Kingdom</option>
        </select>
      </div>

      <div className="mb-3">
        <label htmlFor="picture" className="form-label">Picture URL</label>
        <input className="form-control" id="picture"
          {...register("picture", { required: true })} />
        {errors?.picture?.type === "required" && <ShowError type="required" />}
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Form;