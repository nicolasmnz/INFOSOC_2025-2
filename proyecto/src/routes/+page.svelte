<script>
	import Header from '$lib/header.svelte';
	let title = '¿Qué problema presentas?';

	import { BookOpenText, Utensils, Toilet, Presentation, GraduationCap } from '@lucide/svelte';
	const items = [
		{ icon: Utensils, label: 'Casino', color: '#e74c3c' },
		{ icon: Toilet, label: 'Baños', color: '#3498db' },
		{ icon: BookOpenText, label: 'Biblioteca', color: '#af50e5' },
		{ icon: Presentation, label: 'Salas de clases', color: '#ff9f00' },
		{ icon: GraduationCap, label: 'Salas de estudio', color: '#c27ba0' }
	];
</script>

<Header {title} />

<main class="grid-container">
	{#each items as { icon: Icon, label, color }}
		<div class="item">
			<button class="icon-btn" style="--bg: {color}">
				<Icon size="2.5rem" color="white" />
			</button>
			<div class="icon-label">{label}</div>
		</div>
	{/each}
</main>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
		gap: 1.5rem;
		padding: 0 1rem;
		justify-items: center;
		justify-content: center;
	}
	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.icon-btn {
		background-color: var(--bg); /* variable que viene del style */
		border: none;
		border-radius: 50%; /* esto hace que sea un círculo */
		padding: 0.75rem;
		width: 5rem;
		height: 5rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: transform 0.1s;
	}
	.icon-btn:active {
		transform: scale(0.95); /* da un efecto de “presionado” */
	}
	.icon-label {
		margin-top: 0.5rem;
		font-size: 0.9rem;
		text-align: center;
		color: #333;
	}
	main {
		margin-top: 7rem;
		padding-inline: 0.5rem;
		min-height: calc(100vh - 4em -1.5rem);
		background: #f9f9f9;
	}
</style>
