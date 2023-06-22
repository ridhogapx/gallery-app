const StatsSkeleton = (props) => {
    const { progress, title } = props
    const style = ["h-1", "p-2", "rounded-2xl", "bg-slate-300", "w-full"]
    const implement = style.join(" ")

    return (
        <>
            <h2 className="mt-1 text-slate-400 text-base">{ title }</h2>
            <div className={implement}>
            {progress}
            </div>
        </>
    )
}

export default StatsSkeleton