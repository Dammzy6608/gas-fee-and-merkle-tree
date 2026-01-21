import { estimateGas } from "./src/gasEstimator.js";
import { merkleRootSHA256 } from "./src/merkleSHA256.js";
import { merkleRootKeccak } from "./src/merkleKeccak256.js";

async function main() {
  const tx = {
    from: "0x0000000000000000000000000000000000000000",
    to: "0x0000000000000000000000000000000000000000",
    value: "0x2386F26FC10000" // 0.01 ETH
  };

  console.log(await estimateGas(tx));

  const txs = ["tx1", "tx2", "tx3", "tx4"];
  console.log("SHA256 Root:", merkleRootSHA256(txs));
  console.log("Keccak Root:", merkleRootKeccak(txs));
}

main();
