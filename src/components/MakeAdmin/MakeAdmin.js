import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleOnblur = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };
    fetch("https://rocky-ridge-27359.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
    e.preventDefault();
  };
  return (
    <div className="content">
      <h2 className="m-5">Make An Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <div className="m-5 row">
          <label for="inputEmail" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="email"
              onBlur={handleOnblur}
              className="form-control"
              type="email"
              id="staticEmail"
            />
          </div>
        </div>
        <button className="btn btn-outline-warning ms-5">Make Admin</button>
      </form>
      {success && (
        <div className="alert alert-warning" role="alert">
          Made Admin Successfully!!
        </div>
      )}
    </div>
  );
};

export default MakeAdmin;
