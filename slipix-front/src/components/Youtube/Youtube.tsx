const Youtube = ({ idYoutube }: { idYoutube: string}) => {
	return (
		<iframe
			width="600"
			height="350"
			src={`https://www.youtube.com/embed/${idYoutube}?origin=http://localhost:5173`}
			title="YouTube video player" allowFullScreen>
		</iframe>
	);
};

export default Youtube;
