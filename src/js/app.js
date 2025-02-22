import { Multi } from './multi';

export function multiHeros (name, type) {
    const herosTypes = ['Bowman', 'Undead', 'Zombie', 'Daemon', 'Magician', 'Swordsman']
    if (herosTypes.includes(type) && typeof type === 'string'
        && name.length < 11 && name.length > 1) {
        return new Multi(name, type)
    }
    else {
        throw new Error('Некорректные данные')
    }
}
