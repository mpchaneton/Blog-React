
import classNames from "classnames";
import Tag from "../Tag";
import Author from "../Author/Author"
import Paragraph from "../Paragraph/Paragraph";
import Time from "../Time/Time";
import "./Card.scss";



const Card = ({
    tags,
    title,
    date,
    extract,
    author,
    readTime,
    isExtended = false,
    isReversed = false,

}) => {

    return (


        <article 
        
        className={classNames("card", {
            "is-extended": isExtended,
            "is-reversed" : isReversed,
        })}

        >
            <img src="/src/images/posts/torta.jpg" alt="imagen de torta"></img>
            <section>
                <div className="card-content">

                    <header>

                        <div class="tags">

                            {tags?.map((tag, index) =>
                                <Tag key={index}>{tag}</Tag>
                            )}

                        </div>

                        <h2 className="heading heading-sm font-bold">{title}</h2>

                        <Time>{date}</Time>

                    </header>
                    <Paragraph>{extract}</Paragraph>

                </div>

                <footer>

                <Author name={author}/>

                    <Paragraph size="xs" isHelpText as="span">{readTime}</Paragraph>
                </footer>

            </section>

        </article >






    )

}

export default Card;



