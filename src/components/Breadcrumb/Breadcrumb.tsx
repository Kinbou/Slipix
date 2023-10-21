import { Link } from 'react-router-dom';
import { PageCategory } from '@/models/breadcrumb';

interface BreadcrumbProps {
	pageCategory: PageCategory;
	pageName: string;
}

const Breadcrumb = ({ pageCategory, pageName }: BreadcrumbProps) => {
	return (
		<div className="m-1em text-0.7em">
			<Link className='hover:decoration-underline' to="/">Accueil</Link><span className='m-.3rem'>&gt;</span>
			<Link className='hover:decoration-underline' to={`/${pageCategory}`}>{pageCategory}</Link><span className='m-.3rem'>&gt;</span>
			<p className='gold inline'>{pageName}</p>
		</div>
	);
};

export default Breadcrumb;
