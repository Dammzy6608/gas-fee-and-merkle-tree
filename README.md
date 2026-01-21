The total gas fee formula in ETH or other native coin is = Gas used * Gas price
The gas limit rule is = Gas Limit ≥ Gas Used
The gas estimation is derived by: simulating the transaction, runninig EVM opcodes, counting gas per opcode, stopping before state change, and returning minimum as required.

Some other variables that influence gas are: Network Congestion, contract complexity, block gas limit, priority fee competition.