<script>
	export let items = [];
	export let size = '2.5rem';
	export let fieldName;
</script>

{#if fieldName}
	<form method="POST">
		<main class="grid-container">
			{#each items as { icon: Icon, label, color }}
				<div class="item">
					<button
						class="icon-btn"
						type="submit"
						name={fieldname}
						value={value ?? label}
						style="--bg: {color}"
					>
						<Icon {size} color="white" />
					</button>
					<div class="icon-label">{label}</div>
				</div>
			{/each}
		</main>
	</form>
{:else}
	<main class="grid-container">
		{#each items as { icon: Icon, label, color, href }}
			<div class="item">
				{#if href}
					<a class="icon-btn" {href} style="--bg: {color}">
						<Icon {size} color="white" />
					</a>
				{:else}
					<button class="icon-btn" style="--bg: {color}">
						<Icon {size} color="white" />
					</button>
				{/if}
				<div class="icon-label">{label}</div>
			</div>
		{/each}
	</main>
{/if}

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
		text-decoration: none;
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
