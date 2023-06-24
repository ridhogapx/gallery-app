const Stats = (props) => {
    const { width } = props
    const style = ["h-1", "-m-2" ,"p-2", "rounded-2xl", "bg-gradient-to-r", "from-cyan-500", "to-blue-500"]
    
    style.push(width)
    
    return (
        <>
            <div className={style.join(" ")}></div>
        </>
    )
}

export default Stats