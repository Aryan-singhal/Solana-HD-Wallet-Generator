import { useEffect, useState } from "react";
import { Button } from "../ui/button"
// import { Input } from "../ui/input"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Wallet from "./wallet";
import { Input } from "../ui/input";



function Pnemonics() {
    const [mnemonic, setmnemonic] = useState("");
    const [inputMnemonic, setInputMnemonic] = useState("");
    // const [key, setkey] = useState<string[]>([]);
    const [keys, setKeys] = useState<
        { index: number; publicKey: string; privateKey: string }[]
    >([]);
    // const [pvtkey, setpvtkey] = useState<string[]>([]);
    const [index, setIndex] = useState(1);


    async function fetchMnemonic() {
        const res = await fetch("http://localhost:4000/api/wallet/mnemonic");

        if (!res.ok) {
            throw new Error("Failed to fetch mnemonic");
        }

        const data = await res.json();
        setmnemonic(data.mnemonic);
        clearWallets();

    }

    async function genPublicKey() {
        const res = await fetch("http://localhost:4000/api/wallet/publickey", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                mnemonic,
                index,
            }),
        });

        const data = await res.json();

        setKeys(prev => [
            ...prev,
            {
                index,
                publicKey: data.publicKey,
                privateKey: data.privateKey,
            },
        ]);

        setIndex(i => i + 1);
    }

    function clearWallets() {
        setKeys([]);
        setIndex(1);
    }

    function onDelete(walletIndex: number) {
        setKeys(prev => prev.filter(w => w.index != walletIndex));
        console.log("deleting wallet: ", walletIndex)



    }



    useEffect(() => {
        if (mnemonic) {
            console.log("Mnemonic updated:", mnemonic);
            console.log("Keys", keys)
        }
    }, [mnemonic, keys]);

    return (
        <>
            <div className="flex p-3">
                <Input
                    className="flex-1 mr-5"
                    placeholder="Enter your mnemonic or click generate"
                    value={inputMnemonic}
                    onChange={(e) => setInputMnemonic(e.target.value)}
                />

                <Button
                    className="hover:cursor-pointer"
                    onClick={() => {
                        if (inputMnemonic.trim().split(" ").length !== 12) {
                            alert("Mnemonic must be 12 words");
                            return;
                        }
                        setmnemonic(inputMnemonic.trim());
                        setIndex(1);       // reset wallet index
                        setKeys([]);       // clear old wallets
                    }}
                >
                    Set Mnemonic
                </Button>
            </div>

            <Button className="hover:cursor-pointer mx-3" onClick={() => { fetchMnemonic() }}>Generate New Mnemonic</Button>

            {mnemonic !== "" && (
                <>
                    <Accordion type="single" collapsible className="w-[60vw] ml-[20vw]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Current Mnemonics</AccordionTrigger>
                            <AccordionContent className="flex flex-col text-balance">
                                <div className="grid grid-flow-col grid-rows-4 gap-4">
                                    {mnemonic.split(" ").map((word, index) => (
                                        <div key={index} className="">
                                            {index + 1}: {word}
                                        </div>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="flex">
                        <Button className="ml-[30vw]" onClick={() => { genPublicKey() }}>Add Wallet</Button>
                        <Button className="ml-3" onClick={() => { clearWallets() }}>Clear Wallets</Button>
                    </div>

                </>

            )}

            {keys.length > 0 && (
                <div className="space-y-4 mt-6">
                    {keys.map(({ index, publicKey, privateKey }) => (
                        <Wallet index={index} privateKey={privateKey} publicKey={publicKey} onDelete={onDelete}
                        />
                    ))}
                </div>
            )}


        </>)
}

export default Pnemonics