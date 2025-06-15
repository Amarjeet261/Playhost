export default function SubHeader() {
  return (
    <section className="relative h-[550px] w-full flex items-center justify-center bg-[url('/subheader-affliate.webp')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000a8] z-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          Join Our Affiliate Program
        </h1>
        <p className="text-sm sm:text-base text-gray-200 max-w-xl mx-auto">
          Earn rewards by promoting our platform. Sign up today and start sharing with your audience.
        </p>
      </div>
    </section>
  );
}
