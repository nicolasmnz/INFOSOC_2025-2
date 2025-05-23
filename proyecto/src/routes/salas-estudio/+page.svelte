<script>
	import Header from '$lib/Header.svelte';
	import IconsGrid from '$lib/IconsGrid.svelte';

	import {
		CircleAlert,
		Fan,
		LightbulbOff,
		Plug,
		PlugZap,
		AudioLines,
		ThermometerSun,
		ThermometerSnowflake
	} from '@lucide/svelte';

	let items = [
		{ icon: CircleAlert, label: 'Sin salas disponibles', color: '#f39c12' },
		{ icon: LightbulbOff, label: 'Problemas de luz', color: '#e74c3c' },
		{ icon: PlugZap, label: 'Enchufes dañados', color: '#c0392b' },
		{ icon: Plug, label: 'Sin enchufes disponibles', color: '#f39c12' },
		{ icon: AudioLines, label: 'Mucho ruido', color: '#f39c12' },
		{ icon: Fan, label: 'Mala ventilación', color: '#c0392b' },
		{ icon: ThermometerSun, label: 'Temperatura alta', color: '#5dade2' },
		{ icon: ThermometerSnowflake, label: 'Temperatura baja', color: '#5dade2' }
	];
	let title = 'Reportar problema en la sala de clases';
</script>

<Header {title} />
<IconsGrid {items} size="2.5em" />
