interface SupportComponentProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const SupportComponent = ({ title, icon, children }: SupportComponentProps) => {
	return (
		<div className="my-12 px-10">
			<h5 className="text-gold mb-12 text-title_h5">{title}{icon}</h5>
			{children}
		</div>
	);
};

export default SupportComponent;
