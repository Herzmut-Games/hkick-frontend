<script lang="ts">
  import { send } from "../mqtt";

  function startGame() {
    const channel = "game/start";
    send(channel, "");
  }
</script>

<div class="h-full flex justify-center items-center">
  <button
    on:click={startGame}
    class="bg-gray-300 hover:bg-gray-400 font-semibold shadow-lg text-xl
    text-gray-700 py-4 px-6 rounded-full">
    Start Game
  </button>
</div>
