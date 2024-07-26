import { headers } from "next/headers";

export default function NotFound() {
	const headersList = headers();
	const domain = headersList.get("host");
	// const data = await getSiteData(domain)

	return <div>Notfound {domain}</div>;
}
