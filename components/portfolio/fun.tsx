export default function Fun() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-semibold text-balance">A Bit More About Me</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Interests: technology, travel, [your interests]</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Fun Fact: I've helped build products used by 10M+ students but still get excited when a single teacher tells
            me we saved them 30 minutes of their day.
          </p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">Currently Learning: [Add current learning goals]</p>
        </div>
        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Travel: Product management across 4+ countries taught me that great products solve human problems,
            regardless of geography.
          </p>
        </div>
        <div className="rounded-lg border p-4 md:col-span-2">
          <p className="text-sm text-muted-foreground">
            Philosophy: I believe the best AI products make complex workflows feel effortless, not replace human
            judgment.
          </p>
        </div>
      </div>
    </div>
  )
}
