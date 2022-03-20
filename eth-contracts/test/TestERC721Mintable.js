var ERC721MintableComplete = artifacts.require('JToken');

contract('TestERC721Mintable JToken', accounts => {

    
    const owner = accounts[0];

    const acc_1 = accounts[1];
    const acc_2 = accounts[2];

    const account1count = 5;
    const account2count = 15;

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: owner});

            // TODO: mint multiple tokens
            for(let i = 0; i < account1count; ++i){
                await this.contract.mint(acc_1, i + account1count);
            }
            for(let i = 0; i < account2count; ++i){
                await this.contract.mint(acc_2, i + account2count);
            }
        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply.call({from: owner});
            var totalMinted = account1count + account2count;
            assert.equal(totalSupply, totalMinted, "Total supply not equal to total minted");  
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf.call(acc_1);
            assert.equal(balance , account1count, "balance of account 1 is wrong");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenId = 3;
            let tokenURI = await this.contract.tokenURI.call(tokenId, {from: owner});
            assert.equal(tokenURI,"https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/" + tokenId,"Does not match tokenURI");
        })

        it('should transfer token from one owner to another', async function () { 
            let tokenId = 3;
            await this.contract.safeTransferFrom(acc_1, acc_2, tokenId, {from: acc_1});
            let owner = await this.contract.ownerOf(tokenId);
            assert.equal(owner, acc_2, "Token not transfer failed");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: owner});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            try {
                await this.contract.mint(acc_2, 6, {from: acc_1});
            } catch {
                assert.ok(true);
            }
            assert.fail("Non contract owner cannot mint");
        })

        it('should return contract owner', async function () { 
            assert.equal(this.contract.getOwner(), owner, "Contract owner is wrong");
        })

    });
})