/*https://react-hook-form.com/get-started*/

import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  async function onHandleSubmit(data) {
    // if (data.firstName === "" || data.required === true) {
    //   console.log("please fill the first name field");
    // } else if (data.lastName === "") {
    //   console.log("please fill the last name field");
    // } else if (data.fatherName === "") {
    //   console.log("please fill the father name field");
    // } else {
    //   console.log(
    //     `my name is ${data.firstName} and father name is ${data.fatherName}`
    //   );
    // }
    // setTimeout(() => {
    //   console.log(
    //     `my name is ${data.firstName} and father name is ${data.fatherName}`
    //   );
    // }, 2000);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(
      `my name is ${data.firstName} and father name is ${data.fatherName}`
    );
  }

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="container">
        <div>
          <label className="label">First Name</label>
          <input
            id="input1"
            className={errors.firstName && "redInput"}
            {...register("firstName", {
              required: true,
              minLength: {
                value: 3,
                message: "minimum length : 3",
              },
              maxLength: {
                value: 10,
                message: "maximum length : 10",
              },
            })}
          />
          {errors.firstName && (
            <div className="newMessage">
              <h3 className="errorMsg">{errors.firstName.message}</h3>
            </div>
          )}
        </div>

        <div>
          <label className="label">Last Name</label>
          <input
            id="input2"
            className={errors.lastName && "redInput"}
            {...register("lastName", {
              required: true,
              minLength: {
                value: 3,
                message: "minimum length : 3",
              },
              maxLength: {
                value: 10,
                message: "maximum length : 10",
              },
            })}
          />
          {errors.lastName && (
            <div className="newMessage">
              <h3 className="errorMsg">{errors.lastName.message}</h3>
            </div>
          )}
        </div>

        <div>
          <label className="label">Father Name</label>
          <input
            id="input3"
            className={errors.fatherName && "redInput"}
            {...register("fatherName", {
              required: true,
              minLength: {
                value: 3,
                message: "minimum length : 3",
              },
              maxLength: {
                value: 10,
                message: "maximum length : 10",
              },
            })}
          />
          {errors.fatherName && (
            <div className="newMessage">
              <h3 className="errorMsg">{errors.fatherName.message}</h3>
            </div>
          )}
        </div>
        <div>
          <input
            type="submit"
            id="subBtn"
            disabled={isSubmitting}
            value={isSubmitting ? "Submitting" : "Submit"}
          ></input>
        </div>
      </div>
    </form>
  );
}

export default App;
