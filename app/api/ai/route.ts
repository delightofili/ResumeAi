import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { type, data } = await req.json();

    let prompt = "";

    if (type === "improve_description") {
      prompt = `You are a professional resume writer. Improve this job description to be more impactful, use strong action verbs, and include measurable results where possible. Keep it concise (2-3 bullet points max). Return only the improved text, no explanation.

Job description: ${data.description}
Role: ${data.role}
Company: ${data.company}`;
    }

    if (type === "generate_summary") {
      prompt = `Write a compelling professional summary for a resume. Keep it 2-3 sentences. Be specific and impactful. Return only the summary text.

Name: ${data.name}
Title: ${data.title}
Skills: ${data.skills}
Years of experience: ${data.experience}`;
    }

    if (type === "suggest_skills") {
      prompt = `Suggest 8-10 relevant technical and soft skills for this role. Return only a comma-separated list of skills, nothing else.

Job title: ${data.title}
Industry: ${data.industry}`;
    }

    if (type === "ats_score") {
      prompt = `Analyze this resume and give an ATS score from 0-100. Return a JSON object with this exact shape:
{
  "score": 85,
  "feedback": ["Add more keywords", "Quantify achievements"],
  "strengths": ["Clear formatting", "Good skills section"]
}

Resume data: ${JSON.stringify(data.resume)}`;
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7,
      max_tokens: 500,
    });

    const result = completion.choices[0].message.content;

    return NextResponse.json({ result });
  } catch (error) {
    console.error("AI error:", error);
    return NextResponse.json({ error: "AI request failed" }, { status: 500 });
  }
}
