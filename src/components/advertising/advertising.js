const Advertising = ({title, value, href, description}) => {
    return (
        <div>
            <h4>{title} <a href={href}>{value}</a></h4>
            <div>
                {description}
            </div>
        </div>
    )
}
export default Advertising