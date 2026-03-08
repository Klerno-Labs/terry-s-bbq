import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-center px-4">
      <div>
        <h1 className="font-heading text-9xl text-primary mb-4">404</h1>
        <h2 className="font-heading text-4xl text-text-main mb-6">
          Looks like the smoker got too hot...
        </h2>
        <p className="font-body text-lg text-text-muted mb-8">
          We couldn&apos;t find the page you were looking for.
        </p>
        <Link href="/">
          <Button variant="primary">Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}