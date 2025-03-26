export default function Kittens() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Kittens</h1>
      <img
        src="/images/kittens.jpg"
        alt="Centered Image"
        className="w-auto max-h-[1000px]"
      />
    </div>
  );
}
