"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
	children: React.ReactNode;
}

const routesData = [
	{
		id: 1,
		mame: "Blog",
		href: "/blog",
	},
	{
		id: 2,
		mame: "Product",
		href: "/product",
	},
	{
		id: 3,
		mame: "Profile",
		href: "/profile",
	},
];

export default function PageLayout({ children }: Props) {
	const pathName = usePathname();

	return (
		<>
			<header className="bg-blue-300 p-4 flex gap-x-2">
				{routesData.map((el) => {
					const active = pathName.startsWith(el.href);
					return (
						<Link
							key={el.id}
							href={el.href}
							className={`underline ${active ? "text-red-500" : ""}`}
						>
							{el.mame}
						</Link>
					);
				})}
			</header>

			{children}
			<footer>
				<p className="bg-yellow-300 p-4">footer</p>
			</footer>
		</>
	);
}
