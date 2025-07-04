'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { Eye, EyeClosed } from 'lucide-react';
import toast from 'react-hot-toast';

import { loginSchema, LoginFormValues } from '@/validators/authSchema';
import {
    Form,
    FormField,
    FormItem,
    FormControl,
    FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const LoginComponent = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (data: LoginFormValues) => {
        const res = await signIn('credentials', {
            redirect: false,
            email: data.email,
            password: data.password,
        });

        if (res?.ok) {
            toast.success('Berhasil login!');

            const session = await fetch('/api/auth/session');
            const json = await session.json();

            if (json?.user?.role === 'admin') {
                router.push('/dashboard');
            } else {
                router.push('/user/articles');
            }
        } else {
            toast.error('Email atau password salah!');
        }
    };

    return (
        <div className="flex min-h-screen justify-center items-center z-10">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-4 bg-white p-5 md:p-7 md:w-[450px] rounded-[20px]"
                >
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <label className="text-[#151717] font-semibold">Email</label>
                                <FormControl>
                                    <Input
                                        placeholder="Enter your Email"
                                        {...field}
                                        disabled={form.formState.isSubmitting}
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
                                            disabled={form.formState.isSubmitting}
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

                    <div className="flex flex-row items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <input type="checkbox" disabled={form.formState.isSubmitting} />
                            <label>Remember me</label>
                        </div>
                        <span className="text-[#2d79f3] font-medium cursor-pointer">Forgot password?</span>
                    </div>

                    <Button
                        type="submit"
                        disabled={form.formState.isSubmitting}
                        className="mt-4 w-full h-12 bg-primary text-white rounded-[10px] hover:bg-[#252727]"
                    >
                        {form.formState.isSubmitting ? 'Logging in...' : 'Log In'}
                    </Button>

                    <p className="text-center text-black text-[14px] mt-2">
                        Don&apos;t have an account?{' '}
                        <Link href="/register" className="text-[#2d79f3] font-medium">
                            Register
                        </Link>
                    </p>
                </form>
            </Form>
        </div>
    );
};

export default LoginComponent;
