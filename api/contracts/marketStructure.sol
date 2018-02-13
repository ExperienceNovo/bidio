pragma solidity 0.4.19;
pragma experimental ABIEncoderV2;
contract multiDimensionalMarket{
    
    struct Asset{
        string identifier;
        uint amount;
    }
    struct Order{
        Asset[] array1;
        Asset[] array2;
    }

    event CreateOrder(Asset[] indexed assetSet, Asset[] indexed assetSet1);
    function createOrder(Asset[] assetSet, Asset[] assetSet1) public {
        CreateOrder(assetSet, assetSet1);
    }
    
}
