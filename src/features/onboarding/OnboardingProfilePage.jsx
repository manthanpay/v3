import { useState } from "react";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { Brand } from "../../components/Brand.jsx";
import { ValidatedForm } from "../../components/ValidatedForm.jsx";
import { V } from "../../domain/businessRules.js";
import { demoAuthService } from "../../services/demoAuthService.js";

export default function OnboardingProfilePage() {
    const [mobile] = useState(
        () => sessionStorage.getItem("onboardingMobile") || ""
    );

    const completeProfile = async (values) => {
        if (!mobile) {
            return {
                name: "Your onboarding session has expired. Please start again.",
            };
        }

        const user = {
            name: values.name.trim(),
            mobile,
            email: values.email,
            pan: values.pan.toUpperCase(),
            password: values.password,
            mpin: values.mpin,

            status: "PROFILE_COMPLETED",

            wallet: 500,
            txns: [],
        };

        demoAuthService.register(user);

        /*
         * Temporary frontend flow.
         *
         * Later this will call:
         * POST /api/v1/onboarding/profile
         */

        sessionStorage.setItem(
            "onboardingStatus",
            "PROFILE_COMPLETED"
        );

        window.location.href =
            `${import.meta.env.BASE_URL}onboarding/kyc`;

        return null;
    };

    if (!mobile) {
        return (
            <div className="onboarding-page">
                <div className="onboarding-card">
                    <Brand height={58} />

                    <div className="onboarding-heading">
                        <span>ONBOARDING</span>
                        <h1>Session expired</h1>
                        <p>
                            Please start your registration again to continue.
                        </p>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary btn-full"
                        onClick={() => {
                            window.location.href =
                                `${import.meta.env.BASE_URL}login`;
                        }}
                    >
                        Start again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="onboarding-page">
            <div className="onboarding-shell">

                {/* LEFT INFORMATION PANEL */}
                <section className="onboarding-info">

                    <Brand height={62} />

                    <div className="onboarding-info-content">

                        <span className="onboarding-eyebrow">
                            PARTNER ONBOARDING
                        </span>

                        <h1>
                            Let's set up your
                            <br />
                            <strong>Manthan Pay account.</strong>
                        </h1>

                        <p>
                            Your mobile number has been verified.
                            Complete your basic details to continue
                            with your partner onboarding.
                        </p>

                        <div className="onboarding-progress">

                            <div className="onboarding-progress-item active">
                                <div className="progress-number">
                                    ✓
                                </div>

                                <div>
                                    <strong>Mobile verified</strong>
                                    <span>
                                        +91 {mobile}
                                    </span>
                                </div>
                            </div>

                            <div className="onboarding-progress-line" />

                            <div className="onboarding-progress-item current">
                                <div className="progress-number">
                                    2
                                </div>

                                <div>
                                    <strong>Basic profile</strong>
                                    <span>
                                        Your personal details
                                    </span>
                                </div>
                            </div>

                            <div className="onboarding-progress-line" />

                            <div className="onboarding-progress-item">
                                <div className="progress-number">
                                    3
                                </div>

                                <div>
                                    <strong>KYC verification</strong>
                                    <span>
                                        Verify your identity
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div className="onboarding-security">
                            <ShieldCheck size={19} />

                            <div>
                                <strong>Your information is secure</strong>
                                <span>
                                    Your details are used only for
                                    account onboarding and verification.
                                </span>
                            </div>
                        </div>

                    </div>
                </section>

                {/* RIGHT FORM PANEL */}
                <section className="onboarding-form-panel">

                    <div className="onboarding-form-card">

                        <button
                            type="button"
                            className="onboarding-back"
                            onClick={() => {
                                window.location.href =
                                    `${import.meta.env.BASE_URL}login`;
                            }}
                        >
                            <ArrowLeft size={17} />
                            Back
                        </button>

                        <div className="onboarding-mobile-brand">
                            <Brand height={50} />
                        </div>

                        <div className="onboarding-form-heading">
                            <span>STEP 2 OF 3</span>

                            <h2>
                                Complete your profile
                            </h2>

                            <p>
                                Tell us a little about yourself to
                                create your Manthan Pay partner account.
                            </p>
                        </div>

                        <div className="verified-mobile">
                            <ShieldCheck size={16} />

                            Mobile verified:
                            <strong>+91 {mobile}</strong>
                        </div>

                        <ValidatedForm
                            key="onboarding-profile"
                            fields={PROFILE_FIELDS}
                            submitLabel="Continue to KYC"
                            onSubmit={completeProfile}
                        />

                        <p className="onboarding-form-note">
                            By continuing, you agree to Manthan Pay's
                            Terms of Service and Privacy Policy.
                        </p>

                    </div>

                </section>

            </div>
        </div>
    );
}


const PROFILE_FIELDS = [
    {
        k: "name",
        label: "Full name",
        validate: V.name,
        ph: "Enter your full name",
    },

    {
        k: "email",
        label: "Email address",
        validate: V.email,
        ph: "you@example.com",
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