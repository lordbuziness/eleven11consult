import { useState } from "react";
import "./BloomOClock.css";

import bloomOClockVideo from "../../asset/images/The_Bloom_Experience.mp4";

import {
    Sprout,
    Flower2,
    Crown,
    Sparkles,
    X,
} from "lucide-react";

function BloomOClock() {
    const [vendorFormOpen, setVendorFormOpen] = useState(false);
    const [vendorPackagesOpen, setVendorPackagesOpen] = useState(false);

    const handleWhatsApp = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(
            formData.get("name") || ""
        ).trim();

        const phone = String(
            formData.get("phone") || ""
        ).trim();

        const message = String(
            formData.get("message") || ""
        ).trim();

        const whatsappMessage = `Hello BloomTown!

Name: ${name}
Phone: ${phone}
Message:
${message}`;

        const whatsappUrl =
            `https://wa.me/2349166425251?text=${encodeURIComponent(
                whatsappMessage
            )}`;

        window.open(
            whatsappUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <section
            className="bloom-oclock"
            id="bloom-oclock"
        >

            {/* =====================================================
                VIDEO
            ===================================================== */}

            <div className="bloom-oclock__video">

                <video
                    className="bloom-oclock__video-player"
                    src={bloomOClockVideo}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    controls
                >
                    Your browser does not support the video tag.
                </video>

                <div className="bloom-oclock__video-label">

                    <span className="its-word">
                        IT'S
                    </span>

                    <span className="bloom-word">
                        BLOOM
                    </span>

                    <span className="clock-word">
                        O'CLOCK
                    </span>

                </div>

            </div>


            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div className="bloom-oclock__content">


                {/* =================================================
                    1. TICKETS
                ================================================= */}

                <div className="bloom-oclock__tickets">

                    <p className="bloom-oclock__eyebrow">
                        JOIN THE CELEBRATION
                    </p>

                    <h2>
                        It's <span>Bloom O'Clock.</span>
                    </h2>

                    <p className="bloom-oclock__description">
                        Get your tickets and come experience
                        a day of family, creativity, connection
                        and unforgettable memories.
                    </p>

                    <div className="bloom-oclock__ticket-list">

                        <a
                            href="https://paystack.shop/bloomtown-family-fest?product=bloomtown-family-fest---adult-ticket-nbzfnh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bloom-oclock__ticket"
                        >
                            <div>
                                <small>
                                    ADULT
                                </small>

                                <strong>
                                    Adult Ticket
                                </strong>
                            </div>

                            <b>
                                ₦10,000
                            </b>
                        </a>


                        <a
                            href="https://paystack.shop/bloomtown-family-fest?product=bloomtown-family-fest---childrens-ticket-yctrmc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bloom-oclock__ticket"
                        >
                            <div>
                                <small>
                                    CHILD · 4–17
                                </small>

                                <strong>
                                    Children's Ticket
                                </strong>
                            </div>

                            <b>
                                ₦5,000
                            </b>
                        </a>


                        <div className="bloom-oclock__free-ticket">

                            <span>
                                Children Under 4
                            </span>

                            <strong>
                                FREE
                            </strong>

                        </div>

                    </div>

                </div>

           {/* =====================================================
                vendors
            ===================================================== */}
                <div className="bloom-oclock__vendors">

    <p className="bloom-oclock__eyebrow">
        BE PART OF THE FEST
    </p>

    <h3>
        BloomTown <span>Vendors.</span>
    </h3>

    <p className="bloom-oclock__vendor-intro">
        Showcase your brand, connect with families,
        and grow your business at BloomTown Family Fest.
    </p>

    <div className="bloom-oclock__vendor-types">
        <span>Food</span>
        <span>Fashion</span>
        <span>Lifestyle</span>
        <span>Kids</span>
        <span>Creative</span>
    </div>

    <button
        type="button"
        className="bloom-oclock__vendor-button"
        onClick={() => setVendorPackagesOpen(true)}
    >
        VIEW VENDOR PACKAGES ↗
    </button>

</div>
{vendorPackagesOpen && (
    <div
        className="bloom-oclock__packages-overlay"
        onClick={() => setVendorPackagesOpen(false)}
    >

        <div
            className="bloom-oclock__packages-modal"
            onClick={(event) => event.stopPropagation()}
        >

            <button
                type="button"
                className="bloom-oclock__packages-close"
                onClick={() => setVendorPackagesOpen(false)}
                aria-label="Close vendor packages"
            >
                ×
            </button>


            <div className="bloom-oclock__packages-list">

                {/* BLOOM */}

                <div className="bloom-package bloom-package--green">

                    <div className="bloom-package__icon">
                        ✿
                    </div>

                    <div className="bloom-package__info">

                        <span className="bloom-package__name">
                            BLOOM
                        </span>

                        <strong className="bloom-package__price">
                            ₦40,000
                        </strong>

                        <small>
                            Average product price up to ₦5,000
                        </small>

                        <p>
                            2 Vendor Passes · Vendor Directory · Shared Power
                        </p>

                    </div>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bloom-package__button"
                    >
                        RESERVE ↗
                    </a>

                </div>


                {/* FLOURISH */}

                <div className="bloom-package bloom-package--orange">

                    <div className="bloom-package__icon">
                        ✦
                    </div>

                    <div className="bloom-package__info">

                        <span className="bloom-package__name">
                            FLOURISH
                        </span>

                        <strong className="bloom-package__price">
                            ₦60,000
                        </strong>

                        <small>
                            Average product price ₦5,001 – ₦30,000
                        </small>

                        <p>
                            Everything in Bloom · 3 Vendor Passes · 1 Social Media Feature
                        </p>

                    </div>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bloom-package__button"
                    >
                        RESERVE ↗
                    </a>

                </div>


                {/* THRIVE */}

                <div className="bloom-package bloom-package--teal">

                    <div className="bloom-package__icon">
                        ◆
                    </div>

                    <div className="bloom-package__info">

                        <span className="bloom-package__name">
                            THRIVE
                        </span>

                        <strong className="bloom-package__price">
                            ₦80,000
                        </strong>

                        <small>
                            Average product price ₦30,001 – ₦100,000
                        </small>

                        <p>
                            Everything in Flourish · 4 Vendor Passes · 2 Social Features · Vendor Map · Priority Setup
                        </p>

                    </div>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bloom-package__button"
                    >
                        RESERVE ↗
                    </a>

                </div>


                {/* SIGNATURE */}

                <div className="bloom-package bloom-package--gold">

                    <div className="bloom-package__icon">
                        ★
                    </div>

                    <div className="bloom-package__info">

                        <span className="bloom-package__name">
                            SIGNATURE
                        </span>

                        <strong className="bloom-package__price">
                            ₦100,000
                        </strong>

                        <small>
                            Average product price above ₦100,000
                        </small>

                        <p>
                            Everything in Thrive · 5 Vendor Passes · Prime Location · Spotlight Feature · VIP Loading · Vendor Support
                        </p>

                    </div>

                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bloom-package__button"
                    >
                        RESERVE ↗
                    </a>

                </div>

            </div>

        </div>

    </div>
)}

                {/* =================================================
                    3. TALK TO BLOOMTOWN
                ================================================= */}

                <div className="bloom-oclock__contact">

                    <p className="bloom-oclock__eyebrow">
                        HAVE A QUESTION?
                    </p>

                    <h3>
                        Talk to <span>BloomTown.</span>
                    </h3>

                    <p className="bloom-oclock__contact-intro">
                        Need help with tickets, vendors,
                        the festival, or anything else?
                        Send us a message.
                    </p>

                    <form
                        className="bloom-oclock__form"
                        onSubmit={handleWhatsApp}
                    >

                        <label>
                            <span>
                                Name
                            </span>

                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </label>


                        <label>
                            <span>
                                Phone / WhatsApp
                            </span>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="080 0000 0000"
                                required
                            />
                        </label>


                        <label>
                            <span>
                                Message
                            </span>

                            <textarea
                                name="message"
                                placeholder="How can we help?"
                                rows={4}
                                required
                            />

                        </label>


                        <button type="submit">
                            SEND
                        </button>

                    </form>

                    <p className="bloom-oclock__whatsapp-note">
                        We will contact you via WhatsApp.
                    </p>

                </div>

            </div>


            {/* =====================================================
                VENDOR PACKAGE POPUP
            ===================================================== */}

            {vendorFormOpen && (

                <div
                    className="bloom-vendor-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="vendor-modal-title"
                >

                    <div
                        className="bloom-vendor-modal__backdrop"
                        onClick={() =>
                            setVendorFormOpen(false)
                        }
                    />

                    <div className="bloom-vendor-modal__card">

                        {/* HEADER */}

                        <div className="bloom-vendor-modal__header">

                            <div>

                                <p className="bloom-oclock__eyebrow">
                                    VENDOR BOOKINGS
                                </p>

                                <h2 id="vendor-modal-title">
                                    Choose your{" "}
                                    <span>
                                        perfect fit.
                                    </span>
                                </h2>

                                <p>
                                    Reserve your booth at
                                    BloomTown Family Fest 2026.
                                </p>

                            </div>


                            <button
                                type="button"
                                className="bloom-vendor-modal__close"
                                onClick={() =>
                                    setVendorFormOpen(false)
                                }
                                aria-label="Close vendor packages"
                            >
                                <X />
                            </button>

                        </div>


                        {/* PACKAGES */}

                        <div className="bloom-vendor-packages">


                            {/* BLOOM */}

                            <div className="bloom-vendor-package bloom-vendor-package--bloom">

                                <div className="bloom-vendor-package__icon">
                                    <Sprout />
                                </div>

                                <div className="bloom-vendor-package__info">

                                    <span>
                                        BLOOM
                                    </span>

                                    <h3>
                                        ₦40,000
                                    </h3>

                                    <p>
                                        Products up to ₦5,000
                                    </p>

                                </div>

                                <div className="bloom-vendor-package__benefits">

                                    <span>
                                        2 Vendor Passes
                                    </span>

                                    <span>
                                        Vendor Directory
                                    </span>

                                    <span>
                                        Shared Power
                                    </span>

                                </div>

                                {/* REPLACE # WITH PAYSTACK LINK */}

                                <a
                                    href="#"
                                    className="bloom-vendor-package__button"
                                >
                                    RESERVE ↗
                                </a>

                            </div>


                            {/* FLOURISH */}

                            <div className="bloom-vendor-package bloom-vendor-package--flourish">

                                <div className="bloom-vendor-package__icon">
                                    <Flower2 />
                                </div>

                                <div className="bloom-vendor-package__info">

                                    <span>
                                        FLOURISH
                                    </span>

                                    <h3>
                                        ₦60,000
                                    </h3>

                                    <p>
                                        Products ₦5,001–₦30,000
                                    </p>

                                </div>

                                <div className="bloom-vendor-package__benefits">

                                    <span>
                                        3 Vendor Passes
                                    </span>

                                    <span>
                                        Everything in Bloom
                                    </span>

                                    <span>
                                        1 Social Feature
                                    </span>

                                </div>

                                {/* REPLACE # WITH PAYSTACK LINK */}

                                <a
                                    href="#"
                                    className="bloom-vendor-package__button"
                                >
                                    RESERVE ↗
                                </a>

                            </div>


                            {/* THRIVE */}

                            <div className="bloom-vendor-package bloom-vendor-package--thrive">

                                <div className="bloom-vendor-package__icon">
                                    <Sparkles />
                                </div>

                                <div className="bloom-vendor-package__info">

                                    <span>
                                        THRIVE
                                    </span>

                                    <h3>
                                        ₦80,000
                                    </h3>

                                    <p>
                                        Products ₦30,001–₦100,000
                                    </p>

                                </div>

                                <div className="bloom-vendor-package__benefits">

                                    <span>
                                        4 Vendor Passes
                                    </span>

                                    <span>
                                        2 Social Features
                                    </span>

                                    <span>
                                        Logo on Vendor Map
                                    </span>

                                </div>

                                {/* REPLACE # WITH PAYSTACK LINK */}

                                <a
                                    href="#"
                                    className="bloom-vendor-package__button"
                                >
                                    RESERVE ↗
                                </a>

                            </div>


                            {/* SIGNATURE */}

                            <div className="bloom-vendor-package bloom-vendor-package--signature">

                                <div className="bloom-vendor-package__icon">
                                    <Crown />
                                </div>

                                <div className="bloom-vendor-package__info">

                                    <span>
                                        SIGNATURE
                                    </span>

                                    <h3>
                                        ₦100,000
                                    </h3>

                                    <p>
                                        Products above ₦100,000
                                    </p>

                                </div>

                                <div className="bloom-vendor-package__benefits">

                                    <span>
                                        5 Vendor Passes
                                    </span>

                                    <span>
                                        Prime Booth Location
                                    </span>

                                    <span>
                                        Vendor Support
                                    </span>

                                </div>

                                {/* REPLACE # WITH PAYSTACK LINK */}

                                <a
                                    href="#"
                                    className="bloom-vendor-package__button"
                                >
                                    RESERVE ↗
                                </a>

                            </div>

                        </div>


                        <div className="bloom-vendor-modal__footer">

                            <span>
                                LIMITED SPACES AVAILABLE
                            </span>

                            <p>
                                Need help choosing a package?
                                Contact BloomTown on WhatsApp.
                            </p>

                        </div>

                    </div>

                </div>

            )}

        </section>
    );
}

export default BloomOClock;