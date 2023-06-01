const Section = (props) => {
	const { content, title } = props
	return (
		<div className="container mx-2 mt-3 p-3">
			<div className="max-w-full">
				<h2 className="text-lg w-fit lg:mx-5 font-semibold border-b-2 border-yellow-600">{title}</h2>
			</div>
			<div className="max-w-full flex flex-wrap lg:mx-5 ">
			{content.map((result) => 
				<div className="max-w-sm max-h-72 md:mx-2 overflow-hidden mt-2 md:w-72" key={result.id}>
					<img src={result.src} alt="Content" className="w-72 lg:w-96" />
				</div>
				)}
			</div>
		</div>
	)
}

export default Section