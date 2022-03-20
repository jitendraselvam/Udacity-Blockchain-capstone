pragma solidity >=0.4.21 <0.6.0;

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
import "./ERC721Mintable.sol";
import "./verifier.sol";


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is Verifier, JToken {
    // TODO define a solutions struct that can hold an index & an address
    struct Solution {
        bytes32 index;
        address addr;
        bool exists;
        uint256 tokenId;
    }

    // TODO define an array of the above struct
    // Solution[] solutions;
    mapping(uint256 => Solution) solutions;

    // TODO define a mapping to store unique solutions submitted
    mapping(bytes32 => bool) uniqueSolutions;

    // TODO Create an event to emit when a solution is added
    event SolutionAdded(bytes32 index, address addr, uint256 tokenId);

    // TODO Create a function to add the solutions to the array and emit the event
    function addSolution(address addr, uint256 tokenId, uint[2] memory a, uint[2][2] memory b, uint[2] memory c, uint[2] memory input) public {
        bytes32 key = keccak256(abi.encodePacked(a, b, c, input));
        require(!uniqueSolutions[key], "This solution is not unique");
        // Proof memory proof;
        // proof.a = Pairing.G1Point(a[0], a[1]);
        // proof.b = Pairing.G2Point([b[0][0], b[0][1]], [b[1][0], b[1][1]]);
        // proof.c = Pairing.G1Point(c[0], c[1]);
        bool isValidProof = verifyTx(a, b, c, input);
        require(isValidProof, "The provided proof is not valid!");
        Solution memory solution = Solution(key, addr, true, tokenId);
        solutions[tokenId] = solution;
        uniqueSolutions[key] = true;
        emit SolutionAdded(key, addr, tokenId);
    }


    // TODO Create a function to mint new NFT only after the solution has been verified
    //  - make sure the solution is unique (has not been used before)
    //  - make sure you handle metadata as well as tokenSuplly
    function mint(address to, uint256 tokenId) public returns(bool){
        require(solutions[tokenId].exists,"solution has been used before");
        return super.mint(to, tokenId);
    }
}

  


























