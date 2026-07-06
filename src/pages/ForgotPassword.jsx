import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ForgotPassword = () => {
  const [emailId, setEmailId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await axios.post(
        BASE_URL + "/forgot-password",
        { emailId }
      );

      alert(res.data.message);

      // Navigate to Reset Password page
      navigate("/reset-password", {
        state: {
          emailId,
        },
      });

    } catch (err) {
      setError(err.response?.data || err.message);

      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-base-200">

      <div className="card w-full max-w-md bg-base-100 shadow-2xl">

        <div className="card-body">

          <h2 className="text-3xl font-bold text-center">
            Forgot Password
          </h2>

          <p className="text-center opacity-70">
            Enter your registered email to receive an OTP.
          </p>

          <label className="form-control mt-6">

            <div className="label">
              <span className="label-text">
                Email Address
              </span>
            </div>

            <input
              type="email"
              className="input input-bordered"
              placeholder="abc@gmail.com"
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
            />

          </label>

          {error && (

            <div className="alert alert-error mt-4">

              <span>{error}</span>

            </div>

          )}

          <button
            className="btn btn-primary w-full mt-6"
            onClick={handleForgotPassword}
            disabled={loading}
          >
            {loading ? "Sending OTP..." : "Send OTP"}
          </button>

        </div>

      </div>

    </div>
  );
};

export default ForgotPassword;