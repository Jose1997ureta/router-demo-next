interface Props {
	children: React.ReactNode;
	notifications: React.ReactNode;
	users: React.ReactNode;
}

export default function ParallelLayout({
	children,
	notifications,
	users,
}: Props) {
	return (
		<div className="flex gap-x-3 min-h-screen">
			<div className="flex flex-col gap-y-3 w-1/3">
				<div className="border border-blue-100 rounded-sm h-1/2">
					{notifications}
				</div>
				<div className="border border-blue-100 rounded-sm h-1/2">{users}</div>
			</div>
			<div className="w-2/3 border border-blue-100 rounded-sm">{children}</div>
		</div>
	);
}
