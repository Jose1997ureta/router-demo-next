interface Props {
	params: {
		slug: string[];
	};
}

export default function Shop({ params }: Props) {
	return <div>Shop {JSON.stringify(params.slug)}</div>;
}
