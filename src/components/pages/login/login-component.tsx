// 'use client';

// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import Link from 'next/link';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import * as z from 'zod';
// // import { signIn } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import { Eye, EyeClosed } from 'lucide-react';
// import toast from 'react-hot-toast';

// const loginSchema = z.object({
//     email: z.string().email('Invalid email address'),
//     password: z.string().min(1, 'Password is required'),
// });

// const LoginComponent = () => {
//     const router = useRouter();
//     const [showPassword, setShowPassword] = useState(false);
//     const [submitted, setSubmitted] = useState(false);

//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isSubmitting },
//     } = useForm({
//         resolver: zodResolver(loginSchema),
//     });

//     const onSubmit = async (data) => {
//         if (submitted) return;

//         // try {
//         //     const result = await signIn('credentials', {
//         //         ...data,
//         //         redirect: false,
//         //     });

//         //     if (result?.ok) {
//         //         toast.success("Selamat, Anda berhasil login!");
//         //         setSubmitted(true);
//         //         router.push("/");
//         //     } else if (result?.error) {
//         //         toast.error("Password atau email kurang tepat.");
//         //     }
//         // } catch (error) {
//         //     console.error('An error occurred during sign-in:', error);
//         //     toast.error('An unexpected error occurred. Please try again later.');
//         // }
//     };

//     return (
//         <div className="flex justify-center items-center z-10">
//             <form
//                 onSubmit={handleSubmit(onSubmit)}
//                 className="flex flex-col gap-[10px] bg-white p-5 md:p-7 md:w-[450px] rounded-[20px]"
//             >
//                 <div>
//                     <label className="text-[#151717] font-semibold">Email</label>
//                 </div>
//                 <div className="border-[1.5px] border-[#ecedec] rounded-[10px] h-[50px] flex items-center pl-[10px] transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
//                     <svg
//                         height={20}
//                         viewBox="0 0 32 32"
//                         width={20}
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <g id="Layer_3" data-name="Layer 3">
//                             <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
//                         </g>
//                     </svg>
//                     <input
//                         type="email"
//                         placeholder="Enter your Email"
//                         className="ml-[10px] rounded-[10px] border-0 w-[85%] h-full focus:outline-none"
//                         {...register('email')}
//                         disabled={isSubmitting || submitted}
//                     />
//                 </div>
//                 {errors.email && (
//                     <p className="text-red-500 text-[12px]">{errors.email.message}</p>
//                 )}

//                 <div>
//                     <label className="text-[#151717] font-semibold">Password</label>
//                 </div>
//                 <div className="relative border-[1.5px] border-[#ecedec] rounded-[10px] h-[50px] flex items-center pl-[10px] transition duration-200 ease-in-out focus-within:border-[#2d79f3]">
//                     <svg
//                         height={20}
//                         viewBox="-64 0 512 512"
//                         width={20}
//                         xmlns="http://www.w3.org/2000/svg"
//                     >
//                         <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
//                         <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
//                     </svg>
//                     <input
//                         type={showPassword ? 'text' : 'password'}
//                         placeholder="Enter your Password"
//                         className="ml-[10px] rounded-[10px] border-0 w-[85%] h-full focus:outline-none"
//                         {...register('password')}
//                         disabled={isSubmitting || submitted}
//                     />
//                     <button
//                         type="button"
//                         onClick={() => setShowPassword((prev) => !prev)}
//                         className="absolute right-2 top-[14px] focus:outline-none"
//                     >
//                         {showPassword ? (
//                             <Eye className="h-5 w-5 text-gray" />
//                         ) : (
//                             <EyeClosed className="h-5 w-5 text-gray" />
//                         )}
//                     </button>
//                 </div>
//                 {errors.password && (
//                     <p className="text-red-500 text-[12px]">{errors.password.message}</p>
//                 )}

//                 <div className="flex flex-row items-center gap-[10px] justify-between">
//                     <div className="flex items-center">
//                         <input
//                             type="checkbox"
//                             className="cursor-pointer"
//                             disabled={isSubmitting || submitted}
//                         />
//                         <label className="text-[14px] text-black font-normal ml-[5px]">
//                             Remember me
//                         </label>
//                     </div>
//                     <span className="text-[14px] ml-[5px] text-[#2d79f3] font-medium cursor-pointer">
//                         Forgot password?
//                     </span>
//                 </div>

//                 <Button
//                     type="submit"
//                     isLoading={isSubmitting}
//                     className="mt-[20px] mb-[10px] bg-primary border-0 text-white text-[15px] font-medium rounded-[10px] h-[50px] w-full cursor-pointer hover:bg-[#252727]"
//                 >
//                     Log In
//                 </Button>

//                 <p className="text-center text-black text-[14px] my-[5px]">
//                     Don't have an account?{' '}
//                     <Link href="/register" className="text-[#2d79f3] font-medium cursor-pointer">
//                         Register
//                     </Link>
//                 </p>
//             </form>
//         </div>
//     );
// };

// export default LoginComponent;