import { Tx } from "@harmoniclabs/plu-ts";
import { BrowserWallet } from "@meshsdk/core";
import { koios } from "./koios";

async function getUnlockTx( wallet: BrowserWallet ): Promise<Tx>
{
    throw "'unlockTx' logic not implemented";   
}

export async function unlockTx( wallet: BrowserWallet ): Promise<string>
{
    const unsingedTx = await getUnlockTx( wallet );

    const txStr = await wallet.signTx(
        unsingedTx.toCbor().toString(),
        true // partial sign because we have smart contracts in the transaction
    );

    return (await koios.tx.submit( Tx.fromCbor( txStr ) )).toString();
}