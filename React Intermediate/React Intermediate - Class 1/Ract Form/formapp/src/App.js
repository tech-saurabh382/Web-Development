import './App.css';
import { useState } from 'react';

function App() {

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  // console.log(firstName);
  // console.log(lastName);
  // function changeFirstNameHandler(event) {
  //   // console.log("Printing First Name");
  //   // console.log(event.target.value);
  //   setFirstName(event.target.value);
  // }

  // function changeLastNameHandler(event) {
  //   // console.log("Printing Last Name");
  //   // console.log(event.target.value);
  //   setLastName(event.target.value);
  // }

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments: "", isVisible: true, mode: "", favCar: "" });

  // console.log(formData)

  function changeHandler(event) {
    const { name, value, checked, type } = event.target
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value
      }
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    // print
    console.log("Finally Printing the entireform ka data......");
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder="first name"
          onChange={changeHandler}
          name="firstName"
          value={formData.firstName}
        />

        <br />
        <br />

        <input
          type="text"
          placeholder="last name"
          onChange={changeHandler}
          name="lastName"
          value={formData.lastName}
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter Your Email Here"
          onChange={changeHandler}
          name="email"
          value={formData.email}
        />

        <br />
        <br />

        <textarea
          placeholder='Enter Your Comments Here'
          onChange={changeHandler}
          name='comments'
          value={formData.comments}
        />

        <br />
        <br />

        <input
          type='checkbox'
          onChange={changeHandler}
          name='isVisible'
          id='isVisible'
          checked={formData.isVisible}
        />
        <label htmlFor='isVisible'>Am I Visible ?</label>

        <br />
        <br />

        <fieldset>

          <legend>Mode: </legend>

          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Online-Mode"
            id='Online-Mode'
            checked={formData.mode === "Online-Mode"}
          />
          <label htmlFor="Online-Mode">Online Mode</label>

          <input
            type='radio'
            onChange={changeHandler}
            name='mode'
            value="Offline-Mode"
            id='Offline-Mode'
            checked={formData.mode === "Offline-Mode"}
          />
          <label htmlFor="Offline-Mode">Offline Mode</label>

        </fieldset>

        <label htmlFor="favCar">Tell me your Favourite Car </label>

        <select
          name="favCar"
          id="favCar"
          value={formData.favCar}
          onChange={changeHandler}
        >
          <option value="scarpio">Scarpio</option>
          <option value="fartuner">Fartuner</option>
          <option value="Tharr">Tharr</option>
          <option value="Legender">Legender</option>
          <option value="Defender">Defender</option>
        </select>

        <br />
        <br />

        {/* <input type="submit" value="submit" /> */}

        <button>Submit</button>

      </form>
    </div>
  );
}

export default App;
