export async function load({ parent }) {
	// parent +layout.ts data
	// plus +layout.server.ts, which can be repetitive
	const data = await parent();
	console.log(data);
}
