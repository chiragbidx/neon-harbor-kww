export default function OverviewPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Contract Overview</h1>
      <p className="mt-2 text-muted-foreground">
        See a summary of your contract activity and progress.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <p className="text-lg text-muted-foreground mb-4">
            No contract data to display yet.
          </p>
        </div>
      </div>
    </div>
  );
}