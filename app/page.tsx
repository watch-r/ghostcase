import { Icons } from "@/components/icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Phone from "@/components/Phone";
import Reviews from "@/components/Reviews";
import { CheckIcon, StarFilledIcon } from "@radix-ui/react-icons";
import { Check, Star } from "lucide-react";
import Image from "next/image";

export default function Home() {
    return (
        <div className='bg-slate-50'>
            <section>
                <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg;pb-52'>
                    <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
                        <div className='relative mx-auto text-center lg:text-left flex flex-col items-center lg:items-start'>
                            <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
                                <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t via-slate-50/50 from-slate-50 h-28' />
                                <Image
                                    src={"/ghost-1.png"}
                                    alt={""}
                                    width={100}
                                    height={300}
                                    className='w-full'
                                />
                            </div>
                            <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl'>
                                Your Image on a{" "}
                                <span className='bg-blue-600 px-2 text-white'>
                                    Custom
                                </span>{" "}
                                Phone Case
                            </h1>
                            <p className='mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
                                Capture your favourite memories with your own,{" "}
                                <span className='font-semibold'>
                                    one-of-one
                                </span>{" "}
                                phone case. GhostCase allows you to protect your
                                memories, not just your phone case
                            </p>
                            <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                                <div className='space-y-2'>
                                    <li className='flex gap-1.5 items-center text-left'>
                                        <CheckIcon className='h-5 w-5 shrink-0 text-blue-600' />
                                        High-quality, durable material
                                    </li>
                                    <li className='flex gap-1.5 items-center text-left'>
                                        <CheckIcon className='h-5 w-5 shrink-0 text-blue-600' />
                                        High-quality, durable material
                                    </li>
                                    <li className='flex gap-1.5 items-center text-left'>
                                        <CheckIcon className='h-5 w-5 shrink-0 text-blue-600' />
                                        Modern iPhone models Supported
                                    </li>
                                </div>
                            </ul>
                            <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
                                <div className='flex -space-x-4'>
                                    <Image
                                        src={"/users/user-1.png"}
                                        alt={""}
                                        width={50}
                                        height={50}
                                        className='inline-block rounded-full ring-2 ring-slate-100'
                                    />
                                    <Image
                                        src={"/users/user-2.png"}
                                        alt={""}
                                        width={50}
                                        height={50}
                                        className='inline-block rounded-full ring-2 ring-slate-100'
                                    />
                                    <Image
                                        src={"/users/user-3.png"}
                                        alt={""}
                                        width={50}
                                        height={50}
                                        className='inline-block rounded-full ring-2 ring-slate-100'
                                    />
                                    <Image
                                        src={"/users/user-4.jpg"}
                                        alt={""}
                                        width={50}
                                        height={50}
                                        className='inline-block rounded-full ring-2 ring-slate-100'
                                    />
                                    <Image
                                        src={"/users/user-5.jpg"}
                                        alt={""}
                                        width={50}
                                        height={50}
                                        className='inline-block rounded-full ring-2 ring-slate-100 object-cover'
                                    />
                                </div>
                                <div className='flex flex-col items-center sm:items-start justify-between'>
                                    <div className='flex gap-0.5'>
                                        <StarFilledIcon className='h-4 w-4 text-blue-600 fill-blue-600' />
                                        <StarFilledIcon className='h-4 w-4 text-blue-600 fill-blue-600' />
                                        <StarFilledIcon className='h-4 w-4 text-blue-600 fill-blue-600' />
                                        <StarFilledIcon className='h-4 w-4 text-blue-600 fill-blue-600' />
                                        <StarFilledIcon className='h-4 w-4 text-blue-600 fill-blue-600' />
                                    </div>
                                    <p>
                                        <span className='font-semibold'>
                                            1,132
                                        </span>{" "}
                                        happy customers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
                        <div className='relative md:max-w-xl'>
                            <Image
                                src={"/your-image.png"}
                                alt={""}
                                width={300}
                                height={300}
                                className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
                            />
                            <Image
                                src={"/line.png"}
                                alt={""}
                                width={100}
                                height={100}
                                className='absolute w-20 -left-6 -bottom-6 select-none'
                            />
                            <Phone
                                className='w-64'
                                imgSrc='/testimonials/1.jpg'
                            />
                        </div>
                    </div>
                </MaxWidthWrapper>
            </section>
            {/* value Propositon Section */}
            <section className='bg-slate-100 py-24'>
                <MaxWidthWrapper className='flex flex-col items-center gap-16 sm:gap-32'>
                    <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6'>
                        <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                            What our{" "}
                            <span className='relative px-2'>
                                customers{" "}
                                <Icons.underline className='hidden sm:block pointer-events-none absolute inset-x-0 -bottom-6 text-blue-500' />{" "}
                            </span>{" "}
                            Say
                        </h2>
                        <Image
                            src={"/ghost-2.png"}
                            alt={""}
                            width={300}
                            height={300}
                            className='w-24 order-0 lg:order-2'
                        />
                    </div>
                    {/* 1st user */}
                    <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
                        <div className='flrx flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 '>
                            <div className='flex gap-0.5 mb-2'>
                                <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
                                <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
                                <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
                                <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
                                <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
                            </div>
                            <div className='text-lg leading-8'>
                                <p>
                                    &quot;The case feels durable and I even got
                                    a compliment on the design. Had the case for
                                    two and a half months now and{" "}
                                    <span className='p-0.5 bg-slate-800 text-white'>
                                        the image is super clear
                                    </span>
                                    , on the case I had before, the image
                                    started fading into yellow-ish color after a
                                    couple weeks. Love it.&quot;
                                </p>
                            </div>
                            <div className='flex gap-4 mt-2'>
                                <Image
                                    width={300}
                                    height={300}
                                    className='rounded-full h-12 w-12 object-cover'
                                    src={"/users/user-1.png"}
                                    alt={""}
                                />
                                <div className='flex flex-col'>
                                    <p className='font-semibold'>Jonathan</p>
                                    <div className='flex gap-1.5 items-center text-zinc-600'>
                                        <Check className='h-4 w-4 stroke-[3px] text-blue-600' />
                                        <p className='text-sm'>
                                            Verified Purchase
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 2nd user */}
                    <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
                        <div className='flrx flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 '>
                            <div className='flex gap-0.5 mb-2'>
                                <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
                                <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
                                <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
                                <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
                                <Star className='h-5 w-5 text-blue-600 fill-blue-600' />
                            </div>
                            <div className='text-lg leading-8'>
                                <p>
                                    &quot;I usually keep my phone together with
                                    my keys in my pocket and that led to some
                                    pretty heavy scratchmarks on all of my last
                                    phone cases. This one, besides a barely
                                    noticeable scratch on the corner,{" "}
                                    <span className='p-0.5 bg-slate-800 text-white'>
                                        looks brand new after about half a year
                                    </span>
                                    . I dig it.&quot;
                                </p>
                            </div>

                            <div className='flex gap-4 mt-2'>
                                <Image
                                    width={300}
                                    height={300}
                                    className='rounded-full h-12 w-12 object-cover'
                                    src={"/users/user-4.jpg"}
                                    alt={""}
                                />
                                <div className='flex flex-col'>
                                    <p className='font-semibold'>Watson</p>
                                    <div className='flex gap-1.5 items-center text-zinc-600'>
                                        <Check className='h-4 w-4 stroke-[3px] text-blue-600' />
                                        <p className='text-sm'>
                                            Verified Purchase
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
                <div className='pt-16'>
                    <Reviews />
                </div>
            </section>
        </div>
    );
}
