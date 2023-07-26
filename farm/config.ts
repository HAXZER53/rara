﻿import { Vector3Shared, VectorWithOptionalHeading } from '../system'

/**
 * Возможные активности на ферме.
 */
export enum ActivityType {
    // Поле
    Field,
    // Теплица
    Greenhouse,
    // Загон с животными
    Animal
}

export enum FieldStage {
    // Культивация поля на тракторе
    Cultivation,
    // Посадка культур
    Landing,
    // Сбор 
    Collection
}

export enum GreenhouseStage {
    // Посадка культур
    Landing,
    // Полив
    Water,
    // Сбор
    Collection
}

export enum FarmAnimal {
    Cow,
    Pig
}
export type AnimalPoint = [Vector3Shared, number, FarmAnimal]

/**
 * Точка создания активности фермы. Создается при старте сервера.
 */
export interface IActivitySpot {
    /**
     * Позиция NPC.
     */
    pedPos: VectorWithOptionalHeading
    /**
     * Позиция + ротация палатки.
     */
    standPos?: VectorWithOptionalHeading
    storagePos: Vector3Shared
    
    type: ActivityType
    /**
     * Точки где будут созданы чекпоинты для игрока. 
     * Ферма - культивация трактором, садить семена в эти точки
     * Животные - на точках будут стоять животные
     * Теплица - тоже что и ферма
     * [Vector3, number?] = [позиция, ротация (если нужна)]
     */
    points?: Array<VectorWithOptionalHeading>
    animalPoints?: Array<AnimalPoint>
    /**
     * Точки спавна техники (если необходимо)
     */
    vehicleSpawnPoints?: Array<VectorWithOptionalHeading>
    trailerSpawnPoints?: Array<VectorWithOptionalHeading>
}

/**
 * Параметры фермерской активности.
 */
export interface IActivitySettings {
    name: string
    /**
     * Хеш педа-управляющего, создаваемого на точке активности.
     */
    managerPedHash: number
    /**
     * Размер точки(чекпоинта) с отступами от других точек
     */
    pointSize: number
    /**
     * Модель техники (если необходимо)
     */
    vehicleModel?: string
}

export interface IBestFarmerSpot {
    /**
     * Позиция таблички "Лучший фермер" 
     */
    pos: Vector3Shared
    heading: number,
    blipType: number
}

/**
 * Смена
 */
export interface IFarmSupply {
    /**
     * ID предмета из конфига инвентаря
     */
    inventoryItemId: number,
    seedModel: string
    vegModel: string
    /**
     * ID инвенатарного айтема готового растения (собранного)
     */
    vegInventoryItemId: number,
    /**
     * Тип семян для посадки на поле/теплице/везде
     */
    type: 'greenhouse' | 'field' | 'all'
}

/**
 * Корм для животных
 */
export interface IFarmFeed {
    /**
     * ID предмета из конфига инвентаря
     */
    inventoryItemId: number
    animal: FarmAnimal
    power: number
}

export const FARM_STAND_OBJECT_MODEL = 'prop_fruitstand_b'

export const BEST_FARMER_SPOTS: Array<IBestFarmerSpot> = [
    { pos: { x: 2147.82, y: 5081.83, z: 45.13 }, heading: 39, blipType: 569 }
]

export const ACTIVITY_SPOTS: Array<IActivitySpot> = [
    // Поле 1
    { standPos: [{ x: 2092.46, y: 5155.16, z: 49.44 }, 313], pedPos: [{ x: 2095.08, y: 5152.37, z: 50.22 }, 133], storagePos: { x: 2090.41, y: 5158.61, z: 49.55 }, 
        type: ActivityType.Field, points: [
            // 3 точки по границам треугольника. Ромб будет построен автоматически из 2-х треугольников
            [{ x: 2134.22, y: 5214.82, z: 58.20 }],
            [{ x: 2076.98, y: 5180.95, z: 52.67 }],
            [{ x: 2187.82, y: 5160.49, z: 55.38 }],
        ],
        vehicleSpawnPoints: [
            [{ x: 2087.70, y: 5164.34, z: 51.03 }, 131],// 10 - поворот ТС
            [{ x: 2083.49, y: 5169.14, z: 51.35 }, 131],
            [{ x: 2078.85, y: 5174.57, z: 51.71 }, 133],
            [{ x: 2072.26, y: 5181.67, z: 52.38 }, 131],
        ], trailerSpawnPoints: [

        ]
    },
    // Поле 2
    { standPos: [{ x: 2335.35, y: 5088.00, z: 45.05 }, 42], pedPos: [{ x: 2332.68, y: 5085.93, z: 45.93 }, 227], storagePos: { x: 2338.34, y: 5091.11, z: 45.18 }, 
        type: ActivityType.Field, points: [
            // 3 точки по границам треугольника. Ромб будет построен автоматически из 2-х треугольников
            [{ x: 2295.21, y: 5174.75, z: 59.61}],
            [{ x: 2256.28, y: 5135.55, z: 53.74 }],
            [{ x: 2346.77, y: 5128.21, z: 48.43 }],
        ],
        vehicleSpawnPoints: [
            [{ x: 2349.28, y: 5103.61, z: 47.1 }, 135],// 10 - поворот ТС
            [{ x: 2343.98, y: 5098.34, z: 46.75 }, 134],
            [{ x: 2309.99, y: 5081.60, z: 46.24 }, 256],
            [{ x: 2306.59, y: 5086.18, z: 46.83 }, 317],
        ], trailerSpawnPoints: [
            
        ]
    },
    // Полe 3
    { standPos: [{ x: 2101.74, y: 4913.24, z: 39.94 }, 48], pedPos: [{ x: 2097.74, y: 4909.25, z: 41.06 }, 227], storagePos: { x: 2097.98, y: 4911.16, z: 40.09 }, 
        type: ActivityType.Field, points: [
            // 3 точки по границам треугольника. Ромб будет построен автоматически из 2-х треугольников
            [{ x: 2045.11, y: 4975.18, z: 40.53}],
            [{ x: 2007.97, y: 4940.37, z: 41.94 }],
            [{ x: 2104.27, y: 4917.83, z: 40.29 }],
        ],
        vehicleSpawnPoints: [
            [{ x: 2094.92, y: 4885.97, z: 41.24 }, 273],// 10 - поворот ТС
            [{ x: 2101.69, y: 4891.02, z: 41.17 }, 97],
            [{ x: 2104.99, y: 4895.95, z: 40.96 }, 95],
            [{ x: 2110.68, y: 4900.66, z: 40.87 }, 88],
        ], trailerSpawnPoints: [

        ]
    },
    // Полe 4
    { standPos: [{ x: 2060.23, y: 4870.56, z: 40.88 }, 48], pedPos: [{ x: 2056.70, y: 4867.16, z: 41.77 }, 227], storagePos: {x: 2064.25, y: 4874.22, z: 40.49}, 
        type: ActivityType.Field, points: [
            // 3 точки по границам треугольника. Ромб будет построен автоматически из 2-х треугольников
            [{ x: 2005.71, y: 4931.37, z: 42.95}],
            [{ x: 1978.58, y: 4903.14, z: 42.77 }],
            [{ x: 2060.07, y: 4878.10, z: 42.92 }],
        ],
        vehicleSpawnPoints: [
            [{x: 2059.00, y: 4849.73, z: 41.84 }, 44],// 10 - поворот ТС
            [{ x: 2066.20, y: 4855.62, z: 41.73 }, 44],
            [{ x: 2071.38, y: 4860.50, z: 41.72 }, 44],
            [{ x: 2076.01, y: 4864.07, z: 41.63 }, 44],
        ], trailerSpawnPoints: [

        ]
    },
    // Полe 5
    { standPos: [{ x: 1962.10, y: 4890.80, z: 44.00 }, 130], pedPos: [{ x: 1965.33, y: 4892.06, z: 44.49 }, 330], storagePos: {x: 1964.52, y: 4887.19, z: 44.01}, 
        type: ActivityType.Field, points: [
            // 3 точки по границам треугольника. Ромб будет построен автоматически из 2-х треугольников
            [{ x: 1981.16, y: 4864.35, z: 45.36}],
            [{ x: 1962.34, y: 4883.15, z: 45.38 }],
            [{ x: 1945.29, y: 4828.14, z: 45.35 }],
        ],
        vehicleSpawnPoints: [
            [{x: 1970.92, y: 4886.79, z: 44.30}, 220],// 10 - поворот ТС
            [{ x: 1977.00, y: 4879.92, z: 44.28 }, 224],
            [{ x: 1984.15, y: 4872.53, z: 44.17 }, 224],
            [{ x: 1987.71, y: 4863.27, z: 44.12 }, 316],
        ], trailerSpawnPoints: [

        ]
    },
    // Полe 6
    { standPos: [{ x: 2499.16, y: 4887.94, z: 39.60 }, 144], pedPos: [{ x: 2502.26, y: 4885.39, z: 40.30 }, 320], storagePos: {x: 2497.59, y: 4890.06, z: 39.69}, 
        type: ActivityType.Field, points: [
            // 3 точки по границам треугольника. Ромб будет построен автоматически из 2-х треугольников
            [{ x: 2527.31, y: 4860.94, z: 37.96}],
            [{ x: 2496.90, y: 4889.62, z: 40.73 }],
            [{ x: 2490.08, y: 4822.95, z: 35.22 }],
        ],
        vehicleSpawnPoints: [
            [{x: 2522.01, y: 4870.09, z: 38.90}, 137],// 10 - поворот ТС
            [{ x: 2518.19, y: 4873.99, z: 39.06 }, 137],
            [{ x: 2515.27, y: 4877.13, z: 39.14 }, 137],
            [{ x: 2511.00, y: 4880.76, z: 39.37 }, 137],
        ], trailerSpawnPoints: [

        ]
    },
    // Полe 7
    { standPos: [{ x: 2540.58, y: 4855.05, z: 35.95 }, 144], pedPos: [{ x: 2535.18, y: 4858.22, z: 37.44 }, 320], storagePos: {x: 2542.23, y: 4851.28, z: 35.79}, 
        type: ActivityType.Field, points: [
            // 3 точки по границам треугольника. Ромб будет построен автоматически из 2-х треугольников
            [{ x: 2530.42, y: 4855.29, z: 37.36}],
            [{x: 2494.57, y: 4817.37, z: 35.39 }],
            [{ x: 2582.62, y: 4808.74, z: 34.10 }],
        ],
        vehicleSpawnPoints: [
            [{x: 2587.14, y: 4811.68, z: 34.07}, 137],// 10 - поворот ТС
            [{ x: 2581.91, y: 4816.04, z: 34.53 }, 137],
            [{ x: 2577.96, y: 4819.64, z: 34.82 }, 137],
            [{ x: 2573.01, y: 4824.51, z: 35.40 }, 137],
        ], trailerSpawnPoints: [

        ]
    },
    // Полe 8
    { standPos: [{ x: 1875.35, y: 4761.92, z: 39.50 }, 311], pedPos: [{ x: 1872.42, y: 4758.47, z: 39.64 }, 147], storagePos: {x: 1870.85, y: 4760.68, z: 38.74}, 
        type: ActivityType.Field, points: [
            // 3 точки по границам треугольника. Ромб будет построен автоматически из 2-х треугольников
            [{ x: 1986.77, y: 4798.72, z: 42.26}],
            [{ x: 1959.90, y: 4826.97, z: 44.16 }],
            [{ x: 1912.90, y: 4736.14, z: 41.51}],
        ],
        vehicleSpawnPoints: [
            [{x: 1871.37, y: 4747.55, z: 39.24}, 224],// 10 - поворот ТС
            [{ x: 1877.37, y: 4742.48, z: 39.81 }, 224],
            [{ x: 1882.74, y: 4734.49, z: 40.03 }, 224],
            [{ x: 1885.71, y: 4725.91, z: 39.99 }, 224],
        ], trailerSpawnPoints: [

        ]
    },
    // Полe 9
    { standPos: [{ x: 2858.36, y: 4686.98, z: 46.20}, 192], pedPos: [{x: 2857.74, y: 4689.46, z: 47.23 }, 14], storagePos: {x: 2855.02, y: 4686.04, z: 46.15}, 
        type: ActivityType.Field, points: [
            // 3 точки по границам треугольника. Ромб будет построен автоматически из 2-х треугольников
            [{ x: 2883.21, y: 4680.22, z: 48.44}],
            [{ x: 2821.18, y: 4663.74, z: 46.49}],
            [{ x: 2905.30, y: 4589.96, z: 48.00}],
        ],
        vehicleSpawnPoints: [
            [{x: 2841.21, y: 4673.57, z: 46.83}, 192],// 10 - поворот ТС
            [{ x: 2835.96, y: 4671.82, z: 46.80 }, 224],
            [{ x: 2831.03, y: 4670.93, z: 46.83 }, 224],
            [{ x: 2824.30, y: 4669.30, z: 46.83 }, 224],
        ], trailerSpawnPoints: [

        ]
    },
    
    

    // Теплицы
    { standPos: [{ x: 1803.34, y: 5035.91, z: 57.53 },199], pedPos: [{ x: 1800.04, y: 5033.88, z: 58.29},23], storagePos: { x: 1807.62, y: 5036.43, z: 57.72 },
    // Теплица 1
        type: ActivityType.Greenhouse, points: [
            [{x:1835.83,y:4994.49,z:53.86}],
            [{x:1832.56,y:4991.72,z:53.19}],
            [{x:1826.74,y:4986.80,z:51.77}],
            [{x:1820.71,y:4981.69,z:50.34}],
            [{x:1815.99,y:4977.70,z:49.33}],
            [{x:1811.70,y:4973.90,z:48.47}],
            [{x:1807.71,y:4970.34,z:47.70}],
            [{x:1801.88,y:4965.45,z:46.63}],
            [{x:1798.08,y:4962.27,z:45.96}],
            [{x:1793.48,y:4958.32,z:45.36}],
            [{x:1789.11,y:4954.47,z:44.96}],
            [{x:1781.71,y:4948.04,z:44.16}],
            [{x:1775.95,y:4951.39,z:44.71}],
            [{x:1779.86,y:4954.34,z:45.10}],
            [{x:1785.24,y:4959.19,z:45.76}],
            [{x:1791.99,y:4965.00,z:46.51}],
            [{x:1797.82,y:4969.94,z:47.45}],
            [{x:1804.91,y:4975.93,z:48.72}],
            [{x:1811.38,y:4981.41,z:49.83}],
            [{x:1818.14,y:4987.22,z:51.31}],
            [{x:1824.99,y:4993.16,z:52.86}],
            [{x:1830.35,y:4997.80,z:54.15}],
            [{x:1816.02,y:5015.31,z:57.08}],
            [{x:1811.59,y:5011.49,z:56.11}],
            [{x:1806.14,y:5006.79,z:54.94}],
            [{x:1800.01,y:5001.62,z:53.62}],
            [{x:1793.56,y:4996.13,z:52.47}],
            [{x:1786.54,y:4990.16,z:51.30}],
            [{x:1780.40,y:4984.93,z:50.25}],
            [{x:1774.87,y:4980.22,z:49.45}],
            [{x:1767.74,y:4974.16,z:48.47}],
            [{x:1761.99,y:4969.26,z:47.62}],
            [{x:1755.42,y:4974.99,z:48.12}],
            [{x:1758.27,y:4977.18,z:48.60}],
            [{x:1763.95,y:4981.97,z:49.36}],
            [{x:1769.26,y:4986.79,z:50.23}],
            [{x:1775.33,y:4992.16,z:51.21}],
            [{x:1781.17,y:4997.27,z:52.15}],
            [{x:1786.57,y:5001.90,z:53.10}],
            [{x:1793.91,y:5008.03,z:54.29}],
            [{x:1799.92,y:5013.13,z:55.64}],
            [{x:1806.36,y:5018.62,z:57.01}],
            [{x:1811.30,y:5022.95,z:58.01}],
            [{x:1805.99,y:5027.45,z:58.43}],
            [{x:1802.13,y:5024.02,z:57.65}],
            [{x:1796.46,y:5019.16,z:56.40}],
            [{x:1789.65,y:5013.51,z:55.01}],
            [{x:1783.14,y:5007.98,z:53.79}],
            [{x:1777.73,y:5003.39,z:52.90}],
            [{x:1773.64,y:4999.77,z:52.24}],
            [{x:1768.59,y:4995.34,z:51.32}],
            [{x:1762.12,y:4989.73,z:50.34}],
            [{x:1758.85,y:4986.93,z:49.93}],
            [{x:1752.65,y:4981.94,z:48.86}]
        ] },
    
    

        // Теплица 2
        { standPos: [{ x: 1881.86, y: 5022.56, z: 48.1 },37], pedPos: [{ x: 1885.00, y: 5026.50, z: 49.04},223], storagePos: { x: 1878.14, y: 5020.23, z: 48.69 },
            type: ActivityType.Greenhouse, points: [
            [{x:1845.56,y:5023.14,z:55.41}],
            [{x:1849.82,y:5026.80,z:54.80}],
            [{x:1855.61,y:5031.64,z:53.82}],
            [{x:1861.39,y:5036.43,z:52.98}],
            [{x:1867.90,y:5041.85,z:52.18}],
            [{x:1874.06,y:5047.02,z:51.49}],
            [{x:1880.02,y:5052.02,z:50.81}],
            [{x:1885.70,y:5056.78,z:49.94}],
            [{x:1892.80,y:5062.89,z:49.04}],
            [{x:1899.76,y:5068.90,z:47.90}],
            [{x:1906.97,y:5075.13,z:46.55}],
            [{x:1913.29,y:5080.58,z:45.29}],
            [{x:1919.19,y:5085.67,z:44.15}],
            [{x:1925.96,y:5091.51,z:42.92}],
            [{x:1930.97,y:5095.83,z:41.66}],
            [{x:1927.28,y:5101.21,z:41.65}],
            [{x:1921.67,y:5096.52,z:42.97}],
            [{x:1915.47,y:5091.53,z:44.22}],
            [{x:1909.98,y:5087.01,z:45.36}],
            [{x:1902.52,y:5080.87,z:46.82}],
            [{x:1895.62,y:5074.71,z:48.42}],
            [{x:1889.44,y:5069.03,z:49.44}],
            [{x:1883.22,y:5063.69,z:50.43}],
            [{x:1877.02,y:5058.55,z:51.37}],
            [{x:1870.63,y:5053.26,z:52.17}],
            [{x:1864.95,y:5048.38,z:52.85}],
            [{x:1859.52,y:5043.63,z:53.38}],
            [{x:1852.55,y:5037.68,z:54.52}],
            [{x:1845.17,y:5031.41,z:55.79}],
            [{x:1837.38,y:5032.91,z:57.42}],
            [{x:1840.12,y:5035.20,z:57.03}],
            [{x:1846.48,y:5040.68,z:56.08}],
            [{x:1852.14,y:5045.47,z:55.20}],
            [{x:1857.78,y:5050.26,z:54.32}],
            [{x:1863.74,y:5055.32,z:53.49}],
            [{x:1869.67,y:5060.36,z:52.65}],
            [{x:1875.69,y:5065.46,z:51.69}],
            [{x:1882.04,y:5071.07,z:50.66}],
            [{x:1888.07,y:5076.25,z:49.64}],
            [{x:1895.27,y:5082.20,z:48.19}],
            [{x:1901.12,y:5087.02,z:46.91}],
            [{x:1907.40,y:5092.47,z:45.54}],
            [{x:1913.25,y:5097.66,z:44.24}],
            [{x:1920.26,y:5103.60,z:42.60}],
            [{x:1909.59,y:5106.86,z:44.54}],
            [{x:1905.56,y:5103.59,z:45.38}],
            [{x:1898.33,y:5097.81,z:46.98}],
            [{x:1890.20,y:5090.85,z:48.78}],
            [{x:1881.43,y:5083.00,z:50.71}],
            [{x:1874.62,y:5077.25,z:51.86}],
            [{x:1868.72,y:5072.37,z:52.89}],
            [{x:1862.49,y:5066.84,z:54.00}],
            [{x:1856.42,y:5061.47,z:55.03}],
            [{x:1850.22,y:5056.41,z:56.20}],
            [{x:1844.59,y:5051.72,z:57.03}],
            [{x:1838.81,y:5046.84,z:57.70}],
            [{x:1833.27,y:5041.95,z:58.38}],
            [{x:1827.44,y:5044.94,z:58.81}],
            [{x:1832.77,y:5049.56,z:58.23}],
            [{x:1840.52,y:5055.92,z:57.34}],
            [{x:1847.70,y:5062.06,z:56.27}],
            [{x:1854.35,y:5067.94,z:55.18}],
            [{x:1862.29,y:5074.76,z:53.84}],
            [{x:1869.23,y:5080.72,z:52.55}],
            [{x:1876.67,y:5086.93,z:51.13}],
            [{x:1882.78,y:5092.03,z:49.97}],
            [{x:1889.02,y:5097.23,z:48.60}],
            [{x:1895.06,y:5102.40,z:47.37}]
            ] },
    
    

            // Теплица 3
            { standPos: [{ x: 2293.02, y: 4772.74, z: 37.65 },83], pedPos: [{ x: 2296.14, y: 4772.02, z: 38.41},242], storagePos: { x: 2294.10, y: 4775.70, z: 37.45 },
                type: ActivityType.Greenhouse, points: [
                    [{x:2272.77,y:4756.14,z:38.42}],
                    [{x:2274.66,y:4762.46,z:39.14}],
                    [{x:2276.89,y:4769.92,z:39.12}],
                    [{x:2278.77,y:4776.28,z:39.13}],
                    [{x:2271.54,y:4781.68,z:39.43}],
                    [{x:2270.30,y:4777.26,z:39.52}],
                    [{x:2268.34,y:4769.71,z:39.43}],
                    [{x:2266.10,y:4762.65,z:39.41}],
                    [{x:2254.31,y:4762.01,z:39.57}],
                    [{x:2255.55,y:4766.01,z:39.61}],
                    [{x:2258.10,y:4774.77,z:39.66}],
                    [{x:2260.34,y:4782.97,z:39.84}],
                    [{x:2251.28,y:4786.63,z:40.12}],
                    [{x:2250.13,y:4782.59,z:40.01}],
                    [{x:2247.35,y:4773.63,z:39.91}],
                    [{x:2245.32,y:4765.69,z:39.83}],
                    [{x:2238.45,y:4766.55,z:39.93}],
                    [{x:2239.80,y:4771.26,z:40.05}],
                    [{x:2242.03,y:4778.89,z:40.14}],
                    [{x:2244.40,y:4786.56,z:40.11}],
                    [{x:2238.42,y:4791.36,z:40.29}],
                    [{x:2236.97,y:4787.05,z:40.19}],
                    [{x:2234.37,y:4778.31,z:40.15}],
                    [{x:2232.08,y:4770.12,z:40.06}],
                    [{x:2224.57,y:4772.22,z:40.22}],
                    [{x:2226.09,y:4777.32,z:40.21}],
                    [{x:2228.26,y:4784.57,z:40.29}],
                    [{x:2230.23,y:4791.29,z:40.35}]
                ] },

                // Теплица 4
            { standPos: [{ x: 1869.30, y: 4867.85, z: 43.19 },83], pedPos: [{ x: 1870.97, y: 4865.91, z: 44.21},242], storagePos: { x: 1872.07, y: 4872.03, z: 43.42 },
            type: ActivityType.Greenhouse, points: [
                [{x:1876.27,y:4851.08,z:45.12}],
                [{x:1881.96,y:4845.71,z:45.48}],
                [{x:1887.13,y:4840.53,z:45.76}],
                [{x:1892.08,y:4835.45,z:46.14}],
                [{x:1896.29,y:4831.15,z:46.01}],
                [{x:1899.99,y:4824.28,z:45.63}],
                [{x:1904.76,y:4819.12,z:45.43}],
                [{x:1910.01,y:4814.30,z:45.16}],
                [{x:1916.61,y:4808.17,z:44.69}],
                [{x:1921.50,y:4803.15,z:44.26}],
                [{x:1926.62,y:4808.06,z:44.29}],
                [{x:1919.83,y:4814.55,z:44.89}],
                [{x:1915.13,y:4819.87,z:45.37}],
                [{x:1909.40,y:4825.66,z:45.66}],
                [{x:1901.35,y:4835.07,z:46.10}],
                [{x:1898.33,y:4838.21,z:46.09}],
                [{x:1893.12,y:4843.72,z:45.90}],
                [{x:1888.05,y:4848.96,z:45.83}],
                [{x:1882.72,y:4853.97,z:45.49}],
                [{x:1886.24,y:4859.65,z:45.38}],
                [{x:1891.16,y:4854.49,z:45.86}],
                [{x:1897.01,y:4848.53,z:46.14}],
                [{x:1903.17,y:4842.38,z:46.25}],
                [{x:1911.98,y:4838.80,z:46.12}],
                [{x:1916.87,y:4833.37,z:46.03}],
                [{x:1922.37,y:4827.56,z:45.82}],
                [{x:1928.18,y:4822.03,z:45.30}],
                [{x:1934.51,y:4815.89,z:44.58}],
                [{x:1939.53,y:4821.35,z:44.78}],
                [{x:1935.17,y:4825.86,z:45.27}],
                [{x:1931.14,y:4829.73,z:45.68}],
                [{x:1913.72,y:4847.02,z:46.99}],
                [{x:1908.70,y:4851.93,z:46.95}],
                [{x:1903.54,y:4857.03,z:46.72}],
                [{x:1897.70,y:4862.81,z:46.55}],
                [{x:1892.10,y:4868.35,z:46.02}],
                [{x:1902.55,y:4890.53,z:47.55}],
                [{x:1909.17,y:4883.94,z:47.27}],
                [{x:1915.80,y:4877.64,z:47.22}],
                [{x:1921.81,y:4871.53,z:47.07}],
                [{x:1925.58,y:4867.75,z:47.15}],
                [{x:1929.18,y:4864.07,z:47.24}],
                [{x:1934.35,y:4868.37,z:47.10}],
                [{x:1930.17,y:4872.82,z:47.08}],
                [{x:1924.03,y:4879.13,z:47.12}],
                [{x:1918.34,y:4884.45,z:47.35}],
                [{x:1911.30,y:4891.36,z:47.70}],
                [{x:1906.50,y:4896.11,z:48.02}],
                [{x:1913.79,y:4901.69,z:48.04}],
                [{x:1919.22,y:4896.34,z:47.56}],
                [{x:1924.43,y:4891.11,z:47.27}],
                [{x:1929.64,y:4885.85,z:46.93}],
                [{x:1935.04,y:4880.47,z:46.72}],
                [{x:1939.21,y:4876.16,z:46.70}],
                [{x:1946.92,y:4884.43,z:46.28}],
                [{x:1942.54,y:4888.76,z:46.32}],
                [{x:1936.15,y:4894.99,z:46.61}],
                [{x:1930.52,y:4900.82,z:47.15}],
                [{x:1923.33,y:4908.17,z:47.85}],
                [{x:1927.65,y:4912.52,z:47.48}],
                [{x:1928.48,y:4911.66,z:47.38}],
                [{x:1927.55,y:4912.90,z:47.44}]
            ] },

            // Теплица 5
        { standPos: [{ x: 2007.43, y: 4795.81, z: 40.94 },224], pedPos: [{ x: 2005.12, y: 4798.21, z: 41.97},46], storagePos: { x: 2011.58, y: 4799.25, z: 40.98 },
        type: ActivityType.Greenhouse, points: [
            [{x:2008.65,y:4828.68,z:42.74}],
            [{x:2004.05,y:4833.04,z:43.25}],
            [{x:1998.57,y:4838.68,z:43.57}],
            [{x:1994.00,y:4843.43,z:43.91}],
            [{x:1988.68,y:4849.15,z:44.03}],
            [{x:1978.54,y:4842.98,z:43.98}],
            [{x:1983.20,y:4838.47,z:44.01}],
            [{x:1988.65,y:4832.59,z:43.90}],
            [{x:1994.54,y:4826.31,z:43.48}],
            [{x:2002.03,y:4818.50,z:42.75}],
            [{x:1998.22,y:4813.04,z:42.68}],
            [{x:1993.10,y:4818.40,z:43.29}],
            [{x:1987.44,y:4824.19,z:43.67}],
            [{x:1980.88,y:4830.94,z:44.01}],
            [{x:1975.34,y:4836.61,z:44.11}],
            [{x:1969.72,y:4832.11,z:44.07}],
            [{x:1974.66,y:4826.86,z:43.81}],
            [{x:1980.98,y:4820.17,z:43.66}],
            [{x:1985.91,y:4815.13,z:43.36}],
            [{x:1992.02,y:4809.11,z:42.73}]
        ] },
    


        
        // Животные

        // Стойник 1
    { pedPos: [{ x: 2165.01, y: 5007.75, z: 41.50 }, 28], storagePos: { x: 2158.38, y: 5015.43, z: 40.49 },
        type: ActivityType.Animal, animalPoints: [
            [{ x:2164.95,y:4999.24,z:41.33 }, 54, FarmAnimal.Cow],// 12 - поворот животного
            [{ x:2163.52,y:4995.42,z:41.28 }, 32, FarmAnimal.Cow],
            [{ x:2157.96,y:4992.82,z:41.29 }, 76, FarmAnimal.Cow],
            [{ x:2158.61,y:4987.77,z:41.31}, 89, FarmAnimal.Cow],
            [{ x:2153.38,y:4984.43,z:41.29 }, 12, FarmAnimal.Cow],
            [{ x:2150.00,y:4979.43,z:41.33 }, 65, FarmAnimal.Cow],
            [{ x:2144.80,y:4978.45,z:41.32 }, 124, FarmAnimal.Cow],
            [{ x:2141.53,y:4974.45,z:41.41 }, 234, FarmAnimal.Cow],
            [{ x:2128.70,y:4987.95,z:41.24 }, 237, FarmAnimal.Cow],
            [{ x:2130.48,y:4991.81,z:41.38 }, 98, FarmAnimal.Cow],
            [{ x:2134.84,y:4996.32,z:41.36 }, 301, FarmAnimal.Cow],
            [{ x:2137.90,y:4999.33,z:41.41 }, 32, FarmAnimal.Cow],
            [{ x:2141.05,y:5003.06,z:41.33 }, 160, FarmAnimal.Cow],
            [{ x:2144.69,y:5006.83,z:41.32 }, 178, FarmAnimal.Cow],
            [{ x:2148.70,y:5010.74,z:41.34 }, 250, FarmAnimal.Cow],
            [{ x:2152.10,y:5013.87,z:41.33 }, 289, FarmAnimal.Cow],
        ] },

        // Стойник 2
        { pedPos: [{ x: 2196.72, y: 4974.17, z: 41.47}, 312], storagePos: { x: 2199.40, y: 4973.81, z: 40.54 },
        type: ActivityType.Animal, animalPoints: [
            [{ x:2195.24,y:4970.56,z:41.37 }, 54, FarmAnimal.Cow],// 12 - поворот животного
            [{ x:2191.93,y:4966.18,z:41.27 }, 32, FarmAnimal.Cow],
            [{ x:2188.07,y:4963.44,z:41.26}, 76, FarmAnimal.Cow],
            [{ x:2185.47,y:4959.27,z:41.30}, 89, FarmAnimal.Cow],
            [{ x:2178.64,y:4949.84,z:41.39 }, 12, FarmAnimal.Cow],
            [{ x:2182.11,y:4954.87,z:41.39 }, 65, FarmAnimal.Cow],
            [{ x:2170.96,y:4944.08,z:41.28 }, 124, FarmAnimal.Cow],
            [{ x:2153.67,y:4962.26,z:41.21 }, 234, FarmAnimal.Cow],
            [{ x:2155.54,y:4966.30,z:41.49 }, 237, FarmAnimal.Cow],
            [{ x:2161.73,y:4969.78,z:41.81 }, 98, FarmAnimal.Cow],
            [{ x:2164.56,y:4973.42,z:41.33 }, 301, FarmAnimal.Cow],
            [{ x:2166.65,y:4978.20,z:41.20 }, 32, FarmAnimal.Cow],
            [{ x:2170.66,y:4981.67,z:41.30 }, 160, FarmAnimal.Cow],
            [{ x:2175.46,y:4983.94,z:41.32 }, 178, FarmAnimal.Cow],
            [{ x:2178.95,y:4986.85,z:41.37 }, 250, FarmAnimal.Cow],
        ] },

        // Стойник 3
        { pedPos: [{ x: 2251.42, y: 4886.98, z: 40.86}, 238], storagePos: { x: 2269.07, y: 4877.94, z: 39.90 },
        type: ActivityType.Animal, animalPoints: [
            [{ x:2243.14,y:4875.20,z:40.83 }, 54, FarmAnimal.Cow],// 12 - поворот животного
            [{ x:2237.89,y:4883.05,z:40.94 }, 32, FarmAnimal.Cow],
            [{ x:2229.05,y:4890.91,z:40.67}, 76, FarmAnimal.Cow],
            [{ x:2220.34,y:4897.72,z:40.71}, 89, FarmAnimal.Cow],
            [{ x:2217.59,y:4899.97,z:40.79 }, 12, FarmAnimal.Cow],
            [{ x:2212.22,y:4905.75,z:40.80 }, 65, FarmAnimal.Cow],
            [{ x:2205.49,y:4915.40,z:40.56 }, 124, FarmAnimal.Cow],
            [{ x:2221.99,y:4935.12,z:40.90 }, 234, FarmAnimal.Cow],
            [{ x:2225.93,y:4932.50,z:40.80 }, 237, FarmAnimal.Cow],
            [{ x:2230.36,y:4927.26,z:40.71 }, 98, FarmAnimal.Cow],
            [{ x:2233.94,y:4924.12,z:40.81 }, 301, FarmAnimal.Cow],
            [{ x:2240.35,y:4919.40,z:40.75 }, 32, FarmAnimal.Cow],
            [{ x:2247.66,y:4910.35,z:40.71 }, 160, FarmAnimal.Cow],
            [{ x:2256.54,y:4903.46,z:40.78 }, 178, FarmAnimal.Cow],
            [{ x:2264.03,y:4894.54,z:40.89 }, 250, FarmAnimal.Cow],
            [{ x:2242.84,y:4849.85,z:40.73 }, 250, FarmAnimal.Cow],
            [{ x:2248.96,y:4843.35,z:40.66 }, 250, FarmAnimal.Cow],
            [{ x:2255.77,y:4835.10,z:40.66 }, 250, FarmAnimal.Cow],
        ] },

        // Стойник 4
        { pedPos: [{ x: 2381.86, y: 4806.58, z: 37.10}, 254], storagePos: { x: 2378.57, y: 4803.37, z: 36.02 },
        type: ActivityType.Animal, animalPoints: [
            [{ x:2400.72,y:4777.23,z:34.52 }, 54, FarmAnimal.Cow],// 12 - поворот животного
            [{ x:2409.39,y:4769.28,z:34.30 }, 32, FarmAnimal.Cow],
            [{ x:2415.95,y:4761.91,z:34.30}, 76, FarmAnimal.Cow],
            [{ x:2423.98,y:4753.13,z:34.30}, 89, FarmAnimal.Cow],
            [{ x:2432.51,y:4745.14,z:34.30 }, 12, FarmAnimal.Cow],
            [{ x:2439.83,y:4738.39,z:34.30 }, 65, FarmAnimal.Cow],
            [{ x:2472.20,y:4761.42,z:34.30 }, 124, FarmAnimal.Cow],
            [{ x:2466.12,y:4770.86,z:34.38 }, 234, FarmAnimal.Cow],
            [{ x:2456.14,y:4777.30,z:34.49 }, 237, FarmAnimal.Cow],
            [{ x:2449.21,y:4785.15,z:34.62 }, 98, FarmAnimal.Cow],
            [{ x:2440.93,y:4792.89,z:34.66 }, 301, FarmAnimal.Cow],
            [{ x:2432.20,y:4802.65,z:34.83 }, 32, FarmAnimal.Cow],
            [{ x:2493.94,y:4762.92,z:34.37 }, 160, FarmAnimal.Cow],
            [{ x:2502.59,y:4753.77,z:34.30 }, 178, FarmAnimal.Cow],
            [{ x:2509.56,y:4745.43,z:34.30 }, 250, FarmAnimal.Cow],
            [{ x:2517.84,y:4737.13,z:34.30 }, 250, FarmAnimal.Cow],
        ] },
]

export const ACTIVITY_SETTINGS: Map<ActivityType, IActivitySettings> = new Map([
    [ActivityType.Field, { managerPedHash: 0x94562DD7, name: 'Поле', pointSize: 5, vehicleModel: 'tractor2' }],
    [ActivityType.Animal, { managerPedHash: 0x94562DD7, name: 'Загон с животными', pointSize: 1 }],
    [ActivityType.Greenhouse, { managerPedHash: 0x94562DD7, name: 'Теплица', pointSize: 1 }],
])

export const SUPPLIES_LIST: Array<IFarmSupply> = [

    // Овощи
    { inventoryItemId: 7000, seedModel: 'prop_veg_crop_04_leaf', vegModel: 'farm_props_Potato', vegInventoryItemId: 7020, type: 'field' },
    { inventoryItemId: 7001, seedModel: 'prop_veg_crop_04_leaf', vegModel: 'farm_props_Carrot', vegInventoryItemId: 7021, type: 'field' },
    { inventoryItemId: 7002, seedModel: 'prop_veg_crop_04_leaf', vegModel: 'prop_veg_crop_01', vegInventoryItemId: 7022, type: 'field' },
    { inventoryItemId: 7003, seedModel: 'farm_props_Cucumber_a', vegModel: 'farm_props_Cucumber_b', vegInventoryItemId: 7023, type: 'field' },
    { inventoryItemId: 7004, seedModel: 'prop_veg_crop_04_leaf', vegModel: 'farm_props_Radish', vegInventoryItemId: 7024, type: 'field' },
    { inventoryItemId: 7005, seedModel: 'prop_veg_crop_04_leaf', vegModel: 'farm_props_Onion', vegInventoryItemId: 7025, type: 'field' },

    // Фрукты
    { inventoryItemId: 7006, seedModel: 'farm_props_Strawberry_001_a', vegModel: 'farm_props_Strawberry_001_b', vegInventoryItemId: 7026, type: 'greenhouse' },
    { inventoryItemId: 7007, seedModel: 'prop_veg_crop_04_leaf', vegModel: 'farm_props_Watermelon', vegInventoryItemId: 7027, type: 'greenhouse' },
    { inventoryItemId: 7008, seedModel: 'farm_props_Raspberry_a', vegModel: 'farm_props_Raspberry_b', vegInventoryItemId: 7028, type: 'greenhouse' },
    // { inventoryItemId: 7009, seedModel: 'ch1_04b_vinegrapes__03', vegModel: 'prop_bush_grape_01', vegInventoryItemId: 7029, type: 'greenhouse' },
    { inventoryItemId: 7010, seedModel: 'farm_props_Blueberry_a', vegModel: 'farm_props_Blueberry_b', vegInventoryItemId: 7030, type: 'greenhouse' },

    // Tree
    // { inventoryItemId: 7011, seedModel: 'prop_veg_crop_04_leaf', vegModel: 'on_ny_tree', vegInventoryItemId: 7031, type: 'field' },

]

export const FEED_LIST: Array<IFarmFeed> = [
    { inventoryItemId: 9100, animal: FarmAnimal.Cow, power: 50 },
    { inventoryItemId: 9101, animal: FarmAnimal.Cow, power: 20 },
    { inventoryItemId: 9102, animal: FarmAnimal.Cow, power: 25 },
]
