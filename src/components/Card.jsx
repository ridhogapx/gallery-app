const Card = (props) => {
    const { children, title, optional } = props 
    const style = ["m-5", "border-2", "p-5", "border-zinc-100", "rounded-lg", "lg:w-1/2"]

    if(optional !== null) {
        style.push(optional)
    }

    return (
        <div className={style.join(" ")}>
           <h2 className="text-lg font-semibold lg:text-xl">{ title }</h2>
           {children}
        </div>
    )
}

export default Card