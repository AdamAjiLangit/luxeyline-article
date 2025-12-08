'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Eye, EyeClosed } from 'lucide-react';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { registerSchema, RegisterFormValues } from '@/validators/authSchema';

const RegisterComponent = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            nama_pengguna: '',
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: RegisterFormValues) => {
        setIsLoading(true);
        setSubmitError(null);

        try {
            const response = await fetch(`/api/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.status === 422) {
                toast.error('Email sudah terdaftar');
                return;
            }

            if (!response.ok) {
                toast.error('Gagal mendaftar');
                return;
            }

            toast.success('Registrasi berhasil, masuk otomatis...');

            const result = await signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (result?.ok) {
                router.push('/user/articles');
            } else {
                toast.error('Gagal login setelah registrasi');
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                setSubmitError(error.message);
            } else {
                setSubmitError('Terjadi kesalahan saat registrasi');
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex min-h-screen justify-center items-center z-10">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-[10px] bg-white p-5 md:p-7 md:w-[450px] rounded-[20px]"
                >
                    <FormField
                        control={form.control}
                        name="nama_pengguna"
                        render={({ field }) => (
                            <FormItem>
                                <label className="text-[#151717] font-semibold">Username</label>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your Username"
                                        {...field}
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <label className="text-[#151717] font-semibold">Email</label>
                                <FormControl>
                                    <Input
                                        type="email"
                                        placeholder="Enter your Email"
                                        {...field}
                                        disabled={isLoading}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <label className="text-[#151717] font-semibold">Password</label>
                                <FormControl>
                                    <div className="relative">
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="Enter your Password"
                                            {...field}
                                            disabled={isLoading}
                                            className="pr-10"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword((prev) => !prev)}
                                            className="absolute right-2 top-[10px] text-gray-500"
                                        >
                                            {showPassword ? (
                                                <Eye className="h-5 w-5" />
                                            ) : (
                                                <EyeClosed className="h-5 w-5" />
                                            )}
                                        </button>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <div className="flex flex-row items-center gap-2 mt-2">
                        <input type="checkbox" className="cursor-pointer" disabled={isLoading} />
                        <label className="text-sm text-black font-normal">Remember me</label>
                    </div>

                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="mt-4 bg-primary border-0 text-white text-[15px] font-medium rounded-[10px] h-[50px] w-full hover:bg-[#252727]"
                    >
                        {isLoading ? 'Registering...' : 'Register'}
                    </Button>

                    {submitError && (
                        <p className="text-red-500 text-center text-sm">{submitError}</p>
                    )}

                    <p className="text-center text-black text-sm mt-3">
                        Already have an account?{' '}
                        <Link href="/login" className="text-[#2d79f3] font-medium">
                            Log In
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    );
};

export default RegisterComponent;
