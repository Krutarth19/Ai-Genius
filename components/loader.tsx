import Image from "next/image";

export const Loader = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-y-4">
      <div className="w-10 h-10 relative animate-spin">
      <Image fill alt="Logo" src="/logo.png" />
      </div>
      <p className="text-muted-foreground">Genius Is Thinking...</p>
    </div>
  );
};
