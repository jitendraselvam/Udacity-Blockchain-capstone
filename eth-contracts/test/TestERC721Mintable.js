var ERC721MintableComplete = artifacts.require('JToken');

contract('TestERC721Mintable JToken', accounts => {

    const account_one = accounts[0];

    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            for(let i = 5;i<15;i++)
            {
                await this.contract.mint(accounts[5],i);
            }

        })

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply();
            assert.equal(totalSupply, 10, "total supply is not equal to 10");
            
        })

        it('should get token balance', async function () { 
            let balance = await this.contract.balanceOf(accounts[5]);
            assert.equal(balance, 10, "balance should be 10");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI(5, {from: account_one});
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/5", "TokenURI is not created correctly");
            
        })

        it('should transfer token from one owner to another', async function () { 
            let tokenOwner = await this.contract.ownerOf(6);
            assert.equal(tokenOwner, accounts[5], "incorrect Owner of token before transfer");
            await this.contract.transferFrom(accounts[5],accounts[7],6, {from:accounts[5]}) 
            tokenOwner = await this.contract.ownerOf(6);
            assert.equal(tokenOwner, accounts[7], "incorrect Owner of token after transfer");
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            let errorCount = 0;
            try{
                await this.contract.mint(accounts[20],20, {from:accounts[20]});
            }
            catch(err)
            {
                errorCount++;
            }
            assert.equal(errorCount, 1, "Non owner cannot mint");

        })

        it('should return contract owner', async function () { 
            let ContractOwner = await this.contract.getOwner();
            assert.equal(ContractOwner, account_one, "Owner is incorrect");
        })

    });
})