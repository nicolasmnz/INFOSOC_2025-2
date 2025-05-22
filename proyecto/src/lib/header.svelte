<script>
	import { Bell } from '@lucide/svelte';
	let src = '/icon-192x192.png';

	export let title = '';
</script>

<header>
	<nav class="top-nav">
		<div class="nav-title">{title}</div>
		<Bell size="1.8em" color="white" class="bell-icon" />
	</nav>
</header>

<style>
	.top-nav {
		display: flex;
		align-items: center; /* centra el contenido */
		background-color: #3b5c84;
		padding: 1em 1.5em;
		height: 3.4em;
	}
	.nav-title {
		font-size: 1.4em;
		font-weight: 600;
		text-align: center;
		flex: 1;
		color: #ffff;
	}
	:global(.bell-icon) {
		margin-left: auto;
	}
</style>
