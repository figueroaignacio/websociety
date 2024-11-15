// Components
import { SignUpForm } from "@/modules/auth/ui/signup-form";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col items-center text-start">
      <div className="w-full max-w-lg border-none">
        <div className="text-center my-5">
          <h1 className="text-3xl font-bold text-muted-foreground">
            Welcome to Web Society
          </h1>
          <p className="text-muted-foreground">
            Create an account to get started!
          </p>
        </div>
        <div>
          <SignUpForm />
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link
              href="&auth/signin"
              className="font-medium text-primary hover:underline"
            >
              Sign in here
            </Link>
          </div>
        </div>
      </div>
      <footer className="mt-8 text-center text-sm text-muted-foreground">
        <p>&copy; 2024 Web Society. All rights reserved.</p>
        {/* <div className="mt-2 space-x-4">
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
          <Separator
            className="inline-block h-4 w-px bg-muted-foreground/30"
            orientation="vertical"
          />
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div> */}
      </footer>
    </div>
  );
}
