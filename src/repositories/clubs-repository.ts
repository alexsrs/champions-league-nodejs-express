import { ClubsModel } from "../models/clubs-model";
import fs from "fs/promises"

export const findAllClubs = async (): Promise<ClubsModel[]> => {
    const data = await fs.readFile("./src/data/clubs.json", "utf-8");
    const clubs: ClubsModel[] = JSON.parse(data);
    return clubs;
};