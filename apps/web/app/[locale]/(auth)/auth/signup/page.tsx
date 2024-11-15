// Components
import { Link } from "@/config/i18n/routing";
import { SignUpForm } from "@/modules/auth/ui/signup-form";

export default function SignUpPage() {
  return (
    <div className="container mx-auto flex items-center flex-col">
      <h1>Sign Up</h1>
      <p>Create your account</p>
      <SignUpForm />
      <div>
        <p>Already have an account?</p>
        <Link href="auth/signin">Sign In</Link>
      </div>
    </div>
  );
}
