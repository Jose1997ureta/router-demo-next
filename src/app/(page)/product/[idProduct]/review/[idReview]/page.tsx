interface Props {
	params: { idProduct: string; idReview: string };
}

export default function Review({ params }: Props) {
	return (
		<div>
			Review {params.idReview} for product {params.idProduct}
		</div>
	);
}
