<script>
	import Header from '$lib/Header.svelte';
	import IconsGrid from '$lib/IconsGrid.svelte';

	import { AirVent, Fan, HeadphoneOff, LightbulbOff, Projector } from '@lucide/svelte';

	let items = [
		{ icon: Projector, label: 'Proyector no funciona', color: '#f39c12' },
		{ icon: LightbulbOff, label: 'Problemas de luz', color: '#c0392b' },
		{ icon: HeadphoneOff, label: 'Sin audio/ sonido bajo', color: '#c0392b' },
		{ icon: AirVent, label: 'Aire acondicionado descompuesto', color: '#e74c3c' },
		{ icon: Fan, label: 'Mala ventilación', color: '#c0392b' }
	];
	let title = 'Reportar problema en la sala de clases';
</script>

<Header {title} />
<IconsGrid {items} size="2.5em" />
