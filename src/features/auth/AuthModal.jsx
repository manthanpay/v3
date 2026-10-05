import { useState } from "react";
import { Brand } from "../../components/Brand.jsx";
import { ValidatedForm } from "../../components/ValidatedForm.jsx";
import { Modal } from "../../components/Modal.jsx";
import { V } from "../../domain/businessRules.js";
import { demoAuthService } from "../../services/demoAuthService.js";

/*
|--------------------------------------------------------------------------
| Registration states
|--------------------------------------------------------------------------
*/

const STEP = {
  MOBILE: "MOBILE",
  CHECKING: "CHECKING",
  OTP: "OTP",
  PROFILE: "PROFILE",
  STATUS: "STATUS",
  LOGIN: "LOGIN",
};

/*
|--------------------------------------------------------------------------
| Demo onboarding records
|
| Later this will come from backend/database.
|--------------------------------------------------------------------------
*/

const getUsers = () => demoAuthService.users();

const getOnboardingStatus = (mobile) => {
  const user = getUsers().find((u) => u.mobile === mobile);

  if (!user) {
    return {
      exists: false,
      status: null,
      nextStep: "OTP",
    };
  }

  /*
   * For now we assume users created by the old demo system
   * are ACTIVE.
   *
   * Later backend will return the real status.
   */
  return {
    exists: true,
    status: user.status || "ACTIVE",
    nextStep: getNextStep(user.status || "ACTIVE"),
    user,
  };
};

const getNextStep = (status) => {
  switch (status) {
    case "MOBILE_VERIFIED":
      return "PROFILE";

    case "PROFILE_COMPLETED":
      return "KYC";

    case "KYC_SUBMITTED":
      return "STATUS";

    case "KYC_APPROVED":
      return "LOGIN";

    case "ACTIVE":
      return "LOGIN";

    case "KYC_REJECTED":
      return "KYC";

    case "SUSPENDED":
      return "STATUS";

    case "BLOCKED":
      return "STATUS";

    default:
      return "PROFILE";
  }
};

/*
|--------------------------------------------------------------------------
| Login fields
|--------------------------------------------------------------------------
*/

const LOGIN = [
  {
    k: "mobile",
    label: "Mobile number",
    type: "num",
    max: 10,
    validate: V.mobile,
  },
  {
    k: "password",
    label: "Password",
    password: true,
    validate: V.required("Password"),
  },
];

/*
|--------------------------------------------------------------------------
| Mobile field
|--------------------------------------------------------------------------
*/

const MOBILE = [
  {
    k: "mobile",
    label: "Mobile number",
    type: "num",
    max: 10,
    validate: V.mobile,
  },
];

/*
|--------------------------------------------------------------------------
| Profile fields
|
| This is intentionally smaller than the old registration form.
| KYC will be a separate step later.
|--------------------------------------------------------------------------
*/

const PROFILE = [
  {
    k: "name",
    label: "Full name",
    validate: V.name,
  },
  {
    k: "email",
    label: "Email",
    validate: V.email,
  },
  {
    k: "pan",
    label: "PAN number",
    upper: true,
    max: 10,
    ph: "ABCDE1234F",
    validate: V.pan,
  },
  {
    k: "password",
    label: "Create password",
    password: true,
    validate: V.password,
  },
  {
    k: "mpin",
    label: "Set 4-digit MPIN",
    password: true,
    type: "num",
    max: 4,
    validate: V.mpin,
  },
];

/*
|--------------------------------------------------------------------------
| Main component
|--------------------------------------------------------------------------
*/

export default function AuthModal({ start, onClose, onDone }) {
  /*
   * Login can still be opened directly from Partner Login.
   *
   * Signup starts with MOBILE.
   */
  const [mode, setMode] = useState(
    start === "login" ? STEP.LOGIN : STEP.MOBILE
  );

  const [mobile, setMobile] = useState("");
  const [registrationType, setRegistrationType] = useState("PARTNER");

  const [status, setStatus] = useState(null);
  const [existingUser, setExistingUser] = useState(null);

  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const [message, setMessage] = useState("");

  /*
   * Demo OTP.
   *
   * IMPORTANT:
   * This is only for frontend development.
   *
   * Later:
   * POST /api/v1/onboarding/send-otp
   * POST /api/v1/onboarding/verify-otp
   */
  const DEMO_OTP = "123456";

  /*
   |--------------------------------------------------------------------------
   | Check mobile
   |--------------------------------------------------------------------------
   */

  const checkMobile = async (values) => {
    const enteredMobile = values.mobile;

    setMobile(enteredMobile);
    setMessage("");
    setStatus(null);
    setExistingUser(null);

    /*
     * Simulate API delay.
     */
    await new Promise((resolve) => setTimeout(resolve, 500));

    const result = getOnboardingStatus(enteredMobile);

    //API CALL
//     const response = await fetch(
//   "/api/v1/onboarding/check-mobile",
//   {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       mobile: enteredMobile,
//       registrationType,
//     }),
//   }
// );

// const result = await response.json();

    /*
     * New mobile
     */
    if (!result.exists) {
      setMode(STEP.OTP);
      setMessage(
        `OTP sent to +91 ${enteredMobile}.`
      );

      /*
       * In real backend this would actually send SMS.
       */
      console.log("DEMO OTP:", DEMO_OTP);

      return;
    }

    /*
     * Existing mobile
     */
    setExistingUser(result.user);
    setStatus(result.status);

    /*
     * ACTIVE user
     */
    if (
      result.status === "ACTIVE" ||
      result.status === "KYC_APPROVED"
    ) {
      setMode(STEP.LOGIN);

      setMessage(
        "This mobile number is already registered. Please login."
      );

      return;
    }

    /*
     * Partially completed onboarding.
     */
    setMode(STEP.STATUS);

    setMessage(
      getStatusMessage(result.status)
    );
  };

  /*
   |--------------------------------------------------------------------------
   | OTP verification
   |--------------------------------------------------------------------------
   */

  const verifyOtp = async () => {
    setOtpError("");

    if (!/^\d{6}$/.test(otp)) {
      setOtpError("Enter the 6-digit OTP");
      return;
    }

    if (otp !== DEMO_OTP) {
      setOtpError("Invalid OTP. Please try again.");
      return;
    }

    /*
     * OTP verified.
     *
     * Backend later:
     *
     * MOBILE
     *    ↓
     * OTP VERIFIED
     *    ↓
     * onboarding.status = MOBILE_VERIFIED
     */

    setStatus("MOBILE_VERIFIED");
    setMode(STEP.PROFILE);

    setMessage("Mobile number verified successfully.");
  };

  /*
   |--------------------------------------------------------------------------
   | Profile completion
   |--------------------------------------------------------------------------
   */

  const completeProfile = async (values) => {
    /*
     * In production this data will be sent to:
     *
     * POST /api/v1/onboarding/profile
     */

    const newUser = {
      name: values.name.trim(),
      mobile,
      email: values.email,
      pan: values.pan.toUpperCase(),

      /*
       * These are temporarily stored because
       * we still have demo authentication.
       */
      password: values.password,
      mpin: values.mpin,

      /*
       * Registration information
       */
      registrationType,

      /*
       * Important:
       * This is NOT ACTIVE yet.
       */
      status: "PROFILE_COMPLETED",

      /*
       * Demo dashboard fields
       */
      wallet: 500,
      txns: [],
    };

    demoAuthService.register(newUser);

    /*
     * Do NOT login automatically.
     *
     * Real flow:
     *
     * PROFILE_COMPLETED
     *       ↓
     * KYC
     */

    setExistingUser(newUser);
    setStatus("PROFILE_COMPLETED");
    setMode(STEP.STATUS);

    setMessage(
      "Profile completed. Continue with KYC verification."
    );

    return;
  };

  /*
   |--------------------------------------------------------------------------
   | Login
   |--------------------------------------------------------------------------
   */

  const login = async (values) => {
    const user = getUsers().find(
      (x) => x.mobile === values.mobile
    );

    if (!user) {
      return {
        mobile: "No account found. Please start registration first.",
      };
    }

    if (user.password !== values.password) {
      return {
        password: "Incorrect password",
      };
    }

    /*
     * Only ACTIVE / approved users should reach dashboard.
     */
    if (
      user.status &&
      user.status !== "ACTIVE" &&
      user.status !== "KYC_APPROVED"
    ) {
      setMobile(user.mobile);
      setExistingUser(user);
      setStatus(user.status);
      setMode(STEP.STATUS);

      return;
    }

    onDone(user);
  };

  /*
   |--------------------------------------------------------------------------
   | Status action
   |--------------------------------------------------------------------------
   */

  const continueFromStatus = () => {
    switch (status) {
      case "MOBILE_VERIFIED":
        setMode(STEP.PROFILE);
        break;

      case "PROFILE_COMPLETED":
        /*
         * KYC UI will be created in the next step.
         */
        setMessage(
          "KYC module will continue from here."
        );
        break;

      case "KYC_SUBMITTED":
        setMessage(
          "Your KYC is under review."
        );
        break;

      case "KYC_REJECTED":
        setMessage(
          "Your KYC needs to be resubmitted."
        );
        break;

      case "SUSPENDED":
        setMessage(
          "Your account is currently suspended. Please contact support."
        );
        break;

      case "BLOCKED":
        setMessage(
          "This account is blocked. Please contact support."
        );
        break;

      default:
        break;
    }
  };

  /*
   |--------------------------------------------------------------------------
   | Render
   |--------------------------------------------------------------------------
   */

  return (
    <Modal onClose={onClose}>
      <div className="auth-brand">
        <Brand height={48} />
      </div>

      <div className="auth-heading">
        <span>
          {mode === STEP.LOGIN
            ? "Partner access"
            : "Partner onboarding"}
        </span>

        <h2>
          {getHeading(mode, status)}
        </h2>

        <p>
          {getDescription(mode, status, mobile)}
        </p>
      </div>

      {/*
       * ---------------------------------------------------------------
       * LOGIN
       * ---------------------------------------------------------------
       */}

      {mode === STEP.LOGIN && (
        <>
          {message && (
            <div className="auth-message">
              {message}
            </div>
          )}

          <ValidatedForm
            key="login"
            fields={LOGIN}
            submitLabel="Log in securely"
            onSubmit={login}
          />

          <button
            type="button"
            className="auth-switch"
            onClick={() => {
              setMode(STEP.MOBILE);
              setMessage("");
            }}
          >
            New partner? Start registration
          </button>
        </>
      )}

      {/*
       * ---------------------------------------------------------------
       * MOBILE
       * ---------------------------------------------------------------
       */}

      {mode === STEP.MOBILE && (
        <>
          <div className="registration-type">
            <label>Register as</label>

            <div className="registration-type-options">
              <button
                type="button"
                className={
                  registrationType === "PARTNER"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setRegistrationType("PARTNER")
                }
              >
                Partner
              </button>

              <button
                type="button"
                className={
                  registrationType === "RETAILER"
                    ? "active"
                    : ""
                }
                onClick={() =>
                  setRegistrationType("RETAILER")
                }
              >
                Retailer
              </button>
            </div>
          </div>

          <ValidatedForm
            key="mobile"
            fields={MOBILE}
            submitLabel="Continue"
            onSubmit={checkMobile}
          />

          <p className="auth-helper">
            We'll check whether this mobile number already
            has an onboarding record.
          </p>
        </>
      )}

      {/*
       * ---------------------------------------------------------------
       * OTP
       * ---------------------------------------------------------------
       */}

      {mode === STEP.OTP && (
        <div className="otp-step">
          {message && (
            <div className="auth-message">
              {message}
            </div>
          )}

          <div className="otp-mobile">
            +91 {mobile}
          </div>

          <label className="otp-label">
            Enter 6-digit OTP
          </label>

          <input
            className={`otp-input ${otpError ? "has-error" : ""
              }`}
            value={otp}
            onChange={(e) => {
              setOtp(
                e.target.value
                  .replace(/\D/g, "")
                  .slice(0, 6)
              );

              setOtpError("");
            }}
            inputMode="numeric"
            maxLength={6}
            autoFocus
            placeholder="••••••"
          />

          {otpError && (
            <div className="field-error">
              {otpError}
            </div>
          )}

          <button
            type="button"
            className="btn btn-primary btn-full"
            onClick={verifyOtp}
          >
            Verify OTP
          </button>

          <button
            type="button"
            className="auth-switch"
            onClick={() => {
              setMode(STEP.MOBILE);
              setOtp("");
              setOtpError("");
              setMessage("");
            }}
          >
            Change mobile number
          </button>

          <p className="demo-note">
            Demo OTP: 123456
          </p>
        </div>
      )}

      {/*
       * ---------------------------------------------------------------
       * PROFILE
       * ---------------------------------------------------------------
       */}

      {mode === STEP.PROFILE && (
        <>
          <div className="verified-mobile">
            ✓ Mobile verified: +91 {mobile}
          </div>

          <ValidatedForm
            key="profile"
            fields={PROFILE}
            submitLabel="Continue to KYC"
            onSubmit={completeProfile}
          />
        </>
      )}

      {/*
       * ---------------------------------------------------------------
       * STATUS
       * ---------------------------------------------------------------
       */}

      {mode === STEP.STATUS && (
        <div className="onboarding-status">
          <div className="status-badge">
            {getStatusLabel(status)}
          </div>

          <h3>
            {getStatusTitle(status)}
          </h3>

          <p>
            {getStatusMessage(status)}
          </p>

          {existingUser && (
            <div className="status-mobile">
              Mobile: +91 {existingUser.mobile}
            </div>
          )}

          {status === "MOBILE_VERIFIED" && (
            <button
              type="button"
              className="btn btn-primary btn-full"
              onClick={continueFromStatus}
            >
              Complete Profile
            </button>
          )}

          {status === "PROFILE_COMPLETED" && (
            <button
              type="button"
              className="btn btn-primary btn-full"
              onClick={continueFromStatus}
            >
              Continue KYC
            </button>
          )}

          {status === "KYC_SUBMITTED" && (
            <button
              type="button"
              className="btn btn-primary btn-full"
              onClick={continueFromStatus}
            >
              Check KYC Status
            </button>
          )}

          {status === "KYC_REJECTED" && (
            <button
              type="button"
              className="btn btn-primary btn-full"
              onClick={continueFromStatus}
            >
              Resubmit KYC
            </button>
          )}

          {(status === "SUSPENDED" ||
            status === "BLOCKED") && (
              <button
                type="button"
                className="btn btn-primary btn-full"
                onClick={() =>
                  setMessage(
                    "Please contact the Manthan Pay support team."
                  )
                }
              >
                Contact Support
              </button>
            )}

          <button
            type="button"
            className="auth-switch"
            onClick={() => {
              setMode(STEP.MOBILE);
              setStatus(null);
              setExistingUser(null);
              setMessage("");
            }}
          >
            Use another mobile number
          </button>
        </div>
      )}
    </Modal>
  );
}

/*
|--------------------------------------------------------------------------
| UI helper functions
|--------------------------------------------------------------------------
*/

function getHeading(mode, status) {
  switch (mode) {
    case STEP.LOGIN:
      return "Welcome back";

    case STEP.MOBILE:
      return "Start your onboarding";

    case STEP.OTP:
      return "Verify your mobile";

    case STEP.PROFILE:
      return "Complete your profile";

    case STEP.STATUS:
      switch (status) {
        case "MOBILE_VERIFIED":
          return "Continue your onboarding";

        case "PROFILE_COMPLETED":
          return "KYC verification";

        case "KYC_SUBMITTED":
          return "KYC under review";

        case "KYC_REJECTED":
          return "KYC action required";

        case "SUSPENDED":
          return "Account suspended";

        case "BLOCKED":
          return "Account blocked";

        default:
          return "Onboarding status";
      }

    default:
      return "Partner onboarding";
  }
}

function getDescription(mode, status, mobile) {
  switch (mode) {
    case STEP.LOGIN:
      return "Continue managing your Manthan Pay business.";

    case STEP.MOBILE:
      return "Enter your mobile number to start or resume your onboarding.";

    case STEP.OTP:
      return `We sent a verification code to +91 ${mobile}.`;

    case STEP.PROFILE:
      return "Your mobile is verified. Tell us a little about yourself.";

    case STEP.STATUS:
      switch (status) {
        case "MOBILE_VERIFIED":
          return "Your mobile is verified. Complete your profile to continue.";

        case "PROFILE_COMPLETED":
          return "Your profile is complete. Continue with KYC verification.";

        case "KYC_SUBMITTED":
          return "Your KYC documents have been submitted and are being reviewed.";

        case "KYC_REJECTED":
          return "Some KYC information requires your attention.";

        case "SUSPENDED":
          return "Your account cannot currently perform normal operations.";

        case "BLOCKED":
          return "Please contact support regarding this account.";

        default:
          return "Continue your Manthan Pay onboarding.";
      }

    default:
      return "";
  }
}

function getStatusLabel(status) {
  switch (status) {
    case "MOBILE_VERIFIED":
      return "Mobile Verified";

    case "PROFILE_COMPLETED":
      return "Profile Completed";

    case "KYC_SUBMITTED":
      return "KYC Submitted";

    case "KYC_APPROVED":
      return "KYC Approved";

    case "ACTIVE":
      return "Active";

    case "KYC_REJECTED":
      return "KYC Action Required";

    case "SUSPENDED":
      return "Suspended";

    case "BLOCKED":
      return "Blocked";

    default:
      return "Onboarding";
  }
}

function getStatusTitle(status) {
  switch (status) {
    case "MOBILE_VERIFIED":
      return "Your mobile number is verified";

    case "PROFILE_COMPLETED":
      return "Your profile is ready for KYC";

    case "KYC_SUBMITTED":
      return "Your KYC is under review";

    case "KYC_REJECTED":
      return "KYC needs your attention";

    case "SUSPENDED":
      return "Account access is suspended";

    case "BLOCKED":
      return "Account access is blocked";

    default:
      return "Your onboarding status";
  }
}

function getStatusMessage(status) {
  switch (status) {
    case "MOBILE_VERIFIED":
      return "Continue completing your partner profile.";

    case "PROFILE_COMPLETED":
      return "Your profile has been completed. The next step is KYC verification.";

    case "KYC_SUBMITTED":
      return "Your documents are currently being reviewed. You do not need to register again.";

    case "KYC_REJECTED":
      return "Please review the KYC information and submit the required corrections.";

    case "SUSPENDED":
      return "Please contact the Manthan Pay support team for assistance.";

    case "BLOCKED":
      return "Please contact the Manthan Pay support team.";

    default:
      return "Continue your onboarding.";
  }
}