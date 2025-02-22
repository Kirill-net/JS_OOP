import { multiHeros } from '../app';

  test('typedata test', () => {
    function result (name, type) {
    try {
      return multiHeros(name, type);
    }
    catch (error) {
      return "Некорректные данные"
    }}
    expect(result('bob', 'aaa')).toBe("Некорректные данные");
    expect(result('bobbobobobob', 'Undead')).toBe("Некорректные данные");
    expect(typeof (multiHeros('bob', 'Undead'))).toEqual('object');
    });
