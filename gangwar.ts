/** Радиус капта. Этот же параметр умноженный на 2 - это длинна стороны квадрата контроллируемой зоны */
import {DeathMathTeamStartPos} from "./deathmatch";

export const GANGWAR_RADIUS = 38;

/** Сколько средств падает в фракционный сейф при пейдее за территорию */
export const GANGWAR_ZONE_MONEY = 350;

/** Сколько минут должен длится капт максимум */
export const GANGWAR_MINUTES = 12;

/** Сколько минут дать перед тем, как всех кто выживет выкинет из боя */
export const GANGWAR_EXIT_TIMEOUT_MINUTES = 2;

export interface GangwarZone {
    /** Уникальный ИД зоны */
    id: number,
    x: number,
    y: number,
    z: number,
    /** Какая фракция будет владеть зоной по умолчанию (при запуске системы или например при её сбросе) */
    default: number,
    /** Данную территорию нельзя захватить, поскольку она является точкой спавна */
    spawn?: true,
}
export const GANGWAR_ZONES: GangwarZone[] = [
    // Bloods
    {id: 1, x: -442.98, y: -1717.79, z: 18.66 ,default: 21, spawn: true},
    {id: 2, x: -366.98, y: -1717.79, z: 18.66 ,default: 21},
    {id: 3, x: -290.98, y: -1717.79, z: 18.66 ,default: 21},
    {id: 4, x: -290.98, y: -1641.79, z: 18.66 ,default: 21},
    {id: 5, x: -290.98, y: -1565.79, z: 18.66 ,default: 21},
    {id: 6, x: -214.98, y: -1565.79, z: 18.66 ,default: 21},
    {id: 7, x: -214.98, y: -1641.79, z: 18.66 ,default: 21},
    {id: 8, x: -214.98, y: -1717.79, z: 18.66 ,default: 21},
    {id: 9, x: -138.98, y: -1717.79, z: 18.66 ,default: 21},
    {id: 10, x: -138.98, y: -1641.79, z: 18.66 ,default: 21},
    {id: 11, x: -138.98, y: -1565.79, z: 18.66 ,default: 21},
    {id: 12, x: -62.98, y: -1565.79, z: 18.66 ,default: 21},
    {id: 13, x: -62.98, y: -1641.79, z: 18.66 ,default: 21},
    {id: 14, x: -62.98, y: -1489.79, z: 18.66 ,default: 21},
    {id: 15, x: 13.98, y: -1717.79, z: 18.66 ,default: 21},
    {id: 16, x: 13.98, y: -1641.79, z: 18.66 ,default: 21},
    {id: 17, x: 13.98, y: -1565.79, z: 18.66 ,default: 21},
    {id: 18, x: 13.98, y: -1489.79, z: 18.66 ,default: 21},
    {id: 19, x: -62.98, y: -1717.79, z: 18.66 ,default: 21},
    {id: 20, x: 89.98, y: -1489.79, z: 18.66 ,default: 21},

    // Families
    {id: 21, x: -62.98, y: -1793.79, z: 18.66 ,default: 19},
    {id: 22, x: 13.98, y: -1793.79, z: 18.66 ,default: 19},
    {id: 23, x: 13.98, y: -1869.79, z: 18.66 ,default: 19},
    {id: 24, x: 89.98, y: -1869.79, z: 18.66 ,default: 19},
    {id: 25, x: 89.98, y: -1945.79, z: 18.66 ,default: 19, spawn: true},
    {id: 26, x: 165.98, y: -1869.79, z: 18.66 ,default: 19},
    {id: 27, x: 165.98, y: -1793.79, z: 18.66 ,default: 19},
    {id: 28, x: 89.98, y: -1793.79, z: 18.66 ,default: 19},
    {id: 29, x: 241.98, y: -1793.79, z: 18.66 ,default: 19},
    {id: 30, x: 241.98, y: -1869.79, z: 18.66 ,default: 19},
    {id: 31, x: 241.98, y: -1945.79, z: 18.66 ,default: 19},
    {id: 32, x: 317.98, y: -1793.79, z: 18.66 ,default: 19},
    {id: 33, x: 89.98, y: -1717.79, z: 18.66 ,default: 19},
    {id: 34, x: 165.98, y: -1717.79, z: 18.66 ,default: 19},
    {id: 35, x: 241.98, y: -1717.79, z: 18.66 ,default: 19},
    {id: 36, x: 89.98 , y: -1641.79, z: 18.66 ,default: 19},
    {id: 37, x: 317.98 , y: -1717.79, z: 18.66 ,default: 19},
    {id: 38, x: 165.98, y: -2021.79, z: 18.66 ,default: 19},
    {id: 39, x: 241.98, y: -2021.79, z: 18.66 ,default: 19},
    {id: 40, x: 165.98, y: -1945.79, z: 18.66 ,default: 19},

    // Marabulka
    {id: 41, x: 165.98 , y: -1489.79, z: 18.66 ,default: 20},
    {id: 42, x: 241.98 , y: -1489.79, z: 18.66 ,default: 20},
    {id: 43, x: 317.98 , y: -1489.79, z: 18.66 ,default: 20},
    {id: 44, x: 393.98 , y: -1489.79, z: 18.66 ,default: 20},
    {id: 45, x: 469.98 , y: -1489.79, z: 18.66 ,default: 20},
    {id: 46, x: 469.98 , y: -1413.79, z: 18.66 ,default: 20},
    {id: 47, x: 393.98 , y: -1413.79, z: 18.66 ,default: 20},
    {id: 48, x: 317.98 , y: -1413.79, z: 18.66 ,default: 20},
    {id: 49, x: 241.98 , y: -1413.79, z: 18.66 ,default: 20},
    {id: 50, x: 89.98 , y: -1565.79, z: 18.66 ,default: 20},
    {id: 51, x: 165.98 , y: -1641.79, z: 18.66 ,default: 20},
    {id: 52, x: 165.98 , y: -1565.79, z: 18.66 ,default: 20},
    {id: 53, x: 241.98 , y: -1565.79, z: 18.66 ,default: 20},
    {id: 54, x: 241.98 , y: -1641.79, z: 18.66 ,default: 20},
    {id: 55, x: 317.98 , y: -1641.79, z: 18.66 ,default: 20},
    {id: 56, x: 317.98 , y: -1565.79, z: 18.66 ,default: 20},
    {id: 57, x: 393.98 , y: -1641.79, z: 18.66 ,default: 20},
    {id: 58, x: 393.98 , y: -1565.79, z: 18.66 ,default: 20},
    {id: 59, x: 469.98 , y: -1565.79, z: 18.66 ,default: 20},
    {id: 60, x: 469.98 , y: -1337.79, z: 18.66 ,default: 20, spawn: true},
    // Ballas
    {id: 61, x: 892.49, y: -2173.03, z: 35.69 ,default: 18, spawn: true},
    {id: 62, x: 816.49, y: -2173.03, z: 35.69 ,default: 18},
    {id: 63, x: 740.49, y: -2173.03, z: 35.69 ,default: 18},
    {id: 64, x: 740.49, y: -2097.03, z: 35.69 ,default: 18},
    {id: 65, x: 816.49, y: -2097.03, z: 35.69 ,default: 18},
    {id: 66, x: 892.49, y: -2097.03, z: 35.69 ,default: 18},
    {id: 67, x: 892.49, y: -2021.03, z: 35.69 ,default: 18},
    {id: 68, x: 816.49, y: -2021.03, z: 35.69 ,default: 18},
    {id: 69, x: 816.49, y: -1945.03, z: 35.69 ,default: 18},
    {id: 70, x: 892.49, y: -1945.03, z: 35.69 ,default: 18},
    {id: 71, x: 892.49, y: -1869.03, z: 35.69 ,default: 18},
    {id: 72, x: 816.49, y: -1869.03, z: 35.69 ,default: 18},
    {id: 73, x: 968.49, y: -1869.03, z: 35.69 ,default: 18},
    {id: 74, x: 968.49, y: -1793.03, z: 35.69 ,default: 18},
    {id: 75, x: 968.49, y: -1717.03, z: 35.69 ,default: 18},
    {id: 76, x: 816.49, y: -1717.03, z: 35.69 ,default: 18},
    {id: 77, x: 816.49, y: -1793.03, z: 35.69 ,default: 18},
    {id: 78, x: 892.49, y: -1717.03, z: 35.69 ,default: 18},
    {id: 79, x: 892.49, y: -1793.03, z: 35.69 ,default: 18},
    {id: 80, x: 968.49, y: -1945.03, z: 35.69 ,default: 18},


    // Vagos
    {id: 81, x: 317.98, y: -1945.79, z: 18.66 ,default: 22},
    {id: 82, x: 317.98, y: -1869.79, z: 18.66 ,default: 22},
    {id: 83, x: 393.98, y: -1793.79, z: 18.66 ,default: 22},
    {id: 84, x: 393.98, y: -1869.79, z: 18.66 ,default: 22},
    {id: 85, x: 393.98, y: -1945.79, z: 18.66 ,default: 22},
    {id: 86, x: 469.98, y: -1945.79, z: 18.66 ,default: 22},
    {id: 87, x: 469.98, y: -1869.79, z: 18.66 ,default: 22},
    {id: 88, x: 469.98, y: -1793.79, z: 18.66 ,default: 22},
    {id: 89, x: 545.98, y: -1793.79, z: 18.66 ,default: 22},
    {id: 90, x: 545.98, y: -1869.79, z: 18.66 ,default: 22},
    {id: 91, x: 545.98, y: -1945.79, z: 18.66 ,default: 22, spawn: true},
    {id: 92, x: 393.98 , y: -1717.79, z: 18.66 ,default: 22},
    {id: 93, x: 469.98 , y: -1641.79, z: 18.66 ,default: 22},
    {id: 94, x: 469.98 , y: -1717.79, z: 18.66 ,default: 22},
    {id: 95, x: 545.98 , y: -1717.79, z: 18.66 ,default: 22},
    {id: 96, x: 545.98 , y: -1641.79, z: 18.66 ,default: 22},
    {id: 97, x: 545.98, y: -1565.79, z: 35.69 ,default: 22},
    {id: 98, x: 317.98, y: -2021.79, z: 18.66 ,default: 22},
    {id: 99, x: 393.98, y: -2021.79, z: 18.66 ,default: 22},
    {id: 100, x: 469.98, y: -2021.79, z: 18.66 ,default: 22},
];