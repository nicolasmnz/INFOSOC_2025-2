<script>
	import Header from '$lib/Header.svelte';
	import IconsGrid from '$lib/IconsGrid.svelte';

	import { ClockAlert, UserRoundX, UtensilsCrossed } from '@lucide/svelte';

	let items = [
		{ icon: UtensilsCrossed, label: 'Sin comida', color: '#e74c3c' },
		{ icon: ClockAlert, label: 'Espera larga', color: '#f39c12' },
		{ icon: UserRoundX, label: 'Sin asientos disponibles', color: '#c0392b' }
	];
	let title = 'Reportar problema en el casino';
</script>

<Header {title} />
<IconsGrid {items} size="2.5em" />
