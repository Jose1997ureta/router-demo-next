interface Props {
	params: {
		id: string;
	};
}

export default function PhotoFeedDetail({ params }: Props) {
	return <div>PhotoFeedDetail {params.id}</div>;
}
