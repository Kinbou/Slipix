const Loader = () => {
	return (
		<div className='flex min-h-fullscreen justify-center items-center'>
			<div className="w-18px mx-.5rem h-18px bg-gold rounded-100% inline-block animate-bounce-alt animate-duration-1.5s animate-ease-linear" />
			<div className="w-18px h-18px bg-gold rounded-100% inline-block mx-.5rem animate-bounce-alt animate-duration-1.5s animate-delay-.3s animate-ease-linear" />
			<div className="w-18px h-18px bg-gold rounded-100% inline-block mx-.5rem animate-bounce-alt animate-duration-1.5s animate-delay-.6s animate-ease-linear" />
		</div>
	);
};

export default Loader;
