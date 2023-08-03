import log from '$lib/utils/log.js';
import { redirect } from '@sveltejs/kit';

export async function load({ locals }) {
	log.page('/redirect/+page.server.ts (load)');
	if (!locals) {
		throw redirect(307, '/');
	}
}
