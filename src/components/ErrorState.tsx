export default function ErrorState({ message }: { message: string }) {
  return (
    <div className="text-red-600 text-center mt-10">
      {message}
    </div>
  );
}
