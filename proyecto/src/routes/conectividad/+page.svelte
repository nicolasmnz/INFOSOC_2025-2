<script>
	import Header from '$lib/Header.svelte';
	import IconsGrid from '$lib/IconsGrid.svelte';

	import { WifiOff, Gauge } from '@lucide/svelte';

	let items = [
		{ icon: WifiOff, label: 'Sin WiFi', color: '#e74c3c' },
		{ icon: Gauge, label: 'WiFi lento', color: '#f39c12' }
	];
	let title = 'Reportar problema de conectividad';
</script>

<Header {title} />
<IconsGrid {items} size="2.5em" />
