import { ethers } from "ethers";

export async function estimateGas(tx) {
  const provider = new ethers.JsonRpcProvider(
    "https://eth-sepolia.g.alchemy.com/v2/YOUR_API_KEY"
  );

  const gasUsed = await provider.estimateGas(tx);
  const feeData = await provider.getFeeData();

  const baseFee = feeData.lastBaseFeePerGas;
  const priorityFee = feeData.maxPriorityFeePerGas;

  const effectiveGasPrice = baseFee + priorityFee;
  const totalCost = gasUsed * effectiveGasPrice;

  return {
    gasUsed: gasUsed.toString(),
    totalCostEth: ethers.formatEther(totalCost),
  };
}

