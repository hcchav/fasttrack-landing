"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;
    
    setStatus("loading");
    
    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus("success");
        setMessage("You're on the list. We'll notify you when we launch.");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Connection error. Try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={status === "loading"}
          className="h-12 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-500 focus:border-emerald-500 focus:ring-emerald-500"
        />
        <Button 
          type="submit" 
          disabled={status === "loading"}
          className="h-12 px-8 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold whitespace-nowrap"
        >
          {status === "loading" ? "Joining..." : "Get Early Access"}
        </Button>
      </div>
      {message && (
        <p className={`mt-3 text-sm ${status === "success" ? "text-emerald-400" : "text-red-400"}`}>
          {message}
        </p>
      )}
    </form>
  );
}
