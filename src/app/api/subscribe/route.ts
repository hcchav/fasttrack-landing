import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email required" },
        { status: 400 }
      );
    }

    const { data: existing } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", email.toLowerCase())
      .single();

    if (existing) {
      return NextResponse.json(
        { error: "You're already on the list" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("waitlist").insert({
      email: email.toLowerCase(),
      source: "landing_page",
      created_at: new Date().toISOString(),
    });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "Failed to join waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
