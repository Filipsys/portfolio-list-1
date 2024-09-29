import Image from "next/image";

function App() {
  return (
    <div className="w-screen bg-gray-200 text-zinc-800 flex flex-col">
      <div className="flex flex-row">
        <div className="w-1/2 p-12">
          <div>
            <h2 className="font-bold text-2xl">Krosser</h2>
          </div>

          <div className="h-full flex items-center">
            <h1 className="text-7xl pt-12">
              The world's leading anti-fraud platform for financial institutions
            </h1>
          </div>
        </div>

        <div className="w-1/2 p-12 flex flex-col">
          <nav className="flex flex-row gap-16">
            <ul>
              <li>
                <a className="hover:underline" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Product & Services
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Benefits
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="hover:underline" href="#">
                  International Partners
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Contact us
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Our blog
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a className="hover:underline" href="#">
                  International Partners
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Contact us
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Our blog
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex items-end h-full">
            <h3 className="text-2xl">
              Cutting-edge fraud detection and prevention tools designed
              specifically for financial institutions. Real-time protection for
              countless trusted partners and businesses, Krosser is the best
              choice for your organization.
            </h3>
          </div>
        </div>
      </div>

      <div className=" flex mt-12 items-center overflow-hidden">
        <div className="w-[150vw] flex flex-row gap-4">
          <div className="relative">
            <Image
              src="/images/front-img-1.jpg"
              alt="First image"
              width={700}
              height={700}
              className="aspect-[9/16] object-cover h-auto"
            />
            <p className="absolute top-0 right-0 p-4 text-right w-2/3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
              veniam?
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/front-img-2.jpg"
              alt="Second image"
              width={700}
              height={700}
              className="aspect-[9/16] object-cover h-auto"
            />

            <p className="absolute top-0 right-0 p-4 text-right w-2/3 text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
              veniam?
            </p>
          </div>
          <div className="relative">
            <Image
              src="/images/front-img-3.jpg"
              alt="Third image"
              width={700}
              height={700}
              priority
              className="aspect-[9/16] object-cover h-auto"
            />

            <p className="absolute top-0 right-0 p-4 text-right w-2/3 text-white">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum,
              veniam?
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-12">
        <div>
          <h2 className="text-7xl pb-12 w-2/3">
            One subsciption, one platform, no hassle
          </h2>
        </div>

        <div className="flex flex-row">
          <div className="grid grid-cols-2 grid-rows-2 w-1/3 p-4 ">
            <div />
            <div />
            <div className="flex items-end text-l">
              See our platform in action and discover how it elevates your fraud
              prevention effortlessly.
            </div>
            <div />
          </div>

          <div className="flex flex-col gap-8 w-2/3 *:text-4xl p-4">
            <p>
              Maintaining multiple payment systems is complex and error-prone.
              Our platform unifies everything, making transactions seamless and
              hassle-free.
            </p>
            <p>
              Securing multiple systems is difficult and risky. Our solution
              offers all-in-one, adaptive protection against emerging threats.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-12 bg-gray-300">
        <div className="grid grid-cols-5 grid-rows-3 w-full">
          <h2>Trusted by thousands</h2>
          <div />
          <div />
          <div />
          <div />

          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

export default App;
