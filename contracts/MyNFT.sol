// SPDX-License-Identifier: UNLICENSED
pragma solidity >=0.5.0 < 0.9.0;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Taaani", "MTs") {}

    function mintNFT(address recipient_address, string memory tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 getCurrentId = _tokenIds.current();
        // this funcition get by the ERC721.sol file
        _mint(recipient_address, getCurrentId);
        // attach the tokenURI ipfs link with picture by passing value in the function which writen in the ERC721URIstorage
        _setTokenURI(getCurrentId, tokenURI);
        return getCurrentId;
    }
}
