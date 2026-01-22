## Units for Measuring Gas Price in Ethereum

In Ethereum, gas represents the amount of computational work required to perform an operation, such as sending a transaction or executing a smart contract. Gas itself does not have a monetary value; instead, users specify a **gas price**, which determines how much Ether is paid per unit of gas.

### Wei as the Base Unit

Wei is the smallest denomination of Ether:

```
1 ETH = 10¹⁸ Wei
```

Gas price is fundamentally measured in **Wei per unit of gas**. Due to the extremely small size of Wei, higher-level units are commonly used in practice.

### Common Gas Price Units

The most frequently used units for expressing gas prices are:

* **Wei** – the smallest unit
* **Gwei** – 10⁹ Wei
* **Ether (ETH)** – 10¹⁸ Wei

Among these, **Gwei** is the standard unit used when setting and displaying gas prices.

### Gwei as the Standard Unit

Gwei provides a practical scale for expressing gas prices in a readable and manageable way.

```
1 Gwei = 0.000000001 ETH
```

Typical gas prices vary depending on network congestion:

* Low congestion: 5–10 Gwei
* Normal conditions: 15–30 Gwei
* High congestion: 50 Gwei or higher

Most wallets and Ethereum explorers display gas prices in Gwei.

### Gas Fee Calculation with Units

The total transaction fee is calculated using the formula:

```
Total Gas Fee = Gas Used × Gas Price
```

Where:

* Gas Used represents the number of computational units consumed
* Gas Price is expressed in Gwei (or Wei)
* The final gas fee is paid in ETH

Example:

```
Gas Used = 21,000
Gas Price = 20 Gwei
```

Converted to Ether:

```
20 Gwei = 20 × 10⁻⁹ ETH
```

Final gas fee:

```
21,000 × 20 × 10⁻⁹ = 0.00042 ETH
```

### Gas Pricing After EIP-1559

Following the EIP-1559 upgrade, Ethereum introduced a new gas pricing model that separates the gas price into:

* **Base Fee** (burned by the protocol)
* **Priority Fee** (tip paid to validators)
* **Max Fee** (maximum amount the user is willing to pay)

The effective gas fee is calculated as:

```
Gas Fee = Gas Used × (Base Fee + Priority Fee)
```

All fee components continue to be denominated in Gwei, with the final cost settled in ETH.

---
