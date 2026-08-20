import { useState } from "react";
import "./BloomOClock.css";
import bloomOClockVideo from "../../asset/images/The_Bloom_Experience.mp4";

function BloomOClock() {
    const [vendorFormOpen, setVendorFormOpen] = useState(false);

    const handleWhatsApp = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const name = String(formData.get("name") || "").trim();
        const phone = String(formData.get("phone") || "").trim();
        const message = String(formData.get("message") || "").trim();

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

    const handleVendorSubmit = (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        const form = event.currentTarget;
        const formData = new FormData(form);

        const brandName = String(
            formData.get("brandName") || ""
        ).trim();

        const brandOwner = String(
            formData.get("brandOwner") || ""
        ).trim();

        const vendorType = String(
            formData.get("vendorType") || ""
        ).trim();

        const about = String(
            formData.get("about") || ""
        ).trim();

        const phone = String(
            formData.get("vendorPhone") || ""
        ).trim();

        const email = String(
            formData.get("email") || ""
        ).trim();

        const subject = `BloomTown Vendor Application — ${brandName}`;

        const body = `BloomTown Vendor Application

Brand Name:
${brandName}

Brand Owner:
${brandOwner}

What will be sold:
${vendorType}

About the Brand:
${about}

Phone / WhatsApp:
${phone}

Email:
${email}`;

        window.location.href =
            `mailto:?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;
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
                    <span className="bloom-word">
                        BLOOM
                    </span>

                    <span className="clock-word">
                        {" "}O'CLOCK
                    </span>
                </div>

            </div>


            {/* =====================================================
                THREE CARDS
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


                {/* =================================================
                    2. VENDORS
                ================================================= */}

                <div className="bloom-oclock__vendors">

                    {!vendorFormOpen ? (

                        <>
                            <p className="bloom-oclock__eyebrow">
                                BE PART OF THE FEST
                            </p>

                            <h3>
                                BloomTown <span>Vendors.</span>
                            </h3>

                            <p className="bloom-oclock__vendor-intro">
                                Bring your brand, products and
                                creativity to BloomTown Family Fest
                                and be part of the celebration.
                            </p>

                            <div className="bloom-oclock__vendor-types">

                                <span>Food</span>
                                <span>Fashion</span>
                                <span>Lifestyle</span>
                                <span>Kids</span>
                                <span>Creative</span>
                                <span>Other</span>

                            </div>

                            <button
                                type="button"
                                className="bloom-oclock__vendor-button"
                                onClick={() =>
                                    setVendorFormOpen(true)
                                }
                            >
                                APPLY TO JOIN BLOOMTOWN ↗
                            </button>
                        </>

                    ) : (

                        <>
                            <div className="bloom-oclock__vendor-form-top">

                                <div>
                                    <p className="bloom-oclock__eyebrow">
                                        VENDOR APPLICATION
                                    </p>

                                    <h3>
                                        Join <span>BloomTown.</span>
                                    </h3>
                                </div>

                                <button
                                    type="button"
                                    className="bloom-oclock__vendor-close"
                                    onClick={() =>
                                        setVendorFormOpen(false)
                                    }
                                    aria-label="Close vendor application"
                                >
                                    ×
                                </button>

                            </div>


                            <form
                                className="bloom-oclock__vendor-form"
                                onSubmit={handleVendorSubmit}
                            >

                                <label>
                                    <span>
                                        Brand Name
                                    </span>

                                    <input
                                        type="text"
                                        name="brandName"
                                        placeholder="Your brand name"
                                        required
                                    />
                                </label>


                                <label>
                                    <span>
                                        Brand Owner
                                    </span>

                                    <input
                                        type="text"
                                        name="brandOwner"
                                        placeholder="Your name"
                                        required
                                    />
                                </label>


                                <label>
                                    <span>
                                        What will be sold?
                                    </span>

                                    <select
                                        name="vendorType"
                                        defaultValue=""
                                        required
                                    >
                                        <option
                                            value=""
                                            disabled
                                        >
                                            Select a category
                                        </option>

                                        <option value="Food">
                                            Food
                                        </option>

                                        <option value="Fashion">
                                            Fashion
                                        </option>

                                        <option value="Lifestyle">
                                            Lifestyle
                                        </option>

                                        <option value="Kids">
                                            Kids
                                        </option>

                                        <option value="Creative">
                                            Creative
                                        </option>

                                        <option value="Other">
                                            Other
                                        </option>
                                    </select>
                                </label>


                                <label>
                                    <span>
                                        Tell us about yourself
                                    </span>

                                    <textarea
                                        name="about"
                                        placeholder="Tell us a little about your brand..."
                                        rows={3}
                                        required
                                    />
                                </label>


                                <label>
                                    <span>
                                        Phone / WhatsApp
                                    </span>

                                    <input
                                        type="tel"
                                        name="vendorPhone"
                                        placeholder="080 0000 0000"
                                        required
                                    />
                                </label>


                                <label>
                                    <span>
                                        Email
                                    </span>

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        required
                                    />
                                </label>


                                <button
                                    type="submit"
                                    className="bloom-oclock__vendor-submit"
                                >
                                    APPLY TO JOIN BLOOMTOWN ↗
                                </button>

                            </form>
                        </>

                    )}

                </div>


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

        </section>
    );
}

export default BloomOClock;