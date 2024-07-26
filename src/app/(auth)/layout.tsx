interface Props {
	children: React.ReactNode;
}
export default function AuthLayout({ children }: Props) {
	return (
		<div>
			{children}

			<p>hola</p>
		</div>
	);
}
