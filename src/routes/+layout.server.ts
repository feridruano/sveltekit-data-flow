import log from '$lib/utils/log';

export async function load() {
	log.layout('+layout.server.ts');
	return {
		a: 1
	};
}
