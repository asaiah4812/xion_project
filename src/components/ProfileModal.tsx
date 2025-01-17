"use client";

import { CircleHelp, Settings, SquareArrowUpRight, UserRound, UserRoundPen, WalletMinimal, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import {
  Abstraxion,
  useAbstraxionAccount,
  useAbstraxionSigningClient,
  useModal
} from "@burnt-labs/abstraxion";
import { Button } from "@burnt-labs/ui";

interface ProfProps {
    id:number;
    name:string;
    icon: React.ReactNode;
    url: string;
 
}

const ProfileLink:ProfProps[] = [
    {
        id:1,
        name:"Profile",
        icon: <UserRound />,
        url: 'profile/'
    },
    {
        id:2,
        name:"Account Details",
        icon: <UserRoundPen />,
        url: 'account-details/'
    },
    {
        id:4,
        name:"Wallet ",
        icon: <WalletMinimal />,
        url: ''
    },

    {
        id:6,
        name:"Settings",
        icon: <Settings />,
        url: 'settings/'
    }
]

const ProfileModal = () => {
    const { data: { bech32Address }, isConnected, isConnecting } = useAbstraxionAccount();
    const { client } = useAbstraxionSigningClient();
    const [, setShow] = useModal();
    const [executeResult, setExecuteResult] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    // watch isConnected and isConnecting
    useEffect(() => {
        console.log({ isConnected, isConnecting });
    }, [isConnected, isConnecting]);
    const seatContractAddress = "xion1wtgpsd99zm87r58fwzfuw0d0n9se53vszqvluh8lmuh83266lv4s8pgcpp";
    const claimSeat = async () => {
        setLoading(true);
        const msg = {
            sales: {
                claim_item: {
                    token_id: String(Math.floor(Date.now() / 1000)),
                    owner: bech32Address,
                    token_uri: "",
                    extension: {},
                },
            },
        };

        try {
            const claimRes = await client?.execute(
                bech32Address,
                seatContractAddress,
                msg,
                "auto",
                "",
                [],
            );

            setExecuteResult(claimRes);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='absolute top-16 bg-slate-700 p-2 ring-1 ring-slate-500 w-[290px] rounded-xl -left-56' >
            <div className='p-2 rounded-xl bg-slate-600'>
                <Image src={'/me.jpg'} width={100} height={100} className='rounded-xl' alt='profile'/>
            </div>
            <div className='flex items-center space-x-3'>
                <h2 className='py-3 text-white font-bold text-xl'>Asaiah Henson</h2>
                <button className='size-6 bg-blue-500 p-1 flex items-center justify-center rounded-full text-white' ><Zap /></button>
                <span className='text-white'>10</span>
            </div>
            <div className='flex gap-y-3 justify-between flex-col'>
                <span className='text-slate-200'>
                @dreamerwebdev 
                </span>
                <small className='text-xs font-light text-slate-400'>Jointed September 2024</small>
            </div>
            <div className='flex flex-col py-3'>
                {
                    ProfileLink.map(profile => (
                        <Link href={profile.url} 
                        key={profile.id}
                        className='flex items-center gap-3 p-3 text-slate-300 rounded-lg hover:bg-slate-600/70'
                        >{profile.icon} <span>{profile.name}</span></Link>
                    ))
                }
            </div>
            <div className="flex flex-col items-center">
                <Button
                    fullWidth
                    // onClick={() => { setShow(true) }}
                    structure="base"
                >
                    {bech32Address ? (
                        <div className="flex items-center justify-center">VIEW ACCOUNT</div>
                    ) : (
                        "CONNECT"
                    )}
                </Button>
                {bech32Address && (
                    <div className="border-2 w-full border-primary rounded-md p-4 flex flex-row mt-5 gap-4">
                        <div className="flex flex-row gap-6">
                            <div className='text-slate-300'>
                            {`${bech32Address.slice(0,10)}.........${bech32Address.slice(26, 38)}`}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProfileModal
