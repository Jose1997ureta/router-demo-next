interface Props {
	params: {
		idParallel: string;
	};
}

export default function DetailParellelPage({ params }: Props) {
	return <div>Parrallel {params.idParallel}</div>;
}
