import "./body.css";
import bodyImage from "../assets/images/servicemedia1.jpg";

function MediaBody() {
    return (
        <section className="media-body">
            <div className="media-body__label">
                <span>01</span>
                <span>What We Do</span>
            </div>

            <div className="media-body__content">
                <div className="media-body__text">
                    <h2>
                        Making ideas
                        <span> impossible to ignore.</span>
                    </h2>

                    <p>
                        In a world where attention is increasingly difficult to
                        earn, communication is more than simply getting a
                        message out. It is about knowing what to say, who to
                        say it to, and how to make it matter.
                    </p>

                    <p>
                        We work with organizations to develop stronger
                        communication strategies, create compelling content,
                        build their media presence, and turn complex ideas
                        into stories people can understand and remember.
                    </p>
                </div>

                <div className="media-body__image">
                    <img
                        src={bodyImage}
                        alt="Media and communications team"
                    />
                </div>
            </div>
        </section>
    );
}

export default MediaBody;