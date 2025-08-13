import { Menu, SocialMediaIcon } from '../data';
import Logo from './logo';

const Navbar = () => {
	return (
		<nav>
			<div className="max-w-7xl mx-auto flex justify-between items-center p-4">
				{/* logo */}
				<div>
					<Logo />
				</div>

				{/* menu navbar */}
				<ul className="flex gap-8">
					{Menu.map((menu, index) => (
						<li key={index} className="text-md">
							{menu.name}
						</li>
					))}
				</ul>

				{/* social media icon */}
				<ul className="flex gap-4">
					{SocialMediaIcon.map((icon, index) => (
						<li key={index}>{icon.icon()}</li>
					))}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
