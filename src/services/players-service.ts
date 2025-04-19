import { response } from "express";
import { PlayersModel } from "../models/player-model";
import { StatiscticsModel } from "../models/statistics-model";
import * as PlayersRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
    const data = await PlayersRepository.findAllPlayers();
    let response = null

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }
    return response;
};

export const getPlayerByIdService = async (id: number) => {
    const data = await PlayersRepository.findPlayerById(id);
    let response = null;

    if (data) {
        response = await HttpResponse.ok(data);
    } else {
        response = await HttpResponse.noContent();
    }
    return response;    
};

export const createPlayerService = async (player: PlayersModel) => {
    let response = null;
    // verifica se está vazio 
    if (Object.keys(player).length !== 0) {
        await PlayersRepository.insertPlayer(player);
        response = await HttpResponse.created();
    }
    else {
        response = await HttpResponse.badRequest();
    }
    return response;
};
export const deletePlayerService = async (id: number)  => {
    let response = null;
    const isDeleted = await PlayersRepository.deleteOnePlayer(id);
    if (isDeleted) {
        response = await HttpResponse.ok({ message: "Player deleted successfully" });
    } else {
        response = await HttpResponse.badRequest();
    }
    return response;
};

export const updatePlayerService = async (id: number, statistics: StatiscticsModel) => {
    const data = await PlayersRepository.findAndModifyPlayer(id, statistics);
    let response = null;
    if (Object.keys(data).length === 0) {
        response = await HttpResponse.badRequest();
    } else { 
    response = await HttpResponse.ok(data);
    }
    return response;
};
    