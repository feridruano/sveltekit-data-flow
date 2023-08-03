<script lang="ts">
	import { page } from '$app/stores';
	import log from '$lib/utils/log';
	import '../app.css';

	log.layout('+layout.svelte');
</script>

<nav>
	<a href="/">Home</a>
	<a href="/nested/route">Nested Route</a>
	<a href="/actions">Form Actions</a>
	<a href="/error">Errors</a>
	<a href="/stores">Stores</a>
	<a href="/locals">Locals</a>
</nav>
<h1>{$page.data.childData}</h1>
<slot />

<style>
	nav {
		display: flex;
		gap: var(--size-7);
	}
</style>
