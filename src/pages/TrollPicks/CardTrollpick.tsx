const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

interface CardTrollpickProps {
  title: string,
  image: string,
  status: string,
}

const CardTrollpick = ({ title, image, status} : CardTrollpickProps) => {
	return (
		<div>
			<p className="">{status}</p>
			<h3 className="h3 font-squada text-gold">{title}</h3>
			<img src={`${apiBaseUrl}/images/trollpicks/${image}`} alt="" />
		</div>
	);
};

export default CardTrollpick;
