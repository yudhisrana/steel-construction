import { heroBackgroud, structureSteel } from '../assets';
import ReactOdometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import { Button } from './ui/button';
import useOdometer from '../hooks/useOdometer';

const Hero = () => {
	const { project, customerStatisfaction, companyEstablished } = useOdometer();

	return (
		<section
			id="Beranda"
			className="relative bg-cover bg-center bg-no-repeat min-h-svh py-15 scroll-mt-20"
			style={{ backgroundImage: `url(${heroBackgroud})` }}
		>
			<div className="absolute inset-0 bg-white/90"></div>
			{/* content */}
			<div className="relative max-w-7xl mx-auto px-4 z-10 flex justify-end items-center gap-8">
				{/* left content */}
				<div className="flex-1 text-start space-y-6">
					<h1 className="text-5xl font-bold leading-tight">Bangun Proyek Konstruksi Baja Berkualitas Bersama Kami!</h1>
					<p className="text-lg leading-relaxed">
						Wujudkan bangunan kokoh dan tahan lama dengan jasa konstruksi baja profesional. Didukung tenaga ahli berpengalaman, kami menjamin hasil
						yang kokoh, presisi, dan tahan lama. Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan mulai proyek Anda hari ini.
					</p>

					{/* odometer */}
					<div className="flex justify-start items-center gap-4">
						{/* total proyek */}
						<div>
							<h3 className="text-lg">Telah Selesai</h3>
							<div className="flex gap-1 items-center text-5xl font-bold">
								<ReactOdometer value={project} />
								<h1 className="mb-3">+</h1>
							</div>
							<span className="text-lg">Proyek di Berbagai Sektor</span>
						</div>

						{/* kepuasan pelanggan */}
						<div>
							<h3 className="text-lg">Tercapai</h3>
							<div className="flex gap-1 items-center text-5xl font-bold">
								<ReactOdometer value={customerStatisfaction} />
								<h1>%</h1>
							</div>
							<span className="text-lg">Tingkat Kepuasan Pelanggan</span>
						</div>

						{/* perusahaan berdiri */}
						<div>
							<h3 className="text-lg">Lebih Dari</h3>
							<div className="flex gap-1 items-center text-5xl font-bold">
								<ReactOdometer value={companyEstablished} />
								<h1 className="mb-3">+</h1>
							</div>
							<span className="text-lg">Tahun Beroperasi</span>
						</div>
					</div>

					{/* cta button */}
					<div className="flex gap-4">
						<Button variant={'outline'} size={'lg'} className="text-lg">
							Proyek
						</Button>
						<Button size={'lg'} className="text-white text-lg">
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
