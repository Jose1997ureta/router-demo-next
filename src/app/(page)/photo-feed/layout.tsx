interface Props {
	children: React.ReactNode;
	modal: React.ReactNode;
}

export default function PhotoFeedlayout({ children, modal }: Props) {
	return (
		<div className="relative">
			{modal}
			{children}
		</div>
	);
}
