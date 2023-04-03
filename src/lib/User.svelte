<script lang="ts">
  import colors from "../assets/colors.json";
  import type { IUser } from "../services/api";
  export let u: IUser;
  export let rank: number = 0;
  const name = u.name || u.login;
  const userProfile = `https://github.com/${u.login}`;
  const avatarUrl = `https://avatars.githubusercontent.com/${u.login}`;
  const color = colors[rank < colors.length ? rank : colors.length - 1];
</script>

<a class="ui card" href={userProfile} target="_blank" id={u.login}>
  <a class="item" href={`#${u.login}`}>
    <div class={`left floating ui circular label ${color} text huge`}>
      {rank + 1}
    </div>
  </a>

  <div class="ui image">
    <img src={avatarUrl} alt={name} loading="lazy" />
  </div>

  <div class="content">
    <span class="header">{name}</span>
    <div class="meta">
      <span class="date text-bold">@{u.login}</span>
    </div>

    <div class="description">{u.bio}</div>
  </div>
  <div class="extra content">
    <i class="user icon" />
    {u.followers.totalCount} Followers
  </div>
</a>
