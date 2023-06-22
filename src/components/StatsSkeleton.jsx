const StatsSkeleton = (props) => {
    const { progress } = props
    const style = ["h-1", "p-2", "rounded-2xl", "bg-slate-300"]

    return (
        <div className={style}>
            {progress}
        </div>
    )
}

export default StatsSkeleton