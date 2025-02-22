import { multiHeros } from '../app';

const characters = [
  [{ name: "зомби", type: 'Zombie'}, 
  { attack: 40, 
    defence: 10,
    name: "зомби",
    type: "Zombie"}
  ],
  [{ name: "маг", type: "Magician"}, 
    { attack: 10, 
      defence: 40,
      name: "маг",
      type: "Magician"}
    ],
  [{ name: "нежить", type: "Undead"}, 
      { attack: 25, 
        defence: 25,
        name: "нежить",
        type: "Undead"}
      ],
];
  
test.each(characters)("characters test", (hero, expected) => {
  let result = multiHeros(hero.name, hero.type);

  expect(result.name).toEqual(expected.name);
  expect(result.type).toEqual(expected.type);
  expect(result.attack).toEqual(expected.attack);
  expect(result.defence).toEqual(expected.defence);
  expect(result.health).toEqual(100);
  expect(result.level).toEqual(1);
}
);

