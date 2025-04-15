import { PlayersModel } from "../models/player-model";

const database: PlayersModel[] = [
    { id: 1, name: 'Messi' },
    { id: 2, name: 'Vinicius Júnior' },
    { id: 3, name: 'Cristiano Ronaldo' },
    { id: 4, name: 'Neymar' },
];

export const getAllPlayers = async (): Promise<PlayersModel[]> => {
    return database;
};

export const getPlayerById = async (id: number): Promise<PlayersModel | undefined> => {
    return database.find(player => player.id === id);
};