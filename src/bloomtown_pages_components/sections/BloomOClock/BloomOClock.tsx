import "./BloomOClock.css";
import bloomOClockVideo from "../../asset/images/The_Bloom_Experience.mp4";

function BloomOClock() {
    const handleWhatsApp = (event: React.FormEvent<HTMLFormElement>) => {
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

        const whatsappUrl = `https://wa.me/2349166425251?text=${encodeURIComponent(
            whatsappMessage
        )}`;

        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    };

    return (
        <section className="bloom-oclock" id="bloom-oclock">

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
                    <span className="bloom-word">BLOOM</span>
                    <span className="clock-word"> O'CLOCK</span>
                </div>
            </div>


            {/* =====================================================
                CONTENT
            ===================================================== */}

            <div className="bloom-oclock__content">

                {/* =================================================
                    TICKETS
                ================================================= */}

                <div className="bloom-oclock__tickets">

                    <p className="bloom-oclock__eyebrow">
                        JOIN THE CELEBRATION
                    </p>

                    <h2>
                        It's <span>Bloom O'Clock.</span>
                    </h2>

                    <p className="bloom-oclock__description">
                        Get your tickets and come experience a day of
                        family, creativity, connection and unforgettable
                        memories.
                    </p>

                    <div className="bloom-oclock__ticket-list">

                        <a
                            href="https://paystack.shop/bloomtown-family-fest?product=bloomtown-family-fest---adult-ticket-nbzfnh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bloom-oclock__ticket"
                        >
                            <div>
                                <small>ADULT</small>
                                <strong>Adult Ticket</strong>
                            </div>

                            <b>₦10,000</b>
                        </a>


                        <a
                            href="https://paystack.shop/bloomtown-family-fest?product=bloomtown-family-fest---childrens-ticket-yctrmc"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bloom-oclock__ticket"
                        >
                            <div>
                                <small>CHILD · 4–17</small>
                                <strong>Children's Ticket</strong>
                            </div>

                            <b>₦5,000</b>
                        </a>


                        <div className="bloom-oclock__free-ticket">
                            <span>Children Under 4</span>
                            <strong>FREE</strong>
                        </div>

                    </div>

                </div>


                {/* =================================================
                    WHATSAPP CONTACT
                ================================================= */}

                <div className="bloom-oclock__contact">

                    <p className="bloom-oclock__eyebrow">
                        HAVE A QUESTION?
                    </p>

                    <h3>
                        Talk to <span>BloomTown.</span>
                    </h3>

                    <p className="bloom-oclock__contact-intro">
                        Need help with tickets, vendors, the festival,
                        or anything else? Send us a message.
                    </p>


                    <form
                        className="bloom-oclock__form"
                        onSubmit={handleWhatsApp}
                    >

                        <label>
                            <span>Name</span>

                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                            />
                        </label>


                        <label>
                            <span>Phone Number(whatapp)</span>

                            <input
                                type="tel"
                                name="phone"
                                placeholder="080 0000 0000"
                                required
                            />
                        </label>


                        <label>
                            <span>Message</span>

                            <textarea
                                name="message"
                                placeholder="How can we help?"
                                rows={4}
                                required
                            />
                        </label>


                        <button type="submit">
                            Send 
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