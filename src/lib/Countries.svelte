<script lang="ts">
  import { link } from "svelte-routing";
  import countries from "../assets/countries.json";
</script>

<div class="ui three stacked">
  <div class="ui basic segment">
    {#each countries as country}
      <a class="ui country-label basic label" href={country} use:link>
        <i class={`medium ${country} flag`} />
        <span class="ui text large country-name">{country}</span>
      </a>
    {/each}
  </div>
</div>

<style>
  .country-name {
    font-variant: small-caps;
  }
  .country-label {
    margin: 0.5rem;
  }
</style>
