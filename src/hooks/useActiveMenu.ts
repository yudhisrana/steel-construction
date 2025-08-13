import { useEffect, useState } from 'react';
import { Menu } from '../data';

const useActiveMenu = () => {
	const [activeLink, setActiveLink] = useState('');

	useEffect(() => {
		const handleScroll = () => {
			const scrollPos = window.scrollY;

			for (const item of Menu) {
				const section = document.getElementById(item.id);
				if (section) {
					const offsetTop = section.offsetTop - 100;
					const offsetBottom = offsetTop + section.offsetHeight;

					if (scrollPos >= offsetTop && scrollPos < offsetBottom) {
						setActiveLink(item.id);
					}
				}
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return activeLink;
};

export default useActiveMenu;
