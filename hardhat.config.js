require("@nomiclabs/hardhat-waffle");
const projectID='ddc199a341614cda822c1380a4e5e85c'
const fs=require('fs')
const keyData=fs.readFileSync('./p-key.txt',{
  encoding:'utf8',flag:'r'
})

module.exports = {
  defaultNetwork:"hardhat",
  networks:{
      hardhat:{
        chainId:1337//config standard
      },
      mumbai:{
        url:`https://polygon-mumbai.infura.io/v3/${projectID}`,
        accounts:[keyData]
      },
      mumbai:{
        url:`https://mainnet.infura.io/v3/${projectID}`,
        accounts:[keyData]
      }

  },
  solidity: {
    version:"0.8.4",
    settings:{
      optimizer:{
        enabled:true,
        runs:200
      }
    }
  }
};
