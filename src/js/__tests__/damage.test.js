import { multiHeros } from '../app';

test('damage test', () => {
    let marvel = multiHeros('marvel', 'Zombie')
    marvel.damage(20)
    expect(marvel.health).toBe(82)
    marvel.health = -10
    marvel.damage(10)
    expect(marvel.health).toBe(-10)
});
