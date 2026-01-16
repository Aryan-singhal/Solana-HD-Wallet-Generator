import { Eye, EyeOff, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

function Wallet({
    index,
    privateKey,
    publicKey,
    onDelete
}: {
    index: number;
    publicKey: string;
    privateKey: string;
    onDelete: (index: number) => void;
}) {
    const [showPrivate, setShowPrivate] = useState(false);

    return (
        <div className="rounded border mx-[20vw] w-[60vw] p-3 text-sm space-y-3">
            <div className="flex items-center justify-between">
                <div className="font-semibold">
                    Wallet {index}
                </div>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => onDelete(index)}
                    aria-label="Delete wallet"
                >
                    <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
            </div>

            <div className="font-mono break-all">
                <span className="text-gray-400">Public Key</span>
                <br />
                {publicKey}
            </div>

            <div className="font-mono break-all">
                <div className="flex items-center justify-between">
                    <span className="text-gray-400">Private Key</span>

                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setShowPrivate(v => !v)}
                        aria-label={
                            showPrivate ? "Hide private key" : "Show private key"
                        }
                    >
                        {showPrivate ? (
                            <EyeOff className="h-4 w-4" />
                        ) : (
                            <Eye className="h-4 w-4" />
                        )}
                    </Button>
                </div>

                <div className="mt-1 text-red-500">
                    {showPrivate
                        ? privateKey
                        : "•".repeat(Math.min(privateKey.length, 64))}
                </div>
            </div>
        </div>
    );
}

export default Wallet;
