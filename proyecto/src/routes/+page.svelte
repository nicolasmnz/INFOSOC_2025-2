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
		Wifi,
		Landmark,
		Dumbbell
	} from '@lucide/svelte';
	const items = [
		{ icon: Utensils, label: 'Casino', color: '#e74c3c', href: '/casino' },
		{ icon: Toilet, label: 'Baños', color: '#5a5aff', href: '/banos' },
		{ icon: BookOpenText, label: 'Biblioteca', color: '#af50e5', href: '/biblioteca' },
		{ icon: Presentation, label: 'Salas de clases', color: '#ff9f00', href: '/salas-clases' },
		{ icon: GraduationCap, label: 'Salas de estudio', color: '#c27ba0', href: '/salas-estudio' },
		{ icon: Dumbbell, label: 'Instalaciones deportivas', color: '#539091', href: '/deportivo' },
		{ icon: Wifi, label: 'Conectividad', color: '#3498db', href: '/conectividad' },
		{ icon: Landmark, label: 'Infraestructura', color: '#976946', href: '/infraestructura' }
	];
</script>

<Header {title} root="root" />
<IconsGrid {items} size="2.5em" />
