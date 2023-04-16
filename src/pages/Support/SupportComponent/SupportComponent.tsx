interface SupportComponentProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const SupportComponent = ({ title, icon, children }: SupportComponentProps) => {
	return (
		<div>
			<h5>{title}{icon}</h5>
			{children}
		</div>
	);
};

export default SupportComponent;