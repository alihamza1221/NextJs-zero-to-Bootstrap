import useElementInView from "./components/useElementInView";
import "./App.css";

function App() {
  const [setRefLine1] = useElementInView(true, 0.2);
  const [setRefLine2] = useElementInView(false, 0.2);
  const [setRefLine3] = useElementInView(true, 0.2);

  return (
    <>
      <div className="bg-white w-screen h-screen"></div>
      <div className="line-container flex flex-col gap-5 justify-center h-screen">
        <div
          ref={setRefLine1}
          className="line1 flex gap-5 w-screen -translate-x-36 transition-transform ease-linear"
        >
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
        </div>

        {/* line2 */}
        <div
          ref={setRefLine2}
          className="line2 flex gap-5 w-screen translate-x-36 transition-transform ease-linear"
        >
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
        </div>
        {/* line 3 */}
        <div
          ref={setRefLine3}
          className="line3 flex gap-5 w-screen -translate-x-48 transition-transform ease-linear"
        >
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
          <div className="flex justify-center flex-col gap-1 rounded-xl p-5 bg-white border border-slate-300">
            <img
              className="max-w-12 max-h-12 md:max-w-16 md:max-h-16
            "
              src="src\assets\Panda-Logo.jpg"
              alt="panda-logo"
            />
            <p className=" text-center">Panda</p>
          </div>
        </div>
      </div>
      <div className="bg-white w-screen h-screen"></div>
    </>
  );
}

export default App;
