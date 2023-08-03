import log from '$lib/utils/log';

export async function load({ data }) {
	log.page('+page.ts');

	return {
		...data,
		d: 4
	};
}
