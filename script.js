const form = document.getElementById('factor-form');
const numberInput = document.getElementById('number-input');
const resultText = document.getElementById('result-text');
const elapsedTimeText = document.getElementById('elapsed-time-text');
const errorMessage = document.getElementById('error-message');

function parseInteger(value) {
  const trimmed = value.trim();
  if (!/^\d+$/.test(trimmed)) {
    return null;
  }

  try {
    return BigInt(trimmed);
  } catch {
    return null;
  }
}

function primeFactorization(num) {
  if (typeof num !== 'bigint' || num < 1n) {
    return null;
  }

  if (num === 1n) {
    return [];
  }

  const factors = [];
  let remaining = num;
  let divisor = 2n;

  while (divisor * divisor <= remaining) {
    while (remaining % divisor === 0n) {
      factors.push(divisor);
      remaining /= divisor;
    }
    divisor += 1n;
  }

  if (remaining > 1n) {
    factors.push(remaining);
  }

  return factors;
}

function formatFactors(factors) {
  if (factors.length === 0) {
    return '1 = 1';
  }

  const counts = {};
  factors.forEach((factor) => {
    const key = factor.toString();
    counts[key] = (counts[key] || 0) + 1;
  });

  const entries = Object.entries(counts).map(([factor, count]) =>
    count > 1 ? `${factor}^{count}` : factor
  );

  return `${factors.map((factor) => factor.toString()).join(' × ')} = ${entries.join(' × ')}`;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = numberInput.value;
  if (!value.trim()) {
    errorMessage.textContent = '整数を入力してください。';
    resultText.textContent = 'まだ計算していません';
    elapsedTimeText.textContent = '計算時間: 0.00ms';
    return;
  }

  const parsed = parseInteger(value);
  if (parsed === null || parsed < 1n) {
    errorMessage.textContent = '1以上の整数を入力してください。';
    resultText.textContent = 'まだ計算していません';
    elapsedTimeText.textContent = '計算時間: 0.00ms';
    return;
  }

  errorMessage.textContent = '';

  const startTime = performance.now();
  const factors = primeFactorization(parsed);
  const elapsedMs = performance.now() - startTime;
  const output = formatFactors(factors);

  resultText.textContent = output;
  elapsedTimeText.textContent = `計算時間: ${elapsedMs.toFixed(2)}ms`;
});
