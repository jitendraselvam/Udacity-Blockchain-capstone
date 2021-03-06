// define a variable to import the <Verifier> or <renamedVerifier> solidity contract generated by Zokrates
const SquareVerifier = artifacts.require('verifier');
const zokratesProof = require("../../zokrates/code/square/proof.json");

contract('TestVerifier', accounts => {
    describe('Verifier Tests', function(){
        beforeEach(async function(){
            this.contract = await SquareVerifier.new();
        });

        // Test verification with correct proof
        // - use the contents from proof.json generated from zokrates steps
        it('Test verification with correct proof', async function(){
            let response = await this.contract.verifyTx.call(...Object.values(zokratesProof.proof), zokratesProof.inputs);
            assert.equal(response, true)
        });

        // Test verification with incorrect proof
        it('Test verification with incorrect proof', async function () {
            let incorrectInputs = [
                "0x0000000000000000000000000000000000000000000000000000000000000001",
                "0x0000000000000000000000000000000000000000000000000000000000000001"
            ];
            let response = await this.contract.verifyTx.call(...Object.values(zokratesProof.proof), incorrectInputs);
            assert.equal(response, false);
        });
    });
});
