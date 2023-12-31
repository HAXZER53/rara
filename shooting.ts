/** Какое оружие допускается на стрельбище */
import {LicenceType} from "./licence";
/** Общий список оружия, который доступен на стрельбище */
export const SHOOTING_WEAPONS_LIST = [
    "weapon_appistol",
    "weapon_pistol",
    "weapon_minismg",
    "weapon_revolver",
    "weapon_smg",
    "weapon_heavyshotgun",
    "weapon_assaultrifle_mk2",
    "weapon_combatmg",
]

export const SHOOTING_RANGES: {
    name: string,
    pos: Vector3Mp,
    enter: {x: number, y: number, z: number, h: number},
    exit: {x: number, y: number, z: number, h: number},
    /** Указать, если для допуска к стрельбищу требуется наличие лицензии */
    license?:LicenceType,
    items: {
        model: string,
        position: {
            x: number,
            y: number,
            z: number
        },
        rotation: {
            x: number,
            y: number,
            z: number
        }
    }[]
}[] = [
    {
        name: 'Армейское стрельбище',
        pos: new mp.Vector3(-1754.20, 2929.59, 31.91),
        enter: {x: -1742.70, y: 2940.53, z: 31.91, h: 238},
        exit: {x: -1749.41, y: 2941.05, z: 31.91, h: 150},
        items: [
            {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1737.73400000,
                    y: 2939.25100000,
                    z: 31.73810000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -65.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1729.13000000,
                    y: 2939.29200000,
                    z: 31.71416000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -100.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1735.59400000,
                    y: 2942.31200000,
                    z: 31.73190000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 160.000
                }
            }, {
                model: "gr_prop_gr_target_02b",
                position: {
                    x: -1744.80200000,
                    y: 2944.08900000,
                    z: 32.64614000
                },
                rotation: {
                    x: -1.051,
                    y: -2.639,
                    z: -55.000
                }
            }, {
                model: "gr_prop_gr_target_02b",
                position: {
                    x: -1739.57900000,
                    y: 2937.27400000,
                    z: 32.25810000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 30.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1740.63900000,
                    y: 2944.84700000,
                    z: 31.72072000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 30.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1737.35000000,
                    y: 2942.70100000,
                    z: 31.72564000
                },
                rotation: {
                    x: -0.000,
                    y: -0.000,
                    z: -150.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1739.49000000,
                    y: 2947.37800000,
                    z: 31.62812000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 120.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1738.63300000,
                    y: 2948.83500000,
                    z: 31.61409000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 120.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1731.34800000,
                    y: 2947.88300000,
                    z: 31.73235000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -150.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1735.16300000,
                    y: 2943.44300000,
                    z: 31.71302000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -150.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1732.66700000,
                    y: 2942.21000000,
                    z: 31.71442000
                },
                rotation: {
                    x: -0.500,
                    y: 0.000,
                    z: -149.982
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1725.34400000,
                    y: 2931.28000000,
                    z: 31.68057000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -155.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1716.33500000,
                    y: 2938.02600000,
                    z: 31.69757000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1716.29800000,
                    y: 2924.19900000,
                    z: 31.71649000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 115.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1708.07400000,
                    y: 2924.84400000,
                    z: 31.72356000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 165.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1707.41100000,
                    y: 2929.41400000,
                    z: 31.71502000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -5.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1748.66900000,
                    y: 2932.20100000,
                    z: 31.75333000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 30.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1735.92800000,
                    y: 2933.58300000,
                    z: 31.85718000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1745.86500000,
                    y: 2936.73600000,
                    z: 31.71171000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1737.83900000,
                    y: 2929.38800000,
                    z: 31.64512000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1705.78300000,
                    y: 2899.26600000,
                    z: 31.73372000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 25.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1708.81600000,
                    y: 2889.61100000,
                    z: 31.69457000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1715.60100000,
                    y: 2882.57700000,
                    z: 31.74138000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 25.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1719.76400000,
                    y: 2871.27800000,
                    z: 31.73417000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -150.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1712.99300000,
                    y: 2889.61100000,
                    z: 31.71197000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 40.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1717.89400000,
                    y: 2887.48500000,
                    z: 31.73644000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 90.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1726.26600000,
                    y: 2868.33900000,
                    z: 31.65401000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 30.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1727.38100000,
                    y: 2872.96200000,
                    z: 31.69425000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 30.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1731.56200000,
                    y: 2870.78800000,
                    z: 31.71608000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 30.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1736.74800000,
                    y: 2872.90300000,
                    z: 31.72786000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 85.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1738.13600000,
                    y: 2869.94900000,
                    z: 31.73296000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 160.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1741.12300000,
                    y: 2923.77700000,
                    z: 31.68410000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1742.86700000,
                    y: 2921.07500000,
                    z: 31.74139000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1745.07000000,
                    y: 2917.09000000,
                    z: 31.70095000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1708.18700000,
                    y: 2903.32700000,
                    z: 31.79096000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -105.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1715.78000000,
                    y: 2898.99100000,
                    z: 31.48486000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -110.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1712.44700000,
                    y: 2895.87100000,
                    z: 31.72089000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -150.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1716.45300000,
                    y: 2892.27600000,
                    z: 31.69579000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -150.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1735.15700000,
                    y: 2892.21400000,
                    z: 31.70109000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1726.98500000,
                    y: 2896.74500000,
                    z: 31.71740000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 30.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1726.87300000,
                    y: 2892.49600000,
                    z: 31.72764000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1732.24900000,
                    y: 2900.08400000,
                    z: 31.54546000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -120.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1737.32200000,
                    y: 2891.87700000,
                    z: 31.59193000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -5.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1738.89500000,
                    y: 2903.95500000,
                    z: 31.75171000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1740.48200000,
                    y: 2900.97100000,
                    z: 31.75282000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1749.80300000,
                    y: 2904.19900000,
                    z: 31.94684000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -150.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1743.46900000,
                    y: 2895.11900000,
                    z: 31.70387000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 125.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1750.27000000,
                    y: 2906.05300000,
                    z: 31.62413000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 30.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1754.70000000,
                    y: 2909.58700000,
                    z: 31.71075000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 30.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1758.78400000,
                    y: 2911.00000000,
                    z: 31.70669000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 30.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1757.64200000,
                    y: 2908.82300000,
                    z: 31.85942000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -150.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1736.70900000,
                    y: 2906.34600000,
                    z: 31.74233000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1737.53300000,
                    y: 2904.59500000,
                    z: 31.74472000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: -60.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1725.13000000,
                    y: 2866.65500000,
                    z: 31.73284000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 25.000
                }
            }, {
                model: "gr_prop_gr_target_05b",
                position: {
                    x: -1725.13000000,
                    y: 2866.65500000,
                    z: 31.73284000
                },
                rotation: {
                    x: 0.000,
                    y: 0.000,
                    z: 25.000
                }
            }]
    }
]