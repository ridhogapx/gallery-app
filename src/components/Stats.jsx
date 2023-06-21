const Stats = (props) => {
    const { width, title } = props
    const style = ["h-1", "p-2", "rounded-2xl", "bg-gradient-to-r", "from-cyan-500", "to-blue-500"]
    
    style.push(width)
    
    return (
        <>
            <h2 className="mt-1 text-slate-400 text-base">{ title }</h2>
            <div className={style.join(" ")}></div>
        </>
    )
}

export default Stats