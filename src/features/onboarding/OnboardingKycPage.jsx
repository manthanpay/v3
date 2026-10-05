import { useState } from "react";
import {
    ArrowLeft,
    CheckCircle2,
    FileCheck2,
    ShieldCheck,
    Upload,
} from "lucide-react";

import { Brand } from "../../components/Brand.jsx";
import { V } from "../../domain/businessRules.js";
import { demoAuthService } from "../../services/demoAuthService.js";

export default function OnboardingKycPage() {
    const [mobile] = useState(
        () => sessionStorage.getItem("onboardingMobile") || ""
    );

    const [documentType, setDocumentType] = useState("");
    const [documentNumber, setDocumentNumber] = useState("");
    const [pan, setPan] = useState("");
    const [documentFile, setDocumentFile] = useState(null);
    const [consent, setConsent] = useState(false);

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const next = {};

        if (!pan.trim()) {
            next.pan = "PAN number is required.";
        } else {
            const panError = V.pan(pan.toUpperCase());

            if (panError) {
                next.pan = panError;
            }
        }

        if (!documentType) {
            next.documentType = "Please select a document.";
        }

        if (!documentNumber.trim()) {
            next.documentNumber = "Document number is required.";
        }

        if (!documentFile) {
            next.documentFile = "Please upload your document.";
        }

        if (!consent) {
            next.consent = "Please confirm the information.";
        }

        setErrors(next);

        return Object.keys(next).length === 0;
    };

    const submitKyc = async (e) => {
        e.preventDefault();

        if (!validate()) {
            return;
        }

        /*
         * Temporary frontend implementation.
         *
         * Later this becomes something like:
         *
         * POST /api/v1/onboarding/kyc
         *
         * with multipart/form-data for documents.
         */

        sessionStorage.setItem(
            "onboardingStatus",
            "KYC_SUBMITTED"
        );

        const existingUser = demoAuthService
            .users()
            .find((user) => user.mobile === mobile);

        if (existingUser) {
            demoAuthService.update({
                ...existingUser,
                pan: pan.toUpperCase(),
                status: "KYC_SUBMITTED",
            });
        }

        setSubmitted(true);
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

    if (submitted) {
        return (
            <div className="onboarding-page">
                <div className="kyc-success-card">

                    <div className="kyc-success-icon">
                        <CheckCircle2 size={34} />
                    </div>

                    <span className="kyc-success-eyebrow">
                        KYC SUBMITTED
                    </span>

                    <h1>
                        Your KYC is under review
                    </h1>

                    <p>
                        Your KYC information has been submitted successfully.
                        Our verification process will continue from here.
                    </p>

                    <div className="kyc-reference">
                        <span>Registered mobile</span>
                        <strong>+91 {mobile}</strong>
                    </div>

                    <div className="kyc-success-note">
                        <ShieldCheck size={17} />

                        <span>
                            We will update your onboarding status once
                            verification is completed.
                        </span>
                    </div>

                    <button
                        type="button"
                        className="btn btn-primary btn-full"
                        onClick={() => {
                            window.location.href =
                                `${import.meta.env.BASE_URL}login`;
                        }}
                    >
                        Back to login
                    </button>

                </div>
            </div>
        );
    }

    return (
        <div className="onboarding-page">

            <div className="onboarding-shell kyc-shell">

                {/* =====================================================
            LEFT SIDE
        ====================================================== */}

                <section className="onboarding-info">

                    <Brand height={62} />

                    <div className="onboarding-info-content">

                        <span className="onboarding-eyebrow">
                            KYC VERIFICATION
                        </span>

                        <h1>
                            Verify your
                            <br />
                            <strong>identity securely.</strong>
                        </h1>

                        <p>
                            Complete your KYC verification to move one
                            step closer to activating your Manthan Pay
                            partner account.
                        </p>

                        <div className="onboarding-progress">

                            {/* STEP 1 */}

                            <div className="onboarding-progress-item active">

                                <div className="progress-number">
                                    ✓
                                </div>

                                <div>
                                    <strong>
                                        Mobile verified
                                    </strong>

                                    <span>
                                        +91 {mobile}
                                    </span>
                                </div>

                            </div>

                            <div className="onboarding-progress-line" />

                            {/* STEP 2 */}

                            <div className="onboarding-progress-item active">

                                <div className="progress-number">
                                    ✓
                                </div>

                                <div>
                                    <strong>
                                        Basic profile
                                    </strong>

                                    <span>
                                        Profile information completed
                                    </span>
                                </div>

                            </div>

                            <div className="onboarding-progress-line" />

                            {/* STEP 3 */}

                            <div className="onboarding-progress-item current">

                                <div className="progress-number">
                                    3
                                </div>

                                <div>
                                    <strong>
                                        KYC verification
                                    </strong>

                                    <span>
                                        Verify your identity
                                    </span>
                                </div>

                            </div>

                        </div>

                        <div className="onboarding-security">

                            <ShieldCheck size={19} />

                            <div>
                                <strong>
                                    Your information is secure
                                </strong>

                                <span>
                                    Documents and personal information
                                    should only be processed through
                                    authorized verification services.
                                </span>
                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
            RIGHT SIDE
        ====================================================== */}

                <section className="onboarding-form-panel">

                    <div className="kyc-form-card">

                        <button
                            type="button"
                            className="onboarding-back"
                            onClick={() => {
                                window.location.href =
                                    `${import.meta.env.BASE_URL}onboarding/profile`;
                            }}
                        >
                            <ArrowLeft size={17} />
                            Back to profile
                        </button>


                        <div className="onboarding-mobile-brand">
                            <Brand height={50} />
                        </div>


                        <div className="onboarding-form-heading">

                            <span>
                                STEP 3 OF 3
                            </span>

                            <h2>
                                Complete your KYC
                            </h2>

                            <p>
                                Provide your identity details and
                                supporting document to continue.
                            </p>

                        </div>


                        <div className="verified-mobile">

                            <ShieldCheck size={16} />

                            Mobile verified:

                            <strong>
                                +91 {mobile}
                            </strong>

                        </div>


                        <form
                            className="kyc-form"
                            onSubmit={submitKyc}
                            noValidate
                        >

                            {/* PAN */}

                            <div className="kyc-field">

                                <label>
                                    PAN number
                                </label>

                                <input
                                    type="text"
                                    value={pan}
                                    maxLength={10}
                                    placeholder="ABCDE1234F"
                                    onChange={(e) => {
                                        const value = e.target.value
                                            .toUpperCase()
                                            .replace(/[^A-Z0-9]/g, "");

                                        setPan(value);

                                        if (errors.pan) {
                                            setErrors((prev) => ({
                                                ...prev,
                                                pan: "",
                                            }));
                                        }
                                    }}
                                />

                                {errors.pan && (
                                    <div className="kyc-field-error">
                                        {errors.pan}
                                    </div>
                                )}

                            </div>


                            {/* DOCUMENT TYPE */}

                            <div className="kyc-field">

                                <label>
                                    KYC document
                                </label>

                                <select
                                    value={documentType}
                                    onChange={(e) => {
                                        setDocumentType(e.target.value);

                                        if (errors.documentType) {
                                            setErrors((prev) => ({
                                                ...prev,
                                                documentType: "",
                                            }));
                                        }
                                    }}
                                >

                                    <option value="">
                                        Select document
                                    </option>

                                    <option value="AADHAAR">
                                        Aadhaar
                                    </option>

                                    <option value="VOTER_ID">
                                        Voter ID
                                    </option>

                                    <option value="PASSPORT">
                                        Passport
                                    </option>

                                    <option value="DRIVING_LICENSE">
                                        Driving Licence
                                    </option>

                                </select>

                                {errors.documentType && (
                                    <div className="kyc-field-error">
                                        {errors.documentType}
                                    </div>
                                )}

                            </div>


                            {/* DOCUMENT NUMBER */}

                            <div className="kyc-field">

                                <label>
                                    Document number
                                </label>

                                <input
                                    type="text"
                                    value={documentNumber}
                                    placeholder="Enter document number"
                                    onChange={(e) => {
                                        setDocumentNumber(e.target.value);

                                        if (errors.documentNumber) {
                                            setErrors((prev) => ({
                                                ...prev,
                                                documentNumber: "",
                                            }));
                                        }
                                    }}
                                />

                                {errors.documentNumber && (
                                    <div className="kyc-field-error">
                                        {errors.documentNumber}
                                    </div>
                                )}

                            </div>


                            {/* DOCUMENT UPLOAD */}

                            <div className="kyc-field">

                                <label>
                                    Upload document
                                </label>

                                <label className="kyc-upload">

                                    <input
                                        type="file"
                                        accept=".pdf,.jpg,.jpeg,.png"
                                        onChange={(e) => {
                                            const file =
                                                e.target.files?.[0] || null;

                                            setDocumentFile(file);

                                            if (errors.documentFile) {
                                                setErrors((prev) => ({
                                                    ...prev,
                                                    documentFile: "",
                                                }));
                                            }
                                        }}
                                    />

                                    <div className="kyc-upload-icon">
                                        <Upload size={21} />
                                    </div>

                                    <div className="kyc-upload-content">

                                        <strong>
                                            {documentFile
                                                ? documentFile.name
                                                : "Upload your document"}
                                        </strong>

                                        <span>
                                            PDF, JPG or PNG
                                        </span>

                                    </div>

                                    <div className="kyc-upload-button">
                                        Choose
                                    </div>

                                </label>

                                {errors.documentFile && (
                                    <div className="kyc-field-error">
                                        {errors.documentFile}
                                    </div>
                                )}

                            </div>


                            {/* CONSENT */}

                            <label className="kyc-consent">

                                <input
                                    type="checkbox"
                                    checked={consent}
                                    onChange={(e) => {
                                        setConsent(e.target.checked);

                                        if (errors.consent) {
                                            setErrors((prev) => ({
                                                ...prev,
                                                consent: "",
                                            }));
                                        }
                                    }}
                                />

                                <span>
                                    I confirm that the information and
                                    documents provided by me are accurate
                                    and belong to me.
                                </span>

                            </label>

                            {errors.consent && (
                                <div className="kyc-field-error consent-error">
                                    {errors.consent}
                                </div>
                            )}


                            <button
                                type="submit"
                                className="btn btn-primary btn-full kyc-submit"
                            >
                                <FileCheck2 size={17} />
                                Submit KYC
                            </button>

                        </form>


                        <p className="onboarding-form-note">
                            Your KYC information will be processed
                            securely for verification.
                        </p>

                    </div>

                </section>

            </div>

        </div>
    );
}