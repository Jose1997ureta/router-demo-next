"use client";
import { useRouter } from "next/navigation";

interface Props {
	params: {
		id: string;
	};
}

export default function IntercetedPhotoFeedDetail({ params }: Props) {
	const router = useRouter();

	const handleClose = () => {
		router.back();
	};

	return (
		<div className="absolute top-0 left-0 w-full h-full bg-black/35 flex items-center justify-center">
			<div className="w-1/2 h-[200px] rounded-sm bg-white border p-2">
				<p className="text-lg"> Detailt del Item {params.id} </p>
				<button onClick={handleClose}>Cerrar</button>
			</div>
		</div>
	);
}
