<script lang="ts">
  import { Route, Router } from "svelte-routing";

  import Countries from "./lib/Countries.svelte";
  import CountryUsers from "./lib/CountryUsers.svelte";
  import Footer from "./lib/Footer.svelte";
  import Header from "./lib/Header.svelte";
  export let url = "";
</script>

<main class="main-wrapper">
  <Header />
  <div class="ui middle aligned centered grid vertical stripe middle-content">
    <div class="ui container">
      <Router {url}>
        <Route path="/" component={Countries} />
        <Route path="/:country" let:params>
          <CountryUsers country={params.country} />
        </Route>
      </Router>
    </div>
  </div>
  <Footer />
</main>

<style>
  .main-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .middle-content {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
