<template>
	
	<div>
		<nav class="navbar navbar-expand navbar-light fixed-top">
			<div class="container">
				<div class="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
					<ul class="navbar-nav mb-2 mb-lg-0">
						<li class="nav-item">
							<router-link class="nav-link font-weight-bold" to="/">Home</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link font-weight-bold" to="/TV">TV</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link font-weight-bold" to="/Books">Books</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link font-weight-bold" to="/Pics">Pics</router-link>
						</li>
						<li class="nav-item">
							<router-link class="nav-link font-weight-bold" to="/Tracks">Tracks</router-link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	
	
	<router-view></router-view>
	
	</div>
	
</template>

<script>
export default {
	name: 'App',
	components: {

	}
}
</script>

<style>
body {
	height: 100vh;
	background: url('assets/1672817.png') no-repeat center center fixed;
	background-size: cover;
	background-position: center center;
}
</style>
