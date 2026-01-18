function thresholdBattle(a: number[], b: number[]): number[] {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i = 0; i < 3; i++) {
    let diff = Math.abs(a[i] - b[i]);
    if (diff < 2) continue;
    else if (diff === 2) {
      aliceScore++;
      bobScore++;
    } else if (diff > 2) {
      if (a[i] > b[i]) {
        aliceScore = aliceScore + 2
      } else {
        bobScore = bobScore + 2
      }
    }
  }
  return [aliceScore, bobScore];
}

function runTest(
  name: string,
  fn: (a: number[], b: number[]) => number[],
  a: number[],
  b: number[],
  expected: number[],
) {
  const result = fn(a, b);
  const pass = JSON.stringify(result) === JSON.stringify(expected);
  console.log(`${pass ? "✅" : "❌"} ${name}`, {
    result,
    expected,
  });
}

// ===== TEST CASES =====
runTest("T1", thresholdBattle, [5, 6, 7], [3, 6, 10], [1, 3]);
runTest("T2", thresholdBattle, [4, 4, 4], [2, 2, 2], [3, 3]);
runTest("T3", thresholdBattle, [10, 1, 5], [6, 3, 2], [5, 1]);
runTest("T4", thresholdBattle, [1, 2, 3], [1, 2, 3], [0, 0]);
