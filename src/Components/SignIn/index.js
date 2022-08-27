import FormContainer from "../FormContainer";
import InputField from "../InputField";
import "./index.scss";
import { Link } from "react-router-dom";
import AuthContext from "../../store/authContext";
import { useContext } from "react";
import { useState, useRef } from "react";
function SignIn(props) {
  const [message, setMessage] = useState(null);
   const [specClass,setSpeClass]=useState(null);
  const emailRef = useRef();
  const passRef = useRef();
  const authCtx = useContext(AuthContext);
  const signHandler = (e) => {
    e.preventDefault();

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBhe1Vrq0zQ1eo_pAHxPlR_G7gysW7wHkk",
      {
        method: "POST",
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passRef.current.value,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        console.log(res);
        if (res.ok) {
          emailRef.current.value = "";
          passRef.current.value = "";
        }
        return res.json();
      })
      .then((data) => {
        if (data?.error?.message) {
            setSpeClass('error')
          switch (data.error.message) {
            case "EMAIL_NOT_FOUND":
              setMessage("this email doesn't exist");
              break;
            case 'INVALID_PASSWORD':
              setMessage("Password isn't correct");
              break;
            default:
              setMessage("something went wrong");
          }
        }

        if(data?.registered){
            authCtx.login(data?.idToken)
        }
        console.log(data)
      });
  };
  return (
    <form className="sign-in" onSubmit={signHandler}>
      {!authCtx.isLoggedIn ? (
        <>
          <FormContainer header={"SIGN IN"}>
            <InputField
              id={"email1"}
              type={"email"}
              label={"Email"}
              placeHolder={"enter your email"}
              required
              ref={emailRef}
            />
            <InputField
              id={"pass1"}
              type={"password"}
              label={"Password"}
              placeHolder={"enter your password"}
              required
              ref={passRef}
            />
            <div className="d-flex ">
              <div className=" me-5">
                <input
                  type="checkbox"
                  name=""
                  id="checkBox1"
                  className=" me-1 mt-1 "
                />
                <label htmlFor="checkBox1">Remember Me</label>
              </div>
              <div>
                <Link
                  to="/forget-password"
                  className="text-decoration-none text-secondary "
                >
                  Forget Password
                </Link>
              </div>
            </div>

            <button className="btn my-3  form-button  " type="submit">
              Sign in
            </button>

            <div className={specClass}>{message}</div>

            <p className="mb-0"> Have No Account?</p>

            <Link to="/sign-up" className="btn form-button my-3">
              Create An Account
            </Link>
          </FormContainer>
        </>
      ) : (
        <FormContainer>
          <h4 className="form-button p-2">Logged in Successfully</h4>
          <Link
            to="/account-details"
            className="text-decoration-none text-secondary my-2"
          >
            <h6>Complete your Information &gt; &gt; </h6>
          </Link>
        </FormContainer>
      )}
    </form>
  );
}
export default SignIn;
