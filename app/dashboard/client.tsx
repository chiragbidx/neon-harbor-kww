"use client";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Welcome to ContractFlow
        </h1>
        <p className="text-muted-foreground mt-2">
          Your centralized hub for all contract activities.
        </p>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            No contracts yet. Start by creating your first contract.
          </p>
          <a
            href="/dashboard/contracts/new"
            className="inline-block rounded-md bg-primary px-6 py-2 text-white font-medium shadow hover:bg-primary/90"
          >
            Create Contract
          </a>
        </div>
      </div>
    </div>
  );
}