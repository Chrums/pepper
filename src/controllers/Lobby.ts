import * as $ from 'jquery';
import Lobby from '../models/Lobby';

export function GetLobbyIds(): JQuery.jqXHR<number[]> {
    return $.get(`/api/lobbies`).promise();
}

export function GetLobbyById(lobbyId: number): JQuery.jqXHR<Lobby> {
    return $.get(`/api/lobbies/${lobbyId}`).promise();
}