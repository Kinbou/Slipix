import { useState } from 'react';
import cx from 'classnames';
import { useMediaPredicate } from 'react-media-hook';

import logoSlipix from '@/assets/images/SlipixLogo.png';
import Burger from './Burger';
import Menu from './Menu';

import classes from './header.module.scss';
import headerCss from './header.module.css';

const Header = () => {
	const [openBurger, setOpenBurger] = useState<boolean>(false);
	const isMobile = useMediaPredicate('(max-width: 1024px)');

	const handleClick = () => {
		setOpenBurger(!openBurger);
	};

	return (
		<header className={classes.header}>
			<nav className={cx(classes.header__nav, classes.active)}>
				<img src={logoSlipix} alt="logo" className={classes.header__logo} />
				{isMobile && <div className={headerCss.burgerMenu}>
					<Burger handleClick={handleClick} open={openBurger} />
					{openBurger && <Menu display="mobile" open={openBurger} />}
				</div>}
				{!isMobile && <Menu />}
			</nav>
		</header>
	);
};

export default Header;
