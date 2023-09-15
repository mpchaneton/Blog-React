import "./Author.scss"

const Author = ({name, avatarURL ="https://i.pravatar.cc/300", avatarAlt = "Avatar de un autor"}) => {

return (

<div className="author">

<img src={avatarURL} alt={avatarAlt}></img>

<span className="paragraph paragraph-xs font-bold">{name}</span>

</div>

)
}

export default Author;