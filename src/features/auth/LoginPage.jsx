import { useEffect, useState } from "react";

import {
    ArrowRight,
    ShieldCheck,
    ChevronLeft,
    ChevronRight,
    Landmark,
    Receipt,
    Send,
    Smartphone,
    Gift,
} from "lucide-react";
import { Brand } from "../../components/Brand.jsx";
import { ValidatedForm } from "../../components/ValidatedForm.jsx";
import { V } from "../../domain/businessRules.js";
import { demoAuthService } from "../../services/demoAuthService.js";

const LOGIN_FIELDS = [
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

const MOBILE_FIELDS = [
    {
        k: "mobile",
        label: "Mobile number",
        type: "num",
        max: 10,
        validate: V.mobile,
    },
];

const LOGIN_SLIDES = [
    {
        id: "aeps",
        title: "AEPS Banking",
        image: `${import.meta.env.BASE_URL}login-slides/01-aeps.png`,
        alt: "Manthan Pay AEPS Banking",
    },
    {
        id: "bbps",
        title: "BBPS Bill Payments",
        image: `${import.meta.env.BASE_URL}login-slides/02-bbps.png`,
        alt: "Manthan Pay BBPS Bill Payments",
    },
    {
        id: "dmt",
        title: "Domestic Money Transfer",
        image: `${import.meta.env.BASE_URL}login-slides/03-dmt.png`,
        alt: "Manthan Pay Domestic Money Transfer",
    },
    {
        id: "services",
        title: "More Services More Business",
        image: `${import.meta.env.BASE_URL}login-slides/04-services.png`,
        alt: "Manthan Pay More Services",
    },
    {
        id: "offers",
        title: "Partner Offers",
        image: `${import.meta.env.BASE_URL}login-slides/05-offers.png`,
        alt: "Manthan Pay Partner Offers",
    },
];

export default function LoginPage({ onLogin }) {
    const [mode, setMode] = useState("login");

    /*
     * Signup states
     */
    const [signupStep, setSignupStep] = useState("mobile");
    const [signupMobile, setSignupMobile] = useState("");
    const [otp, setOtp] = useState("");
    const [otpError, setOtpError] = useState("");
    const [message, setMessage] = useState("");

    const [activeSlide, setActiveSlide] = useState(0);

    const DEMO_OTP = "123456";

    useEffect(() => {
        const id = setInterval(() => {
            setActiveSlide((current) => (current + 1) % LOGIN_SLIDES.length);
        }, 5000);

        return () => clearInterval(id);
    }, []);

    const previousSlide = () => {
        setActiveSlide(
            (current) =>
                (current - 1 + LOGIN_SLIDES.length) % LOGIN_SLIDES.length
        );
    };

    const nextSlide = () => {
        setActiveSlide(
            (current) => (current + 1) % LOGIN_SLIDES.length
        );
    };



    /*
     * ------------------------------------------------------------
     * LOGIN
     * ------------------------------------------------------------
     */

    const login = async (values) => {
        const users = demoAuthService.users();

        const user = users.find(
            (x) => x.mobile === values.mobile
        );

        if (!user) {
            return {
                mobile:
                    "No account found with this mobile number. Please sign up first.",
            };
        }

        if (user.password !== values.password) {
            return {
                password: "Incorrect password.",
            };
        }

        /*
         * Only active users should enter dashboard.
         */
        if (
            user.status &&
            user.status !== "ACTIVE" &&
            user.status !== "KYC_APPROVED"
        ) {
            setMessage(
                "Your onboarding is not complete yet. Please continue registration."
            );

            setMode("signup");
            setSignupMobile(user.mobile);
            setSignupStep("status");

            return;
        }

        onLogin(user);
    };

    /*
     * ------------------------------------------------------------
     * SIGNUP - MOBILE
     * ------------------------------------------------------------
     */

    const checkSignupMobile = async (values) => {
        const mobile = values.mobile;

        setSignupMobile(mobile);
        setMessage("");

        await new Promise((resolve) =>
            setTimeout(resolve, 500)
        );

        const user = demoAuthService
            .users()
            .find((x) => x.mobile === mobile);

        /*
         * Completely new mobile
         */
        if (!user) {
            setSignupStep("otp");
            setMessage(
                `OTP sent to +91 ${mobile}.`
            );

            console.log("DEMO OTP:", DEMO_OTP);

            return;
        }

        /*
         * Existing active account
         */
        if (
            user.status === "ACTIVE" ||
            user.status === "KYC_APPROVED"
        ) {
            setMode("login");

            setMessage(
                "This mobile number is already registered. Please login."
            );

            return;
        }

        /*
         * Existing but incomplete onboarding
         */
        setSignupStep("status");
        setMessage(
            getStatusMessage(user.status)
        );
    };

    /*
     * ------------------------------------------------------------
     * OTP
     * ------------------------------------------------------------
     */

    const verifyOtp = () => {
        setOtpError("");

        if (!/^\d{6}$/.test(otp)) {
            setOtpError("Enter the 6-digit OTP.");
            return;
        }

        if (otp !== DEMO_OTP) {
            setOtpError("Invalid OTP. Please try again.");
            return;
        }

        /*
         * Save onboarding context temporarily.
         *
         * Later the backend will maintain this state.
         */
        sessionStorage.setItem(
            "onboardingMobile",
            signupMobile
        );

        sessionStorage.setItem(
            "onboardingStatus",
            "MOBILE_VERIFIED"
        );

        /*
         * Redirect to separate profile page.
         */
        window.location.href =
            `${import.meta.env.BASE_URL}onboarding/profile`;
    };

    /*
     * ------------------------------------------------------------
     * PROFILE
     * ------------------------------------------------------------
     */

    const completeSignup = async (values) => {
        const user = {
            name: values.name.trim(),
            mobile: signupMobile,
            email: values.email,
            pan: values.pan.toUpperCase(),
            password: values.password,
            mpin: values.mpin,

            status: "PROFILE_COMPLETED",

            wallet: 500,
            txns: [],
        };

        demoAuthService.register(user);

        setSignupStep("status");

        setMessage(
            "Profile completed. Continue with KYC verification."
        );
    };

    /*
     * ------------------------------------------------------------
     * RENDER
     * ------------------------------------------------------------
     */

    return (
        <div className="login-page">
            {/* LEFT SIDE */}
            <section className="login-brand-panel">

                <div className="login-brand-content">

                    {/* <Brand height={58} /> */}

                    <div className="login-business-slider">

                        {LOGIN_SLIDES.map((slide, index) => (
                            <div
                                key={slide.id}
                                className={`login-slide ${index === activeSlide ? "active" : ""
                                    }`}
                            >
                                <div className="login-slide-image">
                                    <img
                                        src={slide.image}
                                        alt={slide.alt}
                                    />
                                </div>
                            </div>
                        ))}

                        <div className="login-slider-controls">

                            <button
                                type="button"
                                onClick={previousSlide}
                                aria-label="Previous slide"
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <div className="login-slider-dots">

                                {LOGIN_SLIDES.map((slide, index) => (
                                    <button
                                        key={slide.id}
                                        type="button"
                                        className={index === activeSlide ? "active" : ""}
                                        onClick={() => setActiveSlide(index)}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}

                            </div>

                            <button
                                type="button"
                                onClick={nextSlide}
                                aria-label="Next slide"
                            >
                                <ChevronRight size={18} />
                            </button>

                        </div>

                    </div>

                </div>

            </section>

            {/* RIGHT SIDE */}
            <section className="login-form-panel">
                <div className="login-card">

                    <div className="login-mobile-brand">
                        <Brand height={52} />
                    </div>

                    <div className="login-heading">
                        <span>
                            {mode === "login"
                                ? "PARTNER LOGIN"
                                : "PARTNER ONBOARDING"}
                        </span>

                        <h2>
                            {mode === "login"
                                ? "Welcome back"
                                : getSignupHeading(signupStep)}
                        </h2>

                        <p>
                            {mode === "login"
                                ? "Login to access your Manthan Pay partner dashboard."
                                : getSignupDescription(signupStep, signupMobile)}
                        </p>
                    </div>

                    {/* TABS */}
                    <div className="login-tabs">
                        <button
                            type="button"
                            className={mode === "login" ? "active" : ""}
                            onClick={() => {
                                setMode("login");
                                setMessage("");
                            }}
                        >
                            Login
                        </button>

                        <button
                            type="button"
                            className={mode === "signup" ? "active" : ""}
                            onClick={() => {
                                setMode("signup");
                                setSignupStep("mobile");
                                setMessage("");
                            }}
                        >
                            Create account
                        </button>
                    </div>

                    {message && (
                        <div className="login-message">
                            {message}
                        </div>
                    )}

                    {/* =====================================================
              LOGIN
          ===================================================== */}

                    {mode === "login" && (
                        <>
                            <ValidatedForm
                                key="login-page"
                                fields={LOGIN_FIELDS}
                                submitLabel="Login securely"
                                onSubmit={login}
                            />

                            <div className="login-options">
                                <button
                                    type="button"
                                    onClick={() =>
                                        setMessage(
                                            "Password reset will be connected to the backend."
                                        )
                                    }
                                >
                                    Forgot password?
                                </button>
                            </div>
                        </>
                    )}

                    {/* =====================================================
              SIGNUP - MOBILE
          ===================================================== */}

                    {mode === "signup" &&
                        signupStep === "mobile" && (
                            <ValidatedForm
                                key="signup-mobile"
                                fields={MOBILE_FIELDS}
                                submitLabel="Continue"
                                onSubmit={checkSignupMobile}
                            />
                        )}

                    {/* =====================================================
              SIGNUP - OTP
          ===================================================== */}

                    {mode === "signup" &&
                        signupStep === "otp" && (
                            <div className="signup-step">

                                <div className="signup-mobile-number">
                                    +91 {signupMobile}
                                </div>

                                <label>
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
                                    className="login-secondary-action"
                                    onClick={() => {
                                        setSignupStep("mobile");
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

                    {/* =====================================================
              SIGNUP - STATUS
          ===================================================== */}

                    {mode === "signup" &&
                        signupStep === "status" && (
                            <div className="signup-status">

                                <div className="status-badge">
                                    Onboarding
                                </div>

                                <h3>
                                    Continue your onboarding
                                </h3>

                                <p>
                                    {getStatusMessage(
                                        demoAuthService
                                            .users()
                                            .find(
                                                (x) =>
                                                    x.mobile === signupMobile
                                            )?.status
                                    )}
                                </p>

                                <button
                                    type="button"
                                    className="btn btn-primary btn-full"
                                    onClick={() => {
                                        setMessage(
                                            "KYC module will continue from here."
                                        );
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                        )}

                    <div className="login-footer-note">
                        <span>
                            By continuing, you agree to Manthan Pay's
                        </span>

                        <span>
                            Terms of Service and Privacy Policy.
                        </span>
                    </div>

                </div>
            </section>
        </div>
    );
}

/*
|--------------------------------------------------------------------------
| Profile fields
|--------------------------------------------------------------------------
*/

function getProfileFields() {
    return [
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
}

/*
|--------------------------------------------------------------------------
| Helpers
|--------------------------------------------------------------------------
*/

function getSignupHeading(step) {
    switch (step) {
        case "mobile":
            return "Start your onboarding";

        case "otp":
            return "Verify your mobile";

        case "profile":
            return "Complete your profile";

        case "status":
            return "Continue your onboarding";

        default:
            return "Create your account";
    }
}

function getSignupDescription(step, mobile) {
    switch (step) {
        case "mobile":
            return "Enter your mobile number to start or resume your onboarding.";

        case "otp":
            return `We sent a verification code to +91 ${mobile}.`;

        case "profile":
            return "Your mobile is verified. Complete your basic profile.";

        case "status":
            return "Your onboarding record already exists. Continue from where you stopped.";

        default:
            return "";
    }
}

function getStatusMessage(status) {
    switch (status) {
        case "MOBILE_VERIFIED":
            return "Your mobile is verified. Please complete your profile.";

        case "PROFILE_COMPLETED":
            return "Your profile is complete. Continue with KYC verification.";

        case "KYC_SUBMITTED":
            return "Your KYC is currently under review.";

        case "KYC_REJECTED":
            return "Your KYC requires some corrections.";

        case "SUSPENDED":
            return "Your account is currently suspended. Please contact support.";

        case "BLOCKED":
            return "Your account is blocked. Please contact support.";

        default:
            return "Continue your Manthan Pay onboarding.";
    }
}