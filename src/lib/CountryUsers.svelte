<script lang="ts">
  import { link } from "svelte-routing";
  import api from "../services/api";
  import User from "./User.svelte";

  export let country: string;
  const users = api.getMostFollowedUsers(country);
</script>

<div>
  {#await users}
    <button class="ui basic huge segment loading">
      Loading users for {country}...
    </button>
  {:then users}
    <div class="ui segment basic my-segment">
      <a href="/" class="ui left labeled icon button" use:link>
        <i class="left arrow icon" />
        Back
      </a>
      <div class="current-country">
        <i class={`medium ${country} flag`} />
        <span class="ui text large">{country.toUpperCase()}</span>
      </div>
    </div>

    <div class="ui three stackable cards">
      {#each users as u, i}
        <User {u} rank={i} />
      {/each}
    </div>
  {:catch error}
    {error.message}
  {/await}
</div>

<style>
  .my-segment {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin: 2rem 0;
  }
  .current-country {
    display: flex;
    align-items: center;
  }
</style>
