import { writable } from "svelte/store";
import type { ITeams } from "./interfaces/teams";

export const teamsObj: ITeams = {
  red: { attack: undefined, defense: undefined },
  white: { attack: undefined, defense: undefined },
};

export const game_status = writable("stopped");
export const just_scored = writable(false);
export const score_red = writable(0);
export const score_white = writable(0);
export const goals = writable([]);
export const round = writable(1);
export const volume = writable("50");
export const players = writable([]);
export const max_player_count = writable(4);
export const teams = writable(teamsObj);
