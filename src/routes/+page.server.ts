import log from '$lib/utils/log';

export async function load() {
	log.page('+page.server.ts');

	return {
		c: 3
	};
}
