<script>
	import Header from '$lib/Header.svelte';
	import IconsGrid from '$lib/IconsGrid.svelte';

	import { CircleAlert, Fan, Plug, PlugZap, UserRoundX } from '@lucide/svelte';

	let items = [
		{ icon: UserRoundX, label: 'Sin asientos disponibles', color: '#f39c12' },
		{ icon: PlugZap, label: 'Enchufes dañados', color: '#c0392b' },
		{ icon: Plug, label: 'Sin enchufes disponibles', color: '#f39c12' },
		{ icon: Fan, label: 'Mala ventilación', color: '#c0392b' }
	];
	let title = 'Reportar problema en la biblioteca';
</script>

<Header {title} />
<IconsGrid {items} size="2.5em" />
