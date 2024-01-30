import { useState } from 'react';
import "./App.css";

function App() {

  const [formData, setFormData] = useState({
    firstName: "", lastName: "", email: "", country: "India",
    streetAddress: "", city: "", state: "", postalCode: "",
    comments: false, candidates: false, offers: false, pushNotification: ""
  })

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Finally printing the value of Form Data");
    console.log(formData);
  }

  return (
    <div className="flex flex-col items-center mt-2">
      <form onSubmit={submitHandler}>

        <label htmlFor='firstName'>First name</label>
        <br />
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Saurabh"
          value={formData.firstName}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor='lastName'>Last name</label>
        <br />
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Gawali"
          value={formData.lastName}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor='email'>Email Address</label>
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="saurabhgawali3008@gmail.com"
          value={formData.email}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor='country'>Country</label>
        <br />
        <select
          id="country"
          name="country"
          value={formData.country}
          onChange={changeHandler}
          className='outline'
        >
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>

        <br />

        <label htmlFor='streetAddress'>Street Address</label>
        <br />
        <input
          type="text"
          name="streetAddress"
          id="streetAddress"
          placeholder="B-25c"
          value={formData.streetAddress}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor='city'>City</label>
        <br />
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Mumbai"
          value={formData.city}
          onChange={changeHandler}
          className="outline"
        />

        <br />

        <label htmlFor='state'>State / Province</label>
        <br />
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Maharashtra"
          value={formData.state}
          onChange={changeHandler}
          className="outline"
        />


        <br />

        <label htmlFor='postalCode'>Postal Code</label>
        <br />
        <input
          type="text"
          name="postalCode"
          id="postalCode"
          placeholder="444701"
          value={formData.postalCode}
          onChange={changeHandler}
          className="outline"
        />

        <br />
        <br />

        <fieldset>
          <legend>By Email</legend>

          <div className='flex'>
            <input
              type='checkbox'
              id='comments'
              name='comments'
              checked={formData.comments}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor='comments'>Comments</label>
              <p>Get notified when someones posts a comment on a posting.</p>
            </div>
          </div>

          <div className='flex'>
            <input
              type='checkbox'
              id='candidates'
              name='candidates'
              checked={formData.candidates}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor='candidates'>Candidates</label>
              <p>Get notified when a candidates applies for a job.</p>
            </div>
          </div>

          <div className='flex'>
            <input
              type='checkbox'
              id='offers'
              name='offers'
              checked={formData.offers}
              onChange={changeHandler}
            />
            <div>
              <label htmlFor='offers'>Offers</label>
              <p>Get notified when candidate accepts or rejects an offer.</p>
            </div>
          </div>

        </fieldset>

        <br />
        <br />

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <input
            type='radio'
            id='pushEverything'
            name='pushNotification'
            value="Everything"
            onChange={changeHandler}
          />

          <lable htmlFor="pushEverything">Everything</lable>

          <br />

          <input
            type='radio'
            id='pushEmail'
            name='pushNotification'
            value="Same as email"
            onChange={changeHandler}
          />

          <lable htmlFor="pushEmail">Same as email</lable>

          <br />

          <input
            type='radio'
            id='pushNothing'
            name='pushNotification'
            value="No push Notification"
            onChange={changeHandler}
          />

          <lable htmlFor="pushNothing">No push Notification</lable>

        </fieldset>

        <br />

        <button className='bg-blue-500 text-white font-bold rounded-md py-2 px-4'>Save</button>

      </form>
    </div>
  );
}

export default App;
