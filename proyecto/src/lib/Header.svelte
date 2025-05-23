<script>
	import { Bell, MoveLeft } from '@lucide/svelte';
	let src = '/icon-192x192.png';

	export let title = '';
	export let root;
</script>

{#if root}
	<header>
		<nav class="top-nav">
			<div class="nav-title">{title}</div>
			<Bell size="1.8em" class="bell-icon" />
		</nav>
	</header>
{:else}
	<header>
		<nav class="top-nav">
			<a href="/" class="home-button">
				<MoveLeft size="1.8em" />
			</a>
			<div class="nav-title">{title}</div>
			<Bell size="1.8em" class="bell-icon" />
		</nav>
	</header>
{/if}

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
		font-weight: 4em;
		text-align: center;
		flex: 1;
		color: #ffff;
	}

	:global(.bell-icon) {
		margin-left: auto;
		color: white;
		cursor: pointer;
		transition: color 0.2s ease;
	}

	:global(.bell-icon:hover) {
		color: #ffd700; /* Cambia a dorado en hover */
	}

	.home-button {
		display: inline-flex;
		padding: 8px;
		border-radius: 50%;
		text-decoration: none;
		color: white; /* Color base del ícono */
		transition:
			background-color 0.2s ease,
			color 0.2s ease;
	}

	.home-button:hover {
		background-color: #f0f0f0;
		color: #3b5c84; /* El ícono cambia a azul cuando el fondo se vuelve claro */
	}
</style>
