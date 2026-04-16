import { Badge } from "./components/Badge";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Stat } from "./components/Stat";

export default function App() {
  return (
    <main className="app-shell">
      <h1>Storybook Teachin</h1>
      <p className="lede">
        This page is a thin app shell. Open Storybook to explore and author
        stories: <code>npm run storybook</code>
      </p>
      <div className="demo-row">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Badge tone="success">On track</Badge>
      </div>
      <div className="demo-grid">
        <Card
          title="Reading streak"
          subtitle="Last 7 days"
          footer={<Button variant="ghost">View history</Button>}
        >
          You read on 5 of 7 days. Nice consistency.
        </Card>
        <Stat label="Stories written" value={12} hint="This month" />
        <Stat label="Components in library" value={8} trend="up" />
      </div>
    </main>
  );
}
