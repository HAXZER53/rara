/** Сколько минут будет отображатся информация о том, что человек умер в данном месте */
export const AFTER_DEATH_TIME = 30;
/** На каком расстоянии от точки смерти мы будем считать что игрок находится на точке своей смерти */
export const AFTER_DEATH_RANGE = 150;

export const food_max = 1000
export const water_max = 1000

/** Место хирургии */
export const SURGEON_POS = [
    // Los Santos
    new mp.Vector3(299.56, -598.35, 42.36),
    // Палето больница
    new mp.Vector3(-252.94, 6314.85, 31.53)
];
/** Стоимость хирургии */
export const SURGEON_COST = 100000;


/** Расход воды раз в секунду */
export const enum WATER_RATE {
    /** Бежит быстро */
    SPRINTING = 1,
    /** Бежит медленно */
    RUNNING = 0.05,
    /** Стрейфится при прицеливании */
    STRAFING = 0.05,
    /** Плавает НЕ под водой */
    SWIMMING = 0.05,
    /** Плавает под водой */
    DIVING = 0.2,
}

/** Расход еды раз в секунду */
export const enum FOOD_RATE {
    /** Бежит быстро */
    SPRINTING = 1,
    /** Бежит медленно */
    RUNNING = 0.05,
    /** Стрейфится при прицеливании */
    STRAFING = 0.05,
    /** Плавает НЕ под водой */
    SWIMMING = 0.05,
    /** Плавает под водой */
    DIVING = 0.2,
}

/** Множитель расхода еды, если игрок что то делает (по сути пока он юзает сценарий, то есть во время всяких сборов денег, взломов и прочего) */
export const DO_JOB_FOOD_MULTIPLER = 0.25;
/** Множитель расхода воды, если игрок что то делает (по сути пока он юзает сценарий, то есть во время всяких сборов денег, взломов и прочего) */
export const DO_JOB_WATER_MULTIPLER = 0.25;


/** Интервал (ТИК) списания ХП при нулевом показателе еды и воды. Чем меньше - тем быстрее ХП будет уходить. Меньше 10 лучше не ставить */
export const HP_MINUS_RATE = 20;

/** Сколько ХП за тик будет уходить если вода на нуле */
export const HP_WATER_RATE = 0.1;
/** Сколько ХП за тик будет уходить если еда на нуле */
export const HP_FOOD_RATE = 0.3;
/** Сколько дополнительно ХП будет уходить за тик, если и вода и еда на нуле */
export const HP_TOTAL_FOOD_WATER_RATE = 0.5;

/** Места, где есть маркеры через которые можно оплатить быстрое лечение */
export const HEAL_ZONE_POS = [
    //Городская больница
    new mp.Vector3(319.20, -574.70, 85.93),
    // Палето больница
    new mp.Vector3(-252.00, 6333.96, 31.43),
    // Сенди болька
    new mp.Vector3(1830.50, 3681.80, 33.27)
]

/** Позиции точек прохождения лечения */
export const hospitalPos: Vector3Mp[][] = [
    [
        // Городская больница
        new mp.Vector3(305.40, -576.51, 86.93),
        new mp.Vector3(306.91, -576.80, 86.93),
        new mp.Vector3(307.70, -577.85, 86.93),
        new mp.Vector3(310.27, -566.34, 86.93),
        new mp.Vector3(310.54, -567.98, 86.93),
        new mp.Vector3(315.44, -564.11, 86.93),
        new mp.Vector3(316.07, -565.90, 86.93),
        new mp.Vector3(325.98, -569.17, 86.93),
        new mp.Vector3(324.55, -569.65, 86.93),
        new mp.Vector3(328.22, -574.52, 86.93),
        new mp.Vector3(326.94, -575.18, 86.93)
        
    ],
    [
        // Палето больница
        new mp.Vector3(-260.47, 6328.38, 32.43),
        new mp.Vector3(-260.24, 6326.88, 32.43),
        new mp.Vector3(-258.29, 6327.75, 32.43),
        new mp.Vector3(-258.65, 6326.10, 32.43),
        new mp.Vector3(-257.22, 6325.83, 32.43),
    ],
    [
        // Сенди больница
        new mp.Vector3(1836.36, 3688.59, 34.27),
        new mp.Vector3(1837.63, 3686.82, 34.27),
        new mp.Vector3(1835.66, 3686.62, 34.27),
        new mp.Vector3(1833.42, 3692.35, 34.27),
        new mp.Vector3(1833.83, 3690.65, 34.27),
    ]
]