const Advertising = ({value, href, description}) => {
    return (
        <div>
            <a href={href}>{value}</a>
            <div>
                {description}
            </div>
        </div>
    )
}
export default Advertising