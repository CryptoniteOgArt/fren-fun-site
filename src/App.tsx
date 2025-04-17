
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

function Home() {
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-4xl font-bold">Welcome to FREN.FUN 🐸</h1>
      <p className="text-lg">Create your meme coin, grow a community, and go viral on BNB Chain.</p>
      <div className="space-x-2">
        <Link to="/create-token"><Button>Create Token</Button></Link>
        <Link to="/explore"><Button variant="outline">Explore Tokens</Button></Link>
      </div>
    </div>
  );
}

function CreateToken() {
  return (
    <div className="p-6 space-y-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-semibold">Create Your Meme Coin</h2>
      <input className="w-full p-2 rounded border" placeholder="Token Name" />
      <input className="w-full p-2 rounded border" placeholder="Symbol (e.g., $FREN)" />
      <input className="w-full p-2 rounded border" placeholder="Total Supply" type="number" />
      <Button className="w-full">Deploy Token</Button>
    </div>
  );
}

function ExploreTokens() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-4">Trending Meme Coins</h2>
      <Card>
        <CardContent className="p-4 space-y-2">
          <h3 className="text-xl font-bold">$FROGGO 🐸</h3>
          <p>Supply: 1,000,000</p>
          <Link to="/token/froggo"><Button variant="link">View Project</Button></Link>
        </CardContent>
      </Card>
    </div>
  );
}

function TokenPage() {
  return (
    <div className="p-6 space-y-4">
      <h2 className="text-3xl font-bold">$FROGGO 🐸</h2>
      <p>Community-owned. Powered by memes. Driven by vibes.</p>
      <div className="bg-muted p-4 rounded">Social feed coming soon...</div>
    </div>
  );
}

function RedirectHandler() {
  const navigate = useNavigate();
  useEffect(() => {
    const redirect = sessionStorage.getItem("redirect");
    if (redirect) {
      sessionStorage.removeItem("redirect");
      navigate(redirect);
    }
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <Router>
      <RedirectHandler />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-token" element={<CreateToken />} />
        <Route path="/explore" element={<ExploreTokens />} />
        <Route path="/token/:id" element={<TokenPage />} />
      </Routes>
    </Router>
  );
}
