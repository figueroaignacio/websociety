// Components
import { SignInForm } from "@/modules/auth/ui/signin-form";

export default function SignInPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center justify-center text-start">
      <div className="w-full max-w-lg">
        <div className="text-center my-5">
          <h1 className="text-3xl font-bold text-muted-foreground">
            Welcome again to Web Society
          </h1>
        </div>
        <div>
          <SignInForm />
        </div>
      </div>
    </div>
  );
}
