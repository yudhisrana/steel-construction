import { Menu } from '../data';

interface menuMobileProps {
	isOpen: boolean;
	onClose: () => void;
}

const MenuMobile = ({ isOpen, onClose }: menuMobileProps) => {
	return (
		<div
			className={`fixed top-20 left-0 w-full min-h-screen p-4 bg-white transition-all duration-500 ease-in-out transform
			${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}
		>
			<ul className="flex flex-col gap-4">
				{Menu.map((menu, index) => (
					<li key={index} className="text-md">
						<a href={menu.link} onClick={onClose}>
							{menu.name}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default MenuMobile;
