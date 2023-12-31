/** Настройки таксопарка */
export const TAXI_CONF = {
    blipNpcOrder: {
        blipStart: 280,
        blipEnd: 435,
        color: 46
    },
    /** Список точек для перевозки NPC. Заказ будет выдан случайно. Заказов должно быть не менее сотни, иначе будут часто пересекатся */
    ordersNpc: <{start: Vector3Mp, end: Vector3Mp, price: number}[]>[
        {start: new mp.Vector3(-479.74, -346.3, 33.48), end: new mp.Vector3(436.56, -592.17, 27.6), price: 360},
        {start: new mp.Vector3(436.56, -592.17, 27.6), end: new mp.Vector3(-479.74, -346.3, 33.48), price: 360},
        {start: new mp.Vector3(390.77, -1033.57, 28.39), end: new mp.Vector3(-474.61, -252.03, 35.01), price: 340},
        {start: new mp.Vector3(-474.61, -252.03, 35.01), end: new mp.Vector3(390.77, -1033.57, 28.39), price: 340},
        {start: new mp.Vector3(-534.17, -294.81, 34.25), end: new mp.Vector3(-1661.92, -944.57, 6.84), price: 420},
        {start: new mp.Vector3(-1661.92, -944.57, 6.84), end: new mp.Vector3(-534.17, -294.81, 34.25), price: 420},
        {start: new mp.Vector3(-653.19, -913.95, 23.05), end: new mp.Vector3(-1411.13, -569.67, 29.37), price: 250},
        {start: new mp.Vector3(-1411.13, -569.67, 29.37), end: new mp.Vector3(-653.19, -913.95, 23.05), price: 250},
        {start: new mp.Vector3(-500.55, -940.71, 23.06), end: new mp.Vector3(-1024.12, -2728.67, 12.77), price: 420},
        {start: new mp.Vector3(-1024.12, -2728.67, 12.77), end: new mp.Vector3(-500.55, -940.71, 23.06), price: 420},
        {start: new mp.Vector3(-203.76, -2072.86, 26.72), end: new mp.Vector3(1004.41, -2472.36, 27.6), price: 420},
        {start: new mp.Vector3(1004.41, -2472.36, 27.6), end: new mp.Vector3(-203.76, -2072.86, 26.72), price: 420},
        {start: new mp.Vector3(1310.94, -1657.36, 50.34), end: new mp.Vector3(917.4, 49.9, 80), price: 482},
        {start: new mp.Vector3(917.4, 49.9, 80), end: new mp.Vector3(1310.94, -1657.36, 50.34), price: 482},
        {start: new mp.Vector3(-96.67, -612.52, 35.31), end: new mp.Vector3(226.62, 1224.74, 224.56), price: 460},
        {start: new mp.Vector3(226.62, 1224.74, 224.56), end: new mp.Vector3(-96.67, -612.52, 35.31), price: 460},
        {start: new mp.Vector3(1860.74, 2583.08, 44.77), end: new mp.Vector3(-393.82, 6045.57, 30.6), price: 1690},
        {start: new mp.Vector3(-393.82, 6045.57, 30.6), end: new mp.Vector3(1860.74, 2583.08, 44.77), price: 1690},
        {start: new mp.Vector3(-127.87, 6476.72, 30.57), end: new mp.Vector3(1589.08, 6443.36, 24.26), price: 452},
        {start: new mp.Vector3(1589.08, 6443.36, 24.26), end: new mp.Vector3(-127.87, 6476.72, 30.57), price: 452},
        {start: new mp.Vector3(1661.92, 4828.52, 41.18), end: new mp.Vector3(1841.93, 3668.49, 32.78), price: 580},
        {start: new mp.Vector3(1841.93, 3668.49, 32.78), end: new mp.Vector3(1661.92, 4828.52, 41.18), price: 580},
        {start: new mp.Vector3(648.54, 603.02, 128.01), end: new mp.Vector3(354.82, -701.55, 28.29), price: 480},
        {start: new mp.Vector3(354.82, -701.55, 28.29), end: new mp.Vector3(648.54, 603.02, 128.01), price: 480},
        {start: new mp.Vector3(-98.75, -1095.48, 25.17), end: new mp.Vector3(1177.4, -3174.14, 4.76), price: 740},
        {start: new mp.Vector3(1177.4, -3174.14, 4.76), end: new mp.Vector3(-98.75, -1095.48, 25.17), price: 740},
        {start: new mp.Vector3(459.77, -1156.22, 28.39), end: new mp.Vector3(-528.9, -327.79, 34.14), price: 390},
        {start: new mp.Vector3(459.77, -1156.22, 28.39), end: new mp.Vector3(-528.9, -327.79, 34.14), price: 390},
        {start: new mp.Vector3(116.15, 240.34, 106.77), end: new mp.Vector3(-702.86, -193.42, 35.89), price: 300},
        {start: new mp.Vector3(-702.86, -193.42, 35.89), end: new mp.Vector3(116.15, 240.34, 106.77), price: 300},
        {start: new mp.Vector3(168.29, -315.93, 43.41), end: new mp.Vector3(-662.08, -266.32, 35.03), price: 220},
        {start: new mp.Vector3(-662.08, -266.32, 35.03), end: new mp.Vector3(168.29, -315.93, 43.41), price: 220},
        {start: new mp.Vector3(61.74, 97.48, 78.01), end: new mp.Vector3(-390.05, -107.05, 37.78), price: 176},
        {start: new mp.Vector3(-390.05, -107.05, 37.78), end: new mp.Vector3(61.74, 97.48, 78.01), price: 176},
        {start: new mp.Vector3(-273.11, 199.35, 84.78), end: new mp.Vector3(459.32, -815.82, 26.48), price: 400},
        {start: new mp.Vector3(-273.11, 199.35, 84.78), end: new mp.Vector3(459.32, -815.82, 26.48), price: 400},
        {start: new mp.Vector3(-17.11, -1718.11, 28.39), end: new mp.Vector3(272.67, -591.62, 42.26), price: 310},
        {start: new mp.Vector3(272.67, -591.62, 42.26), end: new mp.Vector3(-17.11, -1718.11, 28.39), price: 310},
        {start: new mp.Vector3(41.4, -701.96, 43.19), end: new mp.Vector3(-696.78, -980.93, 19.49), price: 304},
        {start: new mp.Vector3(-696.78, -980.93, 19.49), end: new mp.Vector3(41.4, -701.96, 43.19), price: 304},
        {start: new mp.Vector3(-712.03, -859.11, 22.25), end: new mp.Vector3(-1379.94, -72.2, 51.31), price: 320},
        {start: new mp.Vector3(-1379.94, -72.2, 51.31), end: new mp.Vector3(-712.03, -859.11, 22.25), price: 320},
        {start: new mp.Vector3(-2296.99, 445.52, 173.57), end: new mp.Vector3(-712.03, -859.11, 22.25), price: 544},
        {start: new mp.Vector3(-712.03, -859.11, 22.25), end: new mp.Vector3(-2296.99, 445.52, 173.57), price: 544},
        {start: new mp.Vector3(-653.19, -913.95, 23.05), end: new mp.Vector3(-2296.99, 445.52, 173.57), price: 620},
        {start: new mp.Vector3(-2296.99, 445.52, 173.57), end: new mp.Vector3(-653.19, -913.95, 23.05), price: 620},
        {start: new mp.Vector3(1841.93, 3668.49, 32.78), end: new mp.Vector3(-500.55, -940.71, 23.06), price: 1580},
        {start: new mp.Vector3(-500.55, -940.71, 23.06), end: new mp.Vector3(1841.93, 3668.49, 32.78), price: 1580},
        {start: new mp.Vector3(1004.41, -2472.36, 27.6), end: new mp.Vector3(1841.93, 3668.49, 32.78), price: 790},
        {start: new mp.Vector3(1841.93, 3668.49, 32.78), end: new mp.Vector3(1004.41, -2472.36, 27.6), price: 790},
        {start: new mp.Vector3(-416.17, 1177.92, 324.74), end: new mp.Vector3(-545.48, 301.57, 82.12), price: 416},
        {start: new mp.Vector3(-545.48, 301.57, 82.12), end: new mp.Vector3(-416.17, 1177.92, 324.74), price: 416},
        {start: new mp.Vector3(120.02, 212.13, 106.36), end: new mp.Vector3(395.05, -752.3, 28.39), price: 352},
        {start: new mp.Vector3(395.05, -752.3, 28.39), end: new mp.Vector3(120.02, 212.13, 106.36), price: 352},
        {start: new mp.Vector3(-47.87, -786.35, 43.26), end: new mp.Vector3(-75.05, -225.21, 43.95), price: 200},
        {start: new mp.Vector3(-75.05, -225.21, 43.95), end: new mp.Vector3(-47.87, -786.35, 43.26), price: 200},
        {start: new mp.Vector3(-479.49, -644.38, 31.78), end: new mp.Vector3(-1286.32, -1394.42, 3.6), price: 292},
        {start: new mp.Vector3(-1286.32, -1394.42, 3.6), end: new mp.Vector3(-479.49, -644.38, 31.78), price: 292},
        {start: new mp.Vector3(-869.52, -376.83, 38.41), end: new mp.Vector3(-369.55, 115.42, 65.04), price: 190},
        {start: new mp.Vector3(-369.55, 115.42, 65.04), end: new mp.Vector3(-869.52, -376.83, 38.41), price: 190},
        {start: new mp.Vector3(-1183.42, -871.64, 13.03), end: new mp.Vector3(-1898.28, -276.96, 48.31), price: 250},
        {start: new mp.Vector3(-1898.28, -276.96, 48.31), end: new mp.Vector3(-1183.42, -871.64, 13.03), price: 250},
        {start: new mp.Vector3(272.67, -591.62, 42.26), end: new mp.Vector3(-1183.42, -871.64, 13.03), price: 408},
        {start: new mp.Vector3(-1183.42, -871.64, 13.03), end: new mp.Vector3(272.67, -591.62, 42.26), price: 408},
    ],
    /** Множитель награды для водителя за заказ */
    rewardMultipler: 0.9,
    /** Настройка стоимости */
    cost: {
        /** Настройка стоимости разовой */
        base: 100,
        /** Настройка стоимости за км */
        km: 150,
    },
    /** Параметры NPC */
    npc: {
        /** Модель */
        model: "ig_jimmyboston",
        /** Имя */
        name: "Роберт",
        /** Местоположение */
        pos: new mp.Vector3(902.27, -171.19, 74.08),
        /** Угол поворота NPC */
        heading: 237,
    },
    /** Настройка зоны аренды транспорта для сотрудников */
    carRent: {
        /** Позиция */
        pos: new mp.Vector3(908.69, -176.64, 73.28),
        /** Угол поворота ТС при спавне */
        h: 237,
        /** Список ТС который можно взять в аренду */
        cars: <{
            /** Модель ТС */
            model: string,
            /** Единоразовая оплата при взятии ТС в аренду */
            cost: number
        }[]>[
            {model: 'taxi', cost: 500}
        ],
        primaryColor: {r: 255, g: 255, b: 0},
        secondaryColor: {r: 255, g: 255, b: 0},
    }
}

export const BANNED_TAXI_MODELS: string[] = [
    'bmx',
    'cruiser',
    'fixter',
    'scorcher',
    'tribike',
    'tribike2',
    'tribike3',
    'akuma',
    'avarus',
    'bagger',
    'bati',
    'bati2',
    'bf400',
    'carbonrs',
    'chimera',
    'cliffhanger',
    'daemon',
    'daemon2',
    'defiler',
    'deathbike',
    'deathbike2',
    'diablous',
    'diablous2',
    'double',
    'enduro',
    'esskey',
    'faggio',
    'faggio2',
    'faggio3',
    'fcr',
    'fcr2',
    'gargoyle',
    'hakuchou',
    'hakuchou2',
    'hexer',
    'innovation',
    'lectro',
    'manchez',
    'nemesis',
    'nightblade',
    'pcj',
    'ratbike',
    'ruffian',
    'rrocket',
    'sanchez',
    'sanchez2',
    'sanctus',
    'shotaro',
    'sovereign',
    'stryder',
    'thrust',
    'vader',
    'vindicator',
    'vortex',
    'wolfsbane',
    'zombiea',
    'zombieb',
    'manchez2',
    'buzzard2',
    'havok',
    'supervolito',
    'supervolito2',
    'swift',
    'swift2',
    'volatus',
    'seasparrow2',
    'seasparrow3',

];