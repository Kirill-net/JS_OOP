import { multiHeros } from '../app';

test('levelup test', () => {
    function levelTry(hero) {
        try {
            hero.levelUp()
            return hero
        }
        catch (error) {
          return "Некорректные данные"
        }
    }

    let bob = multiHeros('bob', 'Zombie')
    bob.health = 0
    expect(levelTry(bob)).toBe("Некорректные данные")
    bob.health = 20
    let result = levelTry(bob)
    expect([result.attack, result.defence, result.health, result.level]).toEqual([48, 12, 100, 2])
});
