import { Metadata } from "next";

interface Props {
	children: React.ReactNode;
	params: {
		idProduct: string;
	};
}

export const generateMetadata = async ({
	params,
}: Props): Promise<Metadata> => {
	/* Podemos llamara un servicio para ontener valores dinamicos sobre la cabecera */

	const response = await new Promise((resolve) => {
		setTimeout(() => {
			resolve(`IPhone ${params.idProduct}`);
		}, 300);
	});

	return {
		title: `Product ${response}`,
	};
};

export default function ProductIdLayout({ children }: Props) {
	return (
		<div>
			{children}

			{/* Carrusel */}
			<div className="carousel bg-red-300 p-2">
				<p>los mas vendidos </p>
			</div>
		</div>
	);
}
