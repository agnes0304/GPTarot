// 유니버셜 웨이트 타로카드 78장, 한글이름, 영어이름, id
const CardsData = [
  { korName: "바보 카드", engName: "The Fool", id: 0 },
  { korName: "마법사 카드", engName: "The Magician", id: 1 },
  { korName: "여사제 카드", engName: "The High Priestess", id: 2 },
  { korName: "여황후 카드", engName: "The Empress", id: 3 },
  { korName: "황제 카드", engName: "The Emperor", id: 4 },
  { korName: "교황 카드", engName: "The Hierophant", id: 5 },
  { korName: "연인 카드", engName: "The Lovers", id: 6 },
  { korName: "전차 카드", engName: "The Chariot", id: 7 },
  { korName: "힘 카드", engName: "Strength", id: 8 },
  { korName: "은둔자 카드", engName: "The Hermit", id: 9 },
  { korName: "운명의 수레바퀴", engName: "Wheel of Fortune", id: 10 },
  { korName: "정의 카드", engName: "Justice", id: 11 },
  { korName: "매달린 사람 카드", engName: "The Hanged Man", id: 12 },
  { korName: "죽음 카드", engName: "Death", id: 13 },
  { korName: "절제 카드", engName: "Temperance", id: 14 },
  { korName: "악마 카드", engName: "The Devil", id: 15 },
  { korName: "타워 카드", engName: "The Tower", id: 16 },
  { korName: "스타 카드", engName: "The Star", id: 17 },
  { korName: "달 카드", engName: "The Moon", id: 18 },
  { korName: "태양 카드", engName: "The Sun", id: 19 },
  { korName: "심판 카드", engName: "Judgement", id: 20 },
  { korName: "월드 카드", engName: "The World", id: 21 },
  { korName: "완드 에이스", engName: "Ace of Wands", id: 22 },
  { korName: "완드2", engName: "Two of Wands", id: 23 },
  { korName: "완드3", engName: "Three of Wands", id: 24 },
  { korName: "완드4", engName: "Four of Wands", id: 25 },
  { korName: "완드5", engName: "Five of Wands", id: 26 },
  { korName: "완드6", engName: "Six of Wands", id: 27 },
  { korName: "완드7", engName: "Seven of Wands", id: 28 },
  { korName: "완드8", engName: "Eight of Wands", id: 29 },
  { korName: "완드9", engName: "Nine of Wands", id: 30 },
  { korName: "완드10", engName: "Ten of Wands", id: 31 },
  { korName: "완드 페이지", engName: "Page of Wands", id: 32 },
  { korName: "완드 기사", engName: "Knight of Wands", id: 33 },
  { korName: "완드 퀸", engName: "Queen of Wands", id: 34 },
  { korName: "완드 킹", engName: "King of Wands", id: 35 },
  { korName: "컵 에이스", engName: "Ace of Cups", id: 36 },
  { korName: "컵2", engName: "Two of Cups", id: 37 },
  { korName: "컵3", engName: "Three of Cups", id: 38 },
  { korName: "컵4", engName: "Four of Cups", id: 39 },
  { korName: "컵5", engName: "Five of Cups", id: 40 },
  { korName: "컵6", engName: "Six of Cups", id: 41 },
  { korName: "컵7", engName: "Seven of Cups", id: 42 },
  { korName: "컵8", engName: "Eight of Cups", id: 43 },
  { korName: "컵9", engName: "Nine of Cups", id: 44 },
  { korName: "컵10", engName: "Ten of Cups", id: 45 },
  { korName: "컵 페이지", engName: "Page of Cups", id: 46 },
  { korName: "컵 기사", engName: "Knight of Cups", id: 47 },
  { korName: "컵 퀸", engName: "Queen of Cups", id: 48 },
  { korName: "컵 킹", engName: "King of Cups", id: 49 },
  { korName: "소드 에이스", engName: "Ace of Swords", id: 50 },
  { korName: "소드2", engName: "Two of Swords", id: 51 },
  { korName: "소드3", engName: "Three of Swords", id: 52 },
  { korName: "소드4", engName: "Four of Swords", id: 53 },
  { korName: "소드5", engName: "Five of Swords", id: 54 },
  { korName: "소드6", engName: "Six of Swords", id: 55 },
  { korName: "소드7", engName: "Seven of Swords", id: 56 },
  { korName: "소드8", engName: "Eight of Swords", id: 57 },
  { korName: "소드9", engName: "Nine of Swords", id: 58 },
  { korName: "소드10", engName: "Ten of Swords", id: 59 },
  { korName: "소드 페이지", engName: "Page of Swords", id: 60 },
  { korName: "소드 기사", engName: "Knight of Swords", id: 61 },
  { korName: "소드 퀸", engName: "Queen of Swords", id: 62 },
  { korName: "소드 킹", engName: "King of Swords", id: 63 },
  { korName: "펜타클 에이스", engName: "Ace of Pentacles", id: 64 },
  { korName: "펜타클2", engName: "Two of Pentacles", id: 65 },
  { korName: "펜타클3", engName: "Three of Pentacles", id: 66 },
  { korName: "펜타클4", engName: "Four of Pentacles", id: 67 },
  { korName: "펜타클5", engName: "Five of Pentacles", id: 68 },
  { korName: "펜타클6", engName: "Six of Pentacles", id: 69 },
  { korName: "펜타클7", engName: "Seven of Pentacles", id: 70 },
  { korName: "펜타클8", engName: "Eight of Pentacles", id: 71 },
  { korName: "펜타클9", engName: "Nine of Pentacles", id: 72 },
  { korName: "펜타클10", engName: "Ten of Pentacles", id: 73 },
  { korName: "펜타클 페이지", engName: "Page of Pentacles", id: 74 },
  { korName: "펜타클 기사", engName: "Knight of Pentacles", id: 75 },
  { korName: "펜타클 퀸", engName: "Queen of Pentacles", id: 76 },
  { korName: "펜타클 킹", engName: "King of Pentacles", id: 77 },
];

export default CardsData;
