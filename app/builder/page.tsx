export default function BuilderPage() {
  return (
    <main className="h-screen bg-[#0a0f1e] text-white overflow-hidden grid grid-cols-[280px_1fr_380px]">
      <div className="bg-[#0d1321] border-r border-white/5">sidebar</div>
      <div className="bg-[#0a0f1e] overflow-y-auto">main</div>
      <div className="bg-[#0d1321] border-l border-white/5 overflow-y-auto">
        preview
      </div>
    </main>
  );
}
