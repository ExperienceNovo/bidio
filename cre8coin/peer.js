//CONFIG
var CONFIG_NETWORKID = 88888888;
var CONFIG_DATADIR = "/path/to/folder";
var CONFIG_BOOTNODE = CONFIG_DATADIR/bootnode --nodekey=boot.key;
var CONFIG_ETHERBASE = geth account new --datadir=CONFIG_DATADIR --newtowrkid=CONFIG_NETWORKID


//PEER SETUP
geth --datadir=CONFIG_DATADIR init genesis.json
geth account new --datadir=CONFIG_DATADIR --newtowrkid=CONFIG_NETWORKID
geth --datadir=CONFIG_DATADIR --networkid=CONFIG_NETWORKID --bootnodes=CONFIG_BOOTNODE --rpc --rpcapi="db,eth,net,web3,personal,web3" --mine --minerthreads="1" --etherbase="CONFIG_ETHERBASE" --ws --wsport="8546" --wsorigins="*"


//RUN A BOOTNODE
//geth bootnode --genkey=boot.key
/Users/troverman/cre8coin/bootnode --genkey=boot.key
//CONFIG_DATADIR/bootnode  --genkey=boot.key

//geth boothnode --nodekey=boot.key
/Users/troverman/cre8coin/bootnode --nodekey=boot.key
///Users/troverman/cre8coin/bootnode --> path to bootnode executable
//CONFIG_DATADIR/bootnode  --genkey=boot.key


//MINE CRE8COIN
geth 
--datadir="/Users/troverman/cre8coin"
--networkid="88888888"
--bootnodes="enode://9a3291473090b814bcd3d62dd786f5d79012ffc31aa1b0ba42567834cd73716b5a472e8a42225421d52cc8aed5d8dccbca0f9eb22800fca968ee05ad215f935a@96.10.225.162:30301"
--rpc 
--rpcapi="db,eth,net,web3,personal,web3"
--rpccorsdomain="*"
--mine 
--minerthreads="1"
--etherbase="0xf58e480fdad24a0310935aab37b5fd25d6871ad6"
--ws 
--wsport="8546"
--wsorigins="*"

geth --datadir="/Users/troverman/cre8coin" init genesis.json
geth account new --datadir="/Users/troverman/cre8coin"
geth --datadir="/Users/troverman/cre8coin" --networkid="88888888" --bootnodes="enode://48a3eacd188f3e17edf0e6b08a9248e564c5745ce6cb6fb9cbfaa9ff9de5774a2f70250cf7539ac22f99767847cf395e579370ea686c930d6efaff93f76ab27b@198.85.222.158:30301" --rpc --rpcapi="db,eth,net,web3,personal,web3" --rpccorsdomain="*" --mine --minerthreads="1" --etherbase="0xa6e38eaa9c200cacca443f5293df2c3f0a1d8160" --ws --wsport="8546" --wsorigins="*"

//BOOTNODE SETUP
//runbootnode.then=>get CONFIG_BOOTNODE
//createnewaddress.then=>get CONFIG_ETHERBASE
//run peer with CONFIG

//RUN PEERS
//HARD CODE BOOTNODE + CONFIG
//createnewaddress.then=> run peer with CONFIG
