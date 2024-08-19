const { ethers } = require("hardhat");

// Types
import { DavoIsERC20 } from "../typechain-types";
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";

// Whitelisted
import { whitelisted } from "../utils/whitelisted";


async function main() {
    let contract: DavoIsERC20;
    let merkleTree: StandardMerkleTree<string[]>
    merkleTree = StandardMerkleTree.of(whitelisted, ["address"], { sortLeaves: true})

    const [owner] = await ethers.getSigners();
    contract = await ethers.deployContract("DavoIsERC20", [owner.address, merkleTree.root]);

    await contract.waitForDeployment();

    console.log(
        `DavoIsERC20 deployed to ${contract.target} with merkleRoot ${merkleTree.root}`
    )
} 


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})