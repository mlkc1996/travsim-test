import Link from "next/link";

export const LoginButton = ({ className = "" }: any) => {
  return (
    <Link className={`cta ${className}`} href="#">
      Sign in | Sign up
    </Link>
  );
};
