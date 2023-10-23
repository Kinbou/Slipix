import cx from 'classnames';
import './loader.scss';

const Loader = ({ withMargin }: { withMargin: boolean }) => {

	return (
		<div className={cx('my-0 mx-auto w-70px text-center', { 'my-100px mx-auto': withMargin })}>
			<div className="w-18px h-18px bg-gold rounded-100% inline-block" />
			<div className="w-18px h-18px bg-gold rounded-100% inline-block" />
			<div className="w-18px h-18px bg-gold rounded-100% inline-block" />
		</div>
	);
};

Loader.defaultProps = {
	withMargin: true,
};

export default Loader;
