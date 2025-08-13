import { heroBackgroud, structureSteel } from '../assets';
import { Button } from './ui/button';

const Hero = () => {
	return (
		<section
			id="Beranda"
			className="relative bg-cover bg-center bg-no-repeat min-h-svh py-20 scroll-mt-20"
			style={{ backgroundImage: `url(${heroBackgroud})` }}
		>
			<div className="absolute inset-0 bg-white/90"></div>
			{/* content */}
			<div className="relative max-w-7xl mx-auto px-4 z-10 flex flex-col lg:flex-row justify-between items-center gap-8">
				{/* left content */}
				<div className="flex-1 flex flex-col items-center space-y-6 text-center lg:text-start lg:items-start">
					<h1 className="text-[34px] lg:text-5xl font-bold leading-tight">Bangun Proyek Konstruksi Baja Berkualitas Bersama Kami!</h1>
					<p className="text-md lg:text-lg leading-relaxed">
						Wujudkan bangunan kokoh dan tahan lama dengan jasa konstruksi baja profesional. Didukung tenaga ahli berpengalaman, kami menjamin hasil
						yang kokoh, presisi, dan tahan lama. Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan mulai proyek Anda hari ini.
					</p>

					{/* cta button */}
					<div className="flex gap-4">
						<Button variant={'outline'} size={'lg'} className="text-md lg:text-lg">
							Proyek
						</Button>
						<Button size={'lg'} className="text-white text-md lg:text-lg">
							Kontak Kami
						</Button>
					</div>
				</div>

				{/* right content */}
				<div className="flex-1 flex justify-end">
					<img src={structureSteel} alt="structure-steel" className="max-w-xl w-full" />
				</div>
			</div>
		</section>
	);
};

export default Hero;
