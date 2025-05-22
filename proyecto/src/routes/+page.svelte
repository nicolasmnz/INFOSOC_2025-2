<script>
	import Header from '$lib/Header.svelte';
	import IconsGrid from '$lib/IconsGrid.svelte';
	let title = '¿Qué problema presentas?';

	import {
		BookOpenText,
		Utensils,
		Toilet,
		Presentation,
		GraduationCap,
		Wifi
	} from '@lucide/svelte';
	const items = [
		{ icon: Utensils, label: 'Casino', color: '#e74c3c', href: '/casino' },
		{ icon: Toilet, label: 'Baños', color: '#5a5aff', href: '/banos' },
		{ icon: BookOpenText, label: 'Biblioteca', color: '#af50e5', href: '/biblioteca' },
		{ icon: Presentation, label: 'Salas de clases', color: '#ff9f00', href: '/salas-clases' },
		{ icon: GraduationCap, label: 'Salas de estudio', color: '#c27ba0', href: '/salas-estudio' },
		{ icon: Wifi, label: 'Conectividad', color: '#3498db', href: '/conectividad' }
	];
</script>

<Header {title} />
<IconsGrid {items} size="2.5em" />
