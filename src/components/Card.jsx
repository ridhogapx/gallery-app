const Card = (props) => {
    const { children, title } = props 
   
    return (
        <div className="w-full m-5 border-2 p-5 border-zinc-100 rounded-lg lg:w-1/2">
           <h2 className="text-lg font-semibold lg:text-xl">{ title }</h2>
           {children}
        </div>
    )
}

export default Card