type ChaptersProps = {
	title: string,
  list: {
    id: string,
    title: string
  }[],
};

const Chapters = ({ title, list }: ChaptersProps) => {
	return (
		<div className='border-solid border-gold rounded-md w-80% py-1em my-1em border-2'>
			<p>{title}</p>
			<ul className='text-gold text-3xl mt-1em'>
				{list?.map((chapter) => (
					<li key={chapter.id}><i className="fas fa-book mr-0.5em" />{chapter.title}</li>
				))}
			</ul>
		</div>
	);
};

export default Chapters;
