<script>
	import Header from '$lib/Header.svelte';
	import IconsGrid from '$lib/IconsGrid.svelte';

	import { TriangleAlert, SoapDispenserDroplet, Ban, Droplet, Scroll } from '@lucide/svelte';

	let items = [
		{ icon: SoapDispenserDroplet, label: 'Sin jabón', color: '#f39c12' },
		{ icon: Scroll, label: 'Sin papel higiénico', color: '#e74c3c' },
		{ icon: TriangleAlert, label: 'Baño obstruido', color: '#c0392b' },
		{ icon: Ban, label: 'Fuera de servicio', color: '#c0392b' },
		{ icon: Droplet, label: 'Fuga de agua', color: '#5dade2' }
	];
	let title = 'Reportar problema en los baños';
</script>

<Header {title} />
<IconsGrid {items} size="2.5em" />
