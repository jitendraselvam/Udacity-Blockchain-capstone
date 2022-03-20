const SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
const zokratesProof = require("../../zokrates/code/square/proof.json");

contract('TestSolnSquareVerifier', accounts => {
    describe('SolnSquareVerifier Tests', function(){
        beforeEach(async function() {
            this.contract = await SolnSquareVerifier.new();
        });

        // Test if a new solution can be added for contract - SolnSquareVerifier
        it('new solution can be added for contract', async function(){
            let proofs = Object.values(zokratesProof.proof);
            let inputs = zokratesProof.inputs;
            let tx = await this.contract.addSolution(accounts[1], 1, ...proofs, inputs, {from: accounts[0]});
            //console.log("!@#$" + JSON.stringify(tx));
            let addedEvent = tx.logs[0].event;
            assert.equal(addedEvent, 'SolutionAdded', 'Invalid event'); 
        });
        // Test if an ERC721 token can be minted for contract - SolnSquareVerifier
        it('token can be minted for contract', async function(){
            await this.contract.addSolution(accounts[1], 1, ...Object.values(zokratesProof.proof), zokratesProof.inputs, {from: accounts[0]});
            let tx = await this.contract.mint(accounts[1], 1, {from: accounts[0]});
            let tokenTransferredEvent = tx.logs[0].event;
            assert.equal(tokenTransferredEvent, 'Transfer', 'Invalid event');
        });
    });
})