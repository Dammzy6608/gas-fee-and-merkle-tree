import { keccak256, toUtf8Bytes } from "ethers";

export function merkleRootKeccak(transactions) {
  let hashes = transactions.map(tx =>
    keccak256(toUtf8Bytes(tx))
  );

  while (hashes.length > 1) {
    if (hashes.length % 2 !== 0) {
      hashes.push(hashes[hashes.length - 1]);
    }

    const nextLevel = [];
    for (let i = 0; i < hashes.length; i += 2) {
      nextLevel.push(
        keccak256(hashes[i] + hashes[i + 1].slice(2))
      );
    }

    hashes = nextLevel;
  }

  return hashes[0];
}
