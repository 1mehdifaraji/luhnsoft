const faNums = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
const arNums = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

const faDigitsRegex = /[۰۱۲۳۴۵۶۷۸۹]/g;
const arDigitsRegex = /[٠١٢٣٤٥٦٧٨٩]/g;

const formatDigits = (digits: string | number): number[] =>
  `${digits}`
    .replace(arDigitsRegex, (char) => `${arNums.indexOf(char)}`)
    .replace(faDigitsRegex, (char) => `${faNums.indexOf(char)}`)
    .replace(/\D/g, "")
    .split("")
    .map((e) => Number(e))
    .reverse();

export default function validate(digits: number | string) {
  const formattedDigits: number[] = formatDigits(digits);
  const lastDigit: number | undefined = formattedDigits.shift();
  let sum: number = 0;

  for (let i: number = 0; i < formattedDigits.length; i++) {
    if (i % 2 === 0)
      sum +=
        formattedDigits[i] * 2 > 9
          ? formattedDigits[i] * 2 - 9
          : formattedDigits[i] * 2;
    else {
      sum += formattedDigits[i];
    }
  }

  sum += lastDigit!;

  return sum % 10 === 0;
}
