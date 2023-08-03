const WRITTEN_NUMBERS = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    30: "thirty",
    40: "forty",
    50: "fifty",
    60: "sixty",
    70: "seventy",
    80: "eighty",
    90: "ninety",
};

module.exports = function toReadable(number) {
    if (WRITTEN_NUMBERS[number]) return WRITTEN_NUMBERS[number];

    let res = "";

    if (number >= 100) {
        res += WRITTEN_NUMBERS[Math.floor(number / 100)] + " hundred";
        number %= 100;
    }
    if (number <= 20) {
        res += " " + WRITTEN_NUMBERS[number];
        if (res.includes("zero")) {
            const _res = res.split(" ");
            _res.pop();
            return _res.join(" ");
        }
        return res;
    }
    if (number > 20) {
        res += " " + WRITTEN_NUMBERS[Math.floor(number / 10) * 10];
        if (number % 10 === 0) return res;
        number %= 10;

        res += " " + WRITTEN_NUMBERS[number];
    }
    return res.trim();
};
