export default function ContractsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Your Contracts</h1>
      <div className="mt-2 text-muted-foreground">
        <p>No contracts found. Start by creating a new contract.</p>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center gap-8">
        <a
          href="/dashboard/contracts/new"
          className="inline-block rounded-md bg-primary px-6 py-2 text-white font-medium shadow hover:bg-primary/90"
        >
          Create Contract
        </a>
      </div>
    </div>
  );
}