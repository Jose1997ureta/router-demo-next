"use client";

import { useRouter } from "next/navigation";

interface Props {
	params: { idProduct: string };
}

export default function DetailProductoPage({ params }: Props) {
	const router = useRouter();

	const handlePreview = () => {
		router.back();
	};
	// let va = Num("hose") + 1;
	// console.log(va);

	return (
		<div>
			DetailProductoPage {params.idProduct} imagenes
			<button onClick={handlePreview} className="block p-1 bg-green-300">
				Atras
			</button>
		</div>
	);
}
