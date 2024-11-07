import { Helmet } from "react-helmet";
export default function Statistics() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Statistics | Gadegt Heaven</title>
      </Helmet>
      <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-600 to-purple-600 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-opacity-40"
          style={{
            backgroundImage: "url(https://via.placeholder.com/1500x1000)",
          }}
        ></div>

        <div className="relative z-10 text-center text-white p-8 space-y-6">
          <h1 className="text-6xl font-extrabold tracking-wide leading-tight">
            🚧 Under Construction 🚧
          </h1>
          <p className="text-xl font-semibold text-opacity-80">
            I&lsquo;am building something great. Stay tuned!
          </p>

          <p className="mt-6 text-lg">
            Need more info? Reach out at:{" "}
            <a href="mailto:info@example.com" className="text-yellow-400">
              info@shariful.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
