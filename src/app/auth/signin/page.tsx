import { LoginForm } from "@/app/auth/_components/signin-form";
import Image from "next/image";
import { BotMessageSquare } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <a href="" className="flex items-center gap-2 font-medium">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <BotMessageSquare className="size-5" />
            </div>
            Counsel Bot
          </a>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/landing-page.svg"
          alt="Image"
          fill
          className="absolute inset-0 h-full w-full object-cover bg-white"
        />
      </div>
    </div>
  );
}
