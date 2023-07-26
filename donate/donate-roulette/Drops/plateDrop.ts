﻿import {DropDataBase} from "./dropBase";
import {RarityType} from "../main";
import {DropSellType, RouletteType} from "../enums";

export class PlateDropData extends DropDataBase {
    constructor(
        dropId: number,
        icon: number,
        public readonly plateType: PlateType,
        public readonly plateNumber: string,
        name: string,
        rarityType: RarityType,
        roulette: RouletteType[],
        sellType: DropSellType,
        sellPrice: number,
        canDrop: boolean = true,
        isVisibleInPrizeList: boolean = true
    ) {
        super(dropId, icon, name, rarityType, roulette, sellType, sellPrice, canDrop, isVisibleInPrizeList);
    }
}

export enum PlateType {
    WHITE,
    BLACK,
    BLUE,
    WHITE2,
    WHITE3,
    YANKTON
}