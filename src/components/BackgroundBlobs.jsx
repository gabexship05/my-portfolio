// src/components/BackgroundBlobs.jsx
export default function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />
    </div>
  );
}
